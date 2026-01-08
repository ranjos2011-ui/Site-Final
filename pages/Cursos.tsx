
import React from 'react';

const Cursos: React.FC = () => {
  const checkoutLink = "https://pay.kiwify.com.br/gOVXYCm";
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5534991299890";
  
  const courses = [
    {
      name: "Aposentadoria Global",
      description: "Aprenda a investir de forma global, com planejamento sucessório, abrir contas no exterior, com menor câmbio do mercado, entendendo quando precisa abrir offshore.",
      level: "Estratégico",
      price: "R$ 1.497,00",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
      tag: "Lançamento"
    },
    {
      name: "Curso de Saída Fiscal",
      description: "Aprenda a analisar e fazer a sua saída fiscal de forma estratégica e legal.",
      level: "Tributário",
      price: "R$ 967,00",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
      tag: "Especializado"
    },
    {
      name: "Como mandar seu dinheiro para fora?",
      description: "Passo a passo para sua estratégia global: aposentadoria em moeda forte, alta proteção e eficiência.",
      level: "Estratégico",
      price: "R$ 995,00",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
      tag: "Mais Procurado"
    },
    {
      name: "Como abrir minha Offshore",
      description: "A forma mais simples e barata de abrir uma offshore com segurança jurídica pelo menor preço.",
      level: "Estruturação",
      price: "R$ 1.267,00",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      tag: "Exclusivo"
    },
    {
      name: "Como abrir uma conta internacional",
      description: "O guia definitivo para abrir sua conta em uma das maiores e mais seguras corretoras do mundo.",
      level: "Prático",
      price: "R$ 497,00",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800",
      tag: "Iniciante"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-xs tracking-[0.3em] uppercase font-bold text-[#c5a059] mb-4">Masterclasses & Treinamentos</h2>
        <h1 className="text-4xl font-extrabold text-[#0a0f1c] mb-6 tracking-tight">Educação para a Liberdade Global.</h1>
        <p className="text-base text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
          Conhecimento técnico para proteger seu patrimônio e internacionalizar sua vida financeira com segurança.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {courses.map((c, i) => (
          <div key={i} className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm flex flex-col hover:shadow-xl transition-all duration-500">
            <div className="relative h-52 overflow-hidden">
              <img src={c.image} alt={c.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute top-4 left-4">
                <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest text-[#0a0f1c]">
                  {c.tag}
                </span>
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <span className="text-[9px] font-bold text-[#c5a059] uppercase tracking-widest mb-2 block">{c.level}</span>
              <h3 className="text-xl font-bold text-[#0a0f1c] mb-4 leading-snug h-14 overflow-hidden">{c.name}</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                {c.description}
              </p>
              
              <div className="pt-6 border-t border-gray-50 flex flex-col space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">Investimento</span>
                  <span className="text-xl font-extrabold text-[#0a0f1c]">{c.price}</span>
                </div>
                <a 
                  href={checkoutLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-[#0a0f1c] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#c5a059] transition-all shadow-md shadow-gray-100 text-center"
                >
                  Matricular-se
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 border border-gray-100 rounded-[32px] p-10 bg-gray-50/50 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 max-w-lg">
          <h3 className="text-xl font-bold text-[#0a0f1c] mb-2">Mentoria Individualizada</h3>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Acompanhamento personalizado para estruturação de holdings e planejamento sucessório internacional.
          </p>
        </div>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap px-8 py-4 bg-[#c5a059] text-white font-bold rounded-xl hover:bg-[#0a0f1c] transition-all uppercase tracking-widest text-[10px] shadow-lg shadow-[#c5a059]/20"
        >
          Agendar Mentoria
        </a>
      </div>
    </div>
  );
};

export default Cursos;
