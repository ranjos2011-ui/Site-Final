
import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-32 flex flex-col items-center justify-center min-h-[60vh] animate-in fade-in duration-1000">
      <div className="text-center">
        <h2 className="text-xs tracking-[0.5em] uppercase font-bold text-[#c5a059] mb-8">Conteúdo Exclusivo</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a0f1c] mb-6 tracking-tight">Artigos em breve.</h1>
        <p className="text-base text-gray-400 max-w-lg mx-auto font-light leading-relaxed mb-12">
          Estamos preparando análises técnicas e insights estratégicos sobre o mercado financeiro global e proteção patrimonial.
        </p>
        
        <div className="flex flex-col items-center space-y-8">
          <div className="w-12 h-px bg-gray-200"></div>
          
          <a 
            href="https://www.instagram.com/raphaelanjoss/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4 group-hover:text-[#c5a059] transition-colors">
              Acompanhe em tempo real
            </span>
            <div className="flex items-center space-x-3 px-8 py-4 rounded-2xl bg-[#0a0f1c] text-white hover:bg-[#c5a059] transition-all duration-500 shadow-xl shadow-black/5">
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-[11px] font-bold uppercase tracking-widest">@raphaelanjoss</span>
            </div>
          </a>
        </div>
      </div>
      
      {/* Elemento Decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 -z-10 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[#c5a059] rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
};

export default Blog;
