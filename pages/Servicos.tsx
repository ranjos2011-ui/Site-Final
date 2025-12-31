
import React from 'react';

const Servicos: React.FC = () => {
  const services = [
    {
      title: "Planejamento Internacional",
      description: "Estruturação de patrimônio em jurisdições estáveis, focando na proteção e sucessão familiar global.",
      icon: "🌍"
    },
    {
      title: "Investimentos em Moedas Fortes",
      description: "Consultoria especializada para dolarização de carteira e exposição ao mercado norte-americano e europeu.",
      icon: "💵"
    },
    {
      title: "Aposentadoria de Elite",
      description: "Planos sob medida para garantir um padrão de vida superior, independente das variações do mercado interno.",
      icon: "🏆"
    },
    {
      title: "Análise de Risco Geopolítico",
      description: "Monitoramento constante de cenários globais para antecipar movimentos e proteger seu capital.",
      icon: "📊"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="max-w-3xl mb-20">
        <h2 className="text-xs tracking-[0.3em] uppercase font-bold text-[#c5a059] mb-4">Nossa Expertise</h2>
        <h1 className="text-5xl font-extrabold text-[#0a0f1c] mb-8 leading-tight">Soluções que transcendem fronteiras geográficas.</h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed">
          Na R Anjos Consultoria, não apenas gerimos ativos; desenhamos o legado e a segurança de nossos clientes através de uma visão macroeconômica global.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div key={i} className="group bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl mb-8 grayscale group-hover:grayscale-0 transition-all">{s.icon}</div>
            <h3 className="text-xl font-bold text-[#0a0f1c] mb-4">{s.title}</h3>
            <p className="text-gray-500 font-light leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 bg-[#0a0f1c] rounded-[50px] p-16 text-center text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#c5a059] rounded-full blur-[100px]"></div>
        </div>
        <h2 className="text-3xl font-bold mb-8">Pronto para elevar seu patamar financeiro?</h2>
        <button className="bg-[#c5a059] text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-[#c5a059] transition-all shadow-2xl">
          Agendar Consulta Técnica
        </button>
      </div>
    </div>
  );
};

export default Servicos;
