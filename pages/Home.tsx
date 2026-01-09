
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const mainServices = [
    {
      number: "01",
      title: "Mande Seu Dinheiro para fora",
      description: "Envie capital para o exterior com as melhores taxas do mercado e total segurança jurídica através de nossa mesa de câmbio exclusiva.",
      path: "https://ranjosremessa.netlify.app",
      external: true,
      tag: "Câmbio & Remessa"
    },
    {
      number: "02",
      title: "abra sua offshore internacional",
      description: "Proteja seu patrimônio com estruturas eficientes em jurisdições premium (BVI/Cayman), garantindo sigilo e eficiência sucessória.",
      path: "https://ranjosoffshore.netlify.app/",
      external: true,
      tag: "Estruturação"
    },
    {
      number: "03",
      title: "Aposentadoria em moeda forte",
      description: "Construa um futuro sólido com investimentos globais, fugindo da inflação local e garantindo renda passiva em dólares ou euros.",
      path: "/servicos",
      external: false,
      tag: "Planejamento"
    }
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Decorativo - Orb de Luz Sutil */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] -z-10 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c5a059]/20 via-white to-transparent rounded-full blur-[120px]"></div>
      </div>

      {/* Seção Hero */}
      <section className="pt-20 md:pt-32 pb-20 px-6 flex flex-col items-center text-center">
        <div className="mb-12">
          <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full border border-[#c5a059]/10 bg-white/40 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse"></span>
            <span className="text-[10px] tracking-[0.4em] uppercase font-black text-[#c5a059]">Wealth Management</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-[#0a0f1c] mb-8 leading-[1.1] tracking-tighter max-w-5xl">
          Proteção de capital <br className="hidden md:block" /> 
          e <span className="text-[#c5a059]">liberdade global.</span>
        </h1>

        <p className="max-w-3xl text-lg md:text-2xl text-gray-400 font-light leading-relaxed mb-20 px-4">
          Consultoria de elite para investidores que não aceitam as fronteiras do mercado local. Estratégias internacionais para quem busca o topo.
        </p>

        {/* Grid de Quadros de Destaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-4">
          {mainServices.map((service, index) => {
            const cardClasses = "group relative bg-white rounded-[40px] border border-gray-100 p-10 md:p-14 text-left flex flex-col h-full min-h-[380px] md:min-h-[460px] justify-between transition-all duration-700 hover:border-[#c5a059]/30 hover:shadow-[0_40px_80px_-20px_rgba(197,160,89,0.15)] hover:-translate-y-3 overflow-hidden";
            
            const content = (
              <>
                {/* Detalhe Visual Interno - Número de Fundo */}
                <div className="absolute -top-6 -right-6 text-9xl font-black text-gray-50/50 group-hover:text-[#c5a059]/5 transition-colors duration-700 pointer-events-none select-none">
                  {service.number}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c5a059] bg-[#c5a059]/5 px-4 py-1.5 rounded-full">
                      {service.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0a0f1c] mb-6 leading-tight group-hover:text-[#c5a059] transition-colors duration-500 uppercase tracking-tighter">
                    {service.title}
                  </h3>
                  
                  <div className="w-12 h-1 bg-gray-100 mb-8 group-hover:w-24 group-hover:bg-[#c5a059] transition-all duration-700"></div>
                  
                  <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="relative z-10 flex items-center justify-between mt-12">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0a0f1c]/40 group-hover:text-[#c5a059] transition-colors duration-500">
                    Acessar Solução
                  </span>
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#c5a059] group-hover:border-[#c5a059] group-hover:text-white transition-all duration-500">
                    <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </>
            );

            return service.external ? (
              <a 
                key={index}
                href={service.path}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {content}
              </a>
            ) : (
              <Link 
                key={index}
                to={service.path}
                className={cardClasses}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Trusted By / Call to Action sutil */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="py-12 border-y border-gray-50 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">Jurisdições Atendidas:</span>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-[11px] font-black text-gray-400 uppercase tracking-widest">
            <span>Cayman Islands</span>
            <span>BVI</span>
            <span>Bahamas</span>
            <span>USA</span>
            <span>Luxembourg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
