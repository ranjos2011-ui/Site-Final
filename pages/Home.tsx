
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const mainServices = [
    {
      title: "Mande Seu Dinheiro para fora",
      description: "Envie capital para o exterior com as melhores taxas do mercado e total segurança jurídica.",
      image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800",
      path: "https://ranjosremessa.netlify.app",
      external: true
    },
    {
      title: "abra sua offshore nas Ilhas Virgens Britânicas",
      description: "Proteja seu patrimônio com estruturas internacionais eficientes em jurisdições de primeira linha.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      path: "https://ranjosoffshore.netlify.app/",
      external: true
    },
    {
      title: "Aposentadoria em moeda forte",
      description: "Construa um futuro sólido com investimentos globais e renda passiva em moeda forte.",
      image: "https://images.unsplash.com/photo-1531053326607-9d349096d887?auto=format&fit=crop&q=80&w=800",
      path: "/servicos",
      external: false
    }
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Elemento visual de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] -z-10 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c5a059] to-transparent rounded-full blur-[160px]"></div>
      </div>

      {/* Seção Hero */}
      <section className="pt-24 pb-20 px-6 flex flex-col items-center text-center">
        <div className="mb-10">
          <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full border border-gray-100 bg-white/60 backdrop-blur-sm shadow-sm">
            <div className="w-4 h-4 rounded-full border border-[#c5a059] flex items-center justify-center">
              <span className="text-[#c5a059] font-bold text-[7px]">+</span>
            </div>
            <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-gray-500">Exclusividade Financeira</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#0a0f1c] mb-8 leading-[1.1] tracking-tight max-w-4xl">
          Como proteger o seu dinheiro e <span className="text-[#c5a059]">pagar menos imposto.</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-16">
          Consultoria especializada em estratégias de proteção patrimonial e eficiência fiscal para investidores que buscam segurança global.
        </p>

        {/* Grid de Quadros Clicáveis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl px-4">
          {mainServices.map((service, index) => {
            const content = (
              <>
                {/* Conteúdo em evidência acima da imagem */}
                <div className="p-10 text-left flex-grow">
                  <h3 className="text-2xl font-extrabold text-[#0a0f1c] mb-4 leading-tight group-hover:text-[#c5a059] transition-colors uppercase tracking-tighter">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-[#c5a059]">
                    Explorar Estratégia 
                    <svg className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Imagem abaixo do texto */}
                <div className="relative h-64 overflow-hidden mx-6 mb-6 rounded-[32px]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </>
            );

            return service.external ? (
              <a 
                key={index}
                href={service.path}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#c5a059]/10 hover:-translate-y-2"
              >
                {content}
              </a>
            ) : (
              <Link 
                key={index}
                to={service.path}
                className="group flex flex-col bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#c5a059]/10 hover:-translate-y-2"
              >
                {content}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Elemento decorativo inferior */}
      <div className="flex justify-center pb-20">
        <div className="w-px h-24 bg-gradient-to-b from-gray-200 to-transparent"></div>
      </div>
    </div>
  );
};

export default Home;
