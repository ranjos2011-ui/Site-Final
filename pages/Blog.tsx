
import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "Por que diversificar seu patrimônio em moedas fortes?",
      excerpt: "Entenda os riscos de manter todo o seu capital exposto a uma única economia e como a dolarização protege seu futuro.",
      category: "Estratégia",
      date: "15 Mai, 2024",
      image: "https://images.unsplash.com/photo-1611974714024-4607ad03d639?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "As vantagens tributárias de uma estrutura Offshore",
      excerpt: "Mais do que proteção, as offshores oferecem um ambiente de diferimento fiscal e eficiência sucessória inigualável.",
      category: "Tributário",
      date: "10 Mai, 2024",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Planejamento Sucessório Internacional: O Guia",
      excerpt: "Como garantir que seu legado seja transmitido para a próxima geração sem os altos custos de inventário no Brasil.",
      category: "Sucessão",
      date: "05 Mai, 2024",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Como escolher a jurisdição ideal para seus investimentos",
      excerpt: "De Ilhas Cayman a Delaware: uma análise técnica das melhores localidades para abrir sua conta ou empresa.",
      category: "Internacional",
      date: "01 Mai, 2024",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-xs tracking-[0.3em] uppercase font-bold text-[#c5a059] mb-4">Insights & Análises</h2>
        <h1 className="text-4xl font-extrabold text-[#0a0f1c] mb-6 tracking-tight">Blog R Anjos</h1>
        <p className="text-base text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
          Artigos exclusivos sobre o mercado financeiro global, tributação internacional e proteção de ativos.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {posts.map((post, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative h-80 overflow-hidden rounded-[40px] mb-6 border border-gray-100 shadow-sm">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute bottom-6 left-6">
                <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#0a0f1c]">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="px-4">
              <span className="text-[10px] text-[#c5a059] font-bold uppercase tracking-widest block mb-3">{post.date}</span>
              <h3 className="text-2xl font-bold text-[#0a0f1c] mb-4 group-hover:text-[#c5a059] transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-500 font-light leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0a0f1c] flex items-center group-hover:translate-x-2 transition-transform">
                Continuar lendo 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 bg-gray-50 rounded-[40px] p-16 text-center">
        <h3 className="text-2xl font-bold text-[#0a0f1c] mb-4">Assine nossa Newsletter</h3>
        <p className="text-gray-500 font-light mb-8 max-w-md mx-auto">
          Receba mensalmente nossos insights exclusivos sobre o mercado internacional diretamente no seu e-mail.
        </p>
        <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
          <input 
            type="email" 
            placeholder="Seu melhor e-mail" 
            className="flex-grow px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:ring-2 focus:ring-[#c5a059] outline-none transition-all"
          />
          <button className="px-8 py-4 bg-[#0a0f1c] text-white rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-[#c5a059] transition-all">
            Inscrever-se
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
