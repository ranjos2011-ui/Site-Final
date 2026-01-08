
import React from 'react';

const Calculadoras: React.FC = () => {
  const tools = [
    {
      id: 'aposentadoria',
      label: 'Aposentadoria Global',
      desc: 'Simule o capital necessário para viver de renda em moeda forte e proteger seu futuro.',
      url: 'https://calcaposentadoria.netlify.app',
      icon: '📈'
    },
    {
      id: 'usufruto',
      label: 'Usufruto e Sucessão',
      desc: 'Planeje a transmissão de bens com reserva de usufruto e máxima eficiência tributária.',
      url: 'https://simulausufrutoranjos.netlify.app',
      icon: '⚖️'
    },
    {
      id: 'comparador',
      label: 'Comparador de Custos',
      desc: 'Analise o impacto de taxas e impostos em diferentes estruturas de investimento.',
      url: 'https://comparacusto.netlify.app',
      icon: '📊'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 animate-in fade-in duration-1000">
      {/* Cabeçalho do Hub */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full border border-gray-100 bg-white/60 backdrop-blur-sm shadow-sm mb-6">
          <div className="w-4 h-4 rounded-full border border-[#c5a059] flex items-center justify-center">
            <span className="text-[#c5a059] font-bold text-[7px]">+</span>
          </div>
          <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-gray-500">Engenharia Financeira</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a0f1c] mb-6 tracking-tight">
          Calculadoras <span className="text-[#c5a059]">Estratégicas.</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed text-lg">
          Ferramentas exclusivas para modelar cenários de proteção patrimonial e internacionalização de capital.
        </p>
      </div>

      {/* Grid de Ferramentas */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {tools.map((tool) => (
          <a 
            key={tool.id}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#c5a059]/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
          >
            {/* Detalhe visual de fundo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-16 -mt-16 group-hover:bg-[#c5a059]/5 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-10 group-hover:bg-[#0a0f1c] group-hover:border-[#0a0f1c] transition-all duration-500 shadow-sm">
                <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{tool.icon}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0a0f1c] mb-4 group-hover:text-[#c5a059] transition-colors leading-tight">
                {tool.label}
              </h3>
              
              <p className="text-sm text-gray-400 font-light leading-relaxed mb-10 min-h-[60px]">
                {tool.desc}
              </p>
              
              <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#c5a059]">
                Acessar Simulador
                <svg className="w-4 h-4 ml-3 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Seção Informativa Inferior */}
      <div className="mt-32 max-w-4xl mx-auto text-center p-16 rounded-[50px] bg-gray-50/50 border border-gray-100">
        <h4 className="text-[11px] font-black text-[#c5a059] uppercase tracking-[0.4em] mb-6">Suporte Especializado</h4>
        <p className="text-gray-500 font-light leading-relaxed mb-10">
          As simulações fornecem uma base técnica inicial. Para um planejamento detalhado, estruturação de offshores ou análise de saída fiscal, recomendamos uma consulta com nossos especialistas.
        </p>
        <button className="bg-[#0a0f1c] text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#c5a059] transition-all shadow-xl">
          Falar com um Consultor Sênior
        </button>
      </div>
    </div>
  );
};

export default Calculadoras;
