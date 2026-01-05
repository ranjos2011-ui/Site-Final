
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CalculatorInputs, CalculationResult, CostItem, CostType, CostPeriod } from '../types';
import { getFinancialAdvice } from '../services/geminiService';

type CalculatorType = 'aposentadoria' | 'comparador' | 'juros-compostos' | 'tempo' | 'milhao' | 'renda' | 'eficiencia-fiscal';

const ExecutionSummary: React.FC<{ result: CalculationResult, inputs: CalculatorInputs, type: CalculatorType }> = ({ result, inputs, type }) => {
  const formatValue = (val: number) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  const isRetirement = type === 'aposentadoria';
  const checkoutLink = "https://pay.kiwify.com.br/gOVXYCm";

  if (isRetirement) {
    const gap = (result.futureValue || 0) - (result.requiredCapital4Percent || 0);
    const isSurplus = gap >= 0;
    const simulationYears = inputs.retirementAge - inputs.currentAge;

    return (
      <div className="space-y-12 mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <div className="flex-1 bg-white p-10 rounded-[40px] border-2 border-[#c5a059] shadow-xl shadow-[#c5a059]/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/5 rounded-full -mr-16 -mt-16"></div>
             <h4 className="text-[11px] font-black text-[#c5a059] uppercase tracking-[0.3em] mb-8">Patrimônio Alcançado</h4>
             <div className="mb-10">
               <p className="text-5xl font-black text-[#0a0f1c] mb-2">{formatValue(result.futureValue)}</p>
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Geração de Renda: {formatValue(result.sustainableMonthlyIncome || 0)}/mês</span>
             </div>
             <div className="pt-8 border-t border-gray-50 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Total Investido</span>
                  <span className="text-xs font-bold text-[#0a0f1c]">{formatValue(result.totalInvested)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Juros Acumulados</span>
                  <span className="text-xs font-bold text-[#c5a059]">{formatValue(result.totalInterest)}</span>
                </div>
             </div>
          </div>

          <div className="flex-1 bg-[#0a0f1c] p-10 rounded-[40px] text-white relative shadow-2xl shadow-black/20">
             <h4 className="text-[11px] font-black text-[#c5a059] uppercase tracking-[0.3em] mb-8">Meta (Regra dos 4%)</h4>
             <div className="mb-10">
               <p className="text-4xl font-black text-white mb-2">{formatValue(result.requiredCapital4Percent || 0)}</p>
               <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Para Renda de {formatValue(inputs.desiredIncome || 0)}/mês</span>
             </div>
             <div className={`mt-8 p-6 rounded-3xl border transition-all ${isSurplus ? 'border-green-500/30 bg-green-500/5' : 'border-[#c5a059]/30 bg-[#c5a059]/5'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{isSurplus ? 'Superavit' : 'Ajuste Necessário'}</span>
                  <div className={`w-2 h-2 rounded-full ${isSurplus ? 'bg-green-500' : 'bg-[#c5a059]'}`}></div>
                </div>
                <p className={`text-xl font-black ${isSurplus ? 'text-green-400' : 'text-[#c5a059]'}`}>
                  {isSurplus ? '+' : ''}{formatValue(gap)}
                </p>
             </div>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[50px] border border-gray-100 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-[10px] font-black text-[#c5a059] uppercase tracking-[0.4em] mb-12 text-center">Caminhos Estratégicos para a Meta</h4>
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              <div className={`p-8 rounded-[32px] border ${!isSurplus ? 'bg-gray-50 border-gray-100 shadow-sm' : 'opacity-60 grayscale border-dashed border-gray-200'} transition-all`}>
                <div className="w-10 h-10 bg-[#0a0f1c] text-[#c5a059] rounded-2xl flex items-center justify-center font-black text-xs mb-6 shadow-lg shadow-black/10">1</div>
                <h5 className="text-[10px] font-black text-[#0a0f1c] uppercase tracking-widest mb-4">Aumentar Prazo</h5>
                <p className="text-xs text-gray-400 leading-relaxed font-light mb-6">Ajustar o horizonte temporal permite que o tempo reduza a necessidade de esforço mensal imediato.</p>
                {!isSurplus && result.requiredYears && (
                  <div className="pt-6 border-t border-gray-200">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Novo Prazo Sugerido</span>
                    <p className="text-lg font-black text-[#0a0f1c]">{result.requiredYears.toFixed(0)} anos</p>
                    <span className="text-[8px] font-bold text-[#c5a059] uppercase">(+{Math.max(0, result.requiredYears - simulationYears).toFixed(0)} anos de plano)</span>
                  </div>
                )}
              </div>
              <div className={`p-8 rounded-[32px] border ${!isSurplus ? 'bg-gray-50 border-gray-100 shadow-sm' : 'opacity-60 grayscale border-dashed border-gray-200'} transition-all`}>
                <div className="w-10 h-10 bg-[#0a0f1c] text-[#c5a059] rounded-2xl flex items-center justify-center font-black text-xs mb-6 shadow-lg shadow-black/10">2</div>
                <h5 className="text-[10px] font-black text-[#0a0f1c] uppercase tracking-widest mb-4">Reduzir Sonho</h5>
                <p className="text-xs text-gray-400 leading-relaxed font-light mb-6">Ajustar a expectativa de retirada para o que o seu patrimônio atual consegue sustentar com segurança.</p>
                {!isSurplus && result.sustainableMonthlyIncome && (
                  <div className="pt-6 border-t border-gray-200">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Renda Alcançável Hoje</span>
                    <p className="text-lg font-black text-[#0a0f1c]">{formatValue(result.sustainableMonthlyIncome)}</p>
                    <span className="text-[8px] font-bold text-[#c5a059] uppercase">(Retirada de 4% a.a.)</span>
                  </div>
                )}
              </div>
              <div className={`p-8 rounded-[32px] border ${!isSurplus ? 'bg-[#0a0f1c] border-[#0a0f1c] text-white shadow-2xl shadow-black/20' : 'opacity-60 grayscale border-dashed border-gray-200'} transition-all`}>
                <div className="w-10 h-10 bg-[#c5a059] text-white rounded-2xl flex items-center justify-center font-black text-xs mb-6 shadow-lg shadow-[#c5a059]/20">3</div>
                <h5 className={`text-[10px] font-black uppercase tracking-widest mb-4 ${!isSurplus ? 'text-[#c5a059]' : 'text-[#0a0f1c]'}`}>Aumentar Aportes</h5>
                <p className={`text-xs leading-relaxed font-light mb-6 ${!isSurplus ? 'text-gray-400' : 'text-gray-500'}`}>Intensificar a capacidade de poupança mensal para atingir a meta no prazo estipulado.</p>
                {!isSurplus && result.requiredMonthlySavings && (
                  <div className="pt-6 border-t border-white/10">
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Novo Aporte Sugerido</span>
                    <p className="text-lg font-black text-white">{formatValue(result.requiredMonthlySavings)}</p>
                    <span className="text-[8px] font-bold text-[#c5a059] uppercase">(+ {formatValue(result.requiredMonthlySavings - (inputs.monthlySavings || 0))}/mês)</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-[#0a0f1c] p-12 rounded-[50px] text-center relative overflow-hidden border border-white/5 shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/10 rounded-full -mr-48 -mt-48 blur-[100px]"></div>
              <div className="relative z-10 flex flex-col items-center">
                <span className="bg-[#c5a059]/10 text-[#c5a059] px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-[0.3em] mb-8 border border-[#c5a059]/20">Formação Estratégica</span>
                <h5 className="text-3xl font-black text-white mb-4">Aposentadoria Global</h5>
                <p className="text-sm text-gray-400 leading-relaxed font-light max-w-2xl mx-auto mb-10">
                  Aprenda a investir de forma global, com planejamento sucessório, abrir contas no exterior e entender quando é necessário abrir uma offshore para máxima eficiência fiscal.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-8 mb-4">
                  <div className="text-left">
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Investimento Único</span>
                    <p className="text-2xl font-black text-white">R$ 1.497,00</p>
                  </div>
                  <a href={checkoutLink} target="_blank" rel="noopener noreferrer" className="bg-[#c5a059] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-white hover:text-[#0a0f1c] transition-all shadow-xl shadow-[#c5a059]/20">
                    Matricular-se Agora →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm mb-12">
      <h3 className="text-[12px] font-extrabold text-[#0a0f1c] uppercase tracking-[0.4em] mb-8">Resultado da Simulação</h3>
      <div className="grid md:grid-cols-2 gap-8">
         <div className="bg-gray-50 p-8 rounded-3xl">
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Patrimônio Final</span>
            <p className="text-3xl font-black text-[#0a0f1c]">{formatValue(result.futureValue)}</p>
         </div>
         <div className="bg-gray-50 p-8 rounded-3xl">
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Total Investido</span>
            <p className="text-3xl font-black text-gray-400">{formatValue(result.totalInvested)}</p>
         </div>
      </div>
    </div>
  );
};

const Calculadoras: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const activeTab = (type as CalculatorType) || null;

  const [inputs, setInputs] = useState<CalculatorInputs>({
    currentAge: 35,
    retirementAge: 65,
    desiredIncome: 15000,
    familyIncome: 25000,
    returnPeriodType: 'ANNUALLY',
    simulationYears: 25,
    initialInvestment: 200000,
    monthlySavings: 5000,
    expectedReturn: 6
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setResult(null);
  }, [type]);

  const calculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const projectionYears = activeTab === 'aposentadoria' ? (inputs.retirementAge - inputs.currentAge) : (inputs.simulationYears || 10);
    if (activeTab === 'aposentadoria' && projectionYears <= 0) {
      alert("A idade desejada para aposentadoria deve ser maior que a idade atual.");
      setLoading(false);
      return;
    }
    
    const monthlyRate = inputs.returnPeriodType === 'MONTHLY' ? ((inputs.expectedReturn || 0) / 100) : Math.pow(1 + (inputs.expectedReturn || 0) / 100, 1 / 12) - 1;
    const months = projectionYears * 12;
    let fVal = (inputs.initialInvestment || 0) * Math.pow(1 + monthlyRate, months);
    if (monthlyRate > 0) fVal += (inputs.monthlySavings || 0) * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    else fVal += (inputs.monthlySavings || 0) * months;

    const totalInv = (inputs.initialInvestment || 0) + ((inputs.monthlySavings || 0) * months);
    const requiredCapital = ((inputs.desiredIncome || 0) * 12) / 0.04;
    const sustainableIncome = fVal * (0.04 / 12);

    let requiredMonthlySavings = inputs.monthlySavings || 0;
    let requiredYears = projectionYears;
    if (activeTab === 'aposentadoria' && sustainableIncome < (inputs.desiredIncome || 0)) {
      const powPart = Math.pow(1 + monthlyRate, months);
      requiredMonthlySavings = (monthlyRate > 0) ? (requiredCapital - (inputs.initialInvestment || 0) * powPart) * monthlyRate / (powPart - 1) : (requiredCapital - (inputs.initialInvestment || 0)) / months;
      if (monthlyRate > 0) {
        const num = requiredCapital + ((inputs.monthlySavings || 0) / monthlyRate);
        const den = (inputs.initialInvestment || 0) + ((inputs.monthlySavings || 0) / monthlyRate);
        requiredYears = Math.log(num / den) / Math.log(1 + monthlyRate) / 12;
      } else requiredYears = (requiredCapital - (inputs.initialInvestment || 0)) / (inputs.monthlySavings || 0) / 12;
    }

    const results: CalculationResult = {
      futureValue: fVal,
      totalInvested: totalInv,
      totalInterest: fVal - totalInv,
      requiredCapital4Percent: requiredCapital,
      sustainableMonthlyIncome: sustainableIncome,
      requiredMonthlySavings: Math.max(0, requiredMonthlySavings),
      requiredYears: requiredYears,
      achievableMonthlyIncome: sustainableIncome
    };
    const aiAnalysis = await getFinancialAdvice({ ...inputs, simulationYears: projectionYears }, results, activeTab || 'retirement');
    setResult({ ...results, aiAnalysis });
    setLoading(false);
  };

  const tabs = [
    { id: 'aposentadoria', label: 'Aposentadoria', desc: 'Simule o capital necessário para viver de renda global.', externalUrl: 'https://ranjosconsult2.netlify.app' },
    { id: 'comparador', label: 'Comparador de Custos', desc: 'Analise a eficiência entre diferentes estruturas patrimoniais.', externalUrl: 'https://unrivaled-nougat-c58709.netlify.app' },
    { id: 'juros-compostos', label: 'Juros Compostos', desc: 'O poder do tempo e dos aportes na moeda forte.' },
    { id: 'tempo', label: 'Tempo Estimado', desc: 'Quanto tempo falta para sua liberdade financeira?' },
    { id: 'milhao', label: 'Primeiro Milhão', desc: 'Planejamento tático para atingir seu primeiro milhão.' },
    { id: 'renda', label: 'Viver de Renda', desc: 'Cálculo de taxa de retirada segura (SWR).' },
    { id: 'eficiencia-fiscal', label: 'Eficiência Fiscal', desc: 'Projeção de ganhos com diferimento tributário.' },
  ] as { id: CalculatorType, label: string, desc: string, externalUrl?: string }[];

  if (!activeTab) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 animate-in fade-in duration-700">
        <div className="text-center mb-16">
          <h2 className="text-xs tracking-[0.4em] uppercase font-bold text-[#c5a059] mb-4">Hub de Engenharia</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a0f1c] mb-6 tracking-tight">Calculadoras Estratégicas.</h1>
          <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">Selecione uma ferramenta especializada para modelar seu futuro patrimonial internacional.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tabs.map((tab) => (
            tab.externalUrl ? (
              <a 
                key={tab.id}
                href={tab.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#c5a059]/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-8 group-hover:bg-[#0a0f1c] group-hover:border-[#0a0f1c] transition-colors">
                  <span className="text-[#c5a059] font-black text-xl">+</span>
                </div>
                <h3 className="text-xl font-bold text-[#0a0f1c] mb-4 group-hover:text-[#c5a059] transition-colors">{tab.label}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed mb-8">{tab.desc}</p>
                <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-[#c5a059]">
                  Acessar Ferramenta Externa
                  <svg className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            ) : (
              <Link 
                key={tab.id}
                to={`/calculadoras/${tab.id}`}
                className="group bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#c5a059]/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-8 group-hover:bg-[#0a0f1c] group-hover:border-[#0a0f1c] transition-colors">
                  <span className="text-[#c5a059] font-black text-xl">+</span>
                </div>
                <h3 className="text-xl font-bold text-[#0a0f1c] mb-4 group-hover:text-[#c5a059] transition-colors">{tab.label}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed mb-8">{tab.desc}</p>
                <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-[#c5a059]">
                  Abrir Ferramenta
                  <svg className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            )
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-12 flex items-center justify-between flex-wrap gap-4">
        <Link to="/calculadoras" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-[#0a0f1c] flex items-center transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Voltar para o Hub
        </Link>
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            tab.externalUrl ? (
              <a 
                key={tab.id} 
                href={tab.externalUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest transition-all border bg-white text-gray-400 border-gray-100 hover:text-[#c5a059]`}
              >
                {tab.label}
              </a>
            ) : (
              <Link 
                key={tab.id} 
                to={`/calculadoras/${tab.id}`} 
                className={`px-4 py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest transition-all border ${activeTab === tab.id ? 'bg-[#0a0f1c] text-white border-[#0a0f1c]' : 'bg-white text-gray-400 border-gray-100 hover:text-[#c5a059]'}`}
              >
                {tab.label}
              </Link>
            )
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <form onSubmit={calculate} className="space-y-12">
          {activeTab === 'aposentadoria' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
               <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm space-y-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-1.5 h-6 bg-[#c5a059] rounded-full"></div>
                    <h3 className="text-[11px] font-black text-[#0a0f1c] uppercase tracking-[0.3em]">Box 1: Objetivo</h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3">Renda Desejada (R$ / mês)</label>
                      <input type="number" step="any" value={inputs.desiredIncome ?? ''} onChange={e => setInputs({...inputs, desiredIncome: e.target.value === '' ? undefined : parseFloat(e.target.value)})} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#c5a059] outline-none text-sm font-medium" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3">Idade desejada para aposentar</label>
                      <input type="number" step="1" value={inputs.retirementAge ?? ''} onChange={e => setInputs({...inputs, retirementAge: parseInt(e.target.value) || 0})} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#c5a059] outline-none text-sm font-medium" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3">Retorno Real Esperado</label>
                      <div className="flex space-x-2">
                        <input type="number" step="any" value={inputs.expectedReturn ?? ''} onChange={e => setInputs({...inputs, expectedReturn: e.target.value === '' ? undefined : parseFloat(e.target.value)})} className="flex-grow px-6 py-4 rounded-2xl bg-gray-50 border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#c5a059] outline-none text-sm font-medium" />
                        <select value={inputs.returnPeriodType} onChange={e => setInputs({...inputs, returnPeriodType: e.target.value as 'MONTHLY' | 'ANNUALLY'})} className="bg-white px-4 py-4 rounded-2xl text-[9px] font-black uppercase text-[#c5a059] border border-gray-100 outline-none cursor-pointer">
                          <option value="ANNUALLY">A.A.</option>
                          <option value="MONTHLY">A.M.</option>
                        </select>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm space-y-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-1.5 h-6 bg-[#0a0f1c] rounded-full"></div>
                    <h3 className="text-[11px] font-black text-[#0a0f1c] uppercase tracking-[0.3em]">Box 2: Capacidade</h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3">Investimento Inicial (R$)</label>
                      <input type="number" step="any" value={inputs.initialInvestment ?? ''} onChange={e => setInputs({...inputs, initialInvestment: e.target.value === '' ? undefined : parseFloat(e.target.value)})} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#c5a059] outline-none text-sm font-medium" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3">Aporte Mensal (R$)</label>
                      <input type="number" step="any" value={inputs.monthlySavings ?? ''} onChange={e => setInputs({...inputs, monthlySavings: e.target.value === '' ? undefined : parseFloat(e.target.value)})} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#c5a059] outline-none text-sm font-medium" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3">Idade Atual</label>
                      <input type="number" step="1" value={inputs.currentAge ?? ''} onChange={e => setInputs({...inputs, currentAge: parseInt(e.target.value) || 0})} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#c5a059] outline-none text-sm font-medium" />
                    </div>
                  </div>
               </div>
            </div>
          ) : (
            <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-8">
               <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Inv. Inicial</label>
                  <input type="number" value={inputs.initialInvestment ?? ''} onChange={e => setInputs({...inputs, initialInvestment: parseFloat(e.target.value)})} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none text-sm font-medium focus:ring-1 focus:ring-[#c5a059]" />
               </div>
               <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Aporte Mensal</label>
                  <input type="number" value={inputs.monthlySavings ?? ''} onChange={e => setInputs({...inputs, monthlySavings: parseFloat(e.target.value)})} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none text-sm font-medium focus:ring-1 focus:ring-[#c5a059]" />
               </div>
               <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Retorno (% a.a.)</label>
                  <input type="number" value={inputs.expectedReturn ?? ''} onChange={e => setInputs({...inputs, expectedReturn: parseFloat(e.target.value)})} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none text-sm font-medium focus:ring-1 focus:ring-[#c5a059]" />
               </div>
               <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Prazo (Anos)</label>
                  <input type="number" value={inputs.simulationYears ?? ''} onChange={e => setInputs({...inputs, simulationYears: parseInt(e.target.value)})} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none text-sm font-medium focus:ring-1 focus:ring-[#c5a059]" />
               </div>
            </div>
          )}

          <div className="flex justify-center">
             <button type="submit" disabled={loading} className="w-full max-w-lg bg-[#0a0f1c] text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] hover:bg-[#c5a059] transition-all shadow-2xl disabled:opacity-50">
               {loading ? 'Processando Engenharia...' : 'Gerar Projeção Estratégica'}
             </button>
          </div>
        </form>

        {result && (
          <div className="mt-20 space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
             <ExecutionSummary result={result} inputs={inputs} type={activeTab as any} />
             <div className="bg-white p-12 rounded-[50px] border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a059]/5 rounded-full -mr-32 -mt-32 blur-[100px]"></div>
                <div className="flex items-center justify-between mb-10 border-b border-gray-50 pb-8">
                  <div>
                    <h3 className="text-[12px] font-extrabold text-[#0a0f1c] uppercase tracking-[0.4em] mb-2">Relatório de Consultoria Sênior</h3>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Análise Estratégica R Anjos & Gemini AI</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-[#c5a059] flex items-center justify-center"><span className="text-[#c5a059] font-bold text-lg">A</span></div>
                </div>
                <div className="text-gray-600 leading-[1.8] space-y-6 whitespace-pre-wrap font-light text-base text-justify">{result.aiAnalysis}</div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculadoras;
