
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Calculadoras from './pages/Calculadoras';
import Servicos from './pages/Servicos';
import Cursos from './pages/Cursos';
import Blog from './pages/Blog';

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full border-2 border-[#c5a059] flex items-center justify-center">
            <span className="text-[#c5a059] font-bold text-xs">+</span>
          </div>
          <span className="tracking-widest uppercase font-semibold text-xs text-[#0a0f1c]">R Anjos Consultoria</span>
        </Link>

        <nav className="flex space-x-8 lg:space-x-12">
          <Link 
            to="/calculadoras" 
            className={`text-[10px] lg:text-sm font-bold tracking-widest transition-colors ${isActive('/calculadoras') ? 'text-[#c5a059]' : 'text-gray-500 hover:text-[#0a0f1c]'}`}
          >
            CALCULADORAS
          </Link>
          <Link 
            to="/servicos" 
            className={`text-[10px] lg:text-sm font-bold tracking-widest transition-colors ${isActive('/servicos') ? 'text-[#c5a059]' : 'text-gray-500 hover:text-[#0a0f1c]'}`}
          >
            SERVIÇOS
          </Link>
          <Link 
            to="/cursos" 
            className={`text-[10px] lg:text-sm font-bold tracking-widest transition-colors ${isActive('/cursos') ? 'text-[#c5a059]' : 'text-gray-500 hover:text-[#0a0f1c]'}`}
          >
            CURSOS
          </Link>
          <Link 
            to="/blog" 
            className={`text-[10px] lg:text-sm font-bold tracking-widest transition-colors ${isActive('/blog') ? 'text-[#c5a059]' : 'text-gray-500 hover:text-[#0a0f1c]'}`}
          >
            BLOG
          </Link>
        </nav>
        
        <div className="hidden md:block">
          <button className="text-[10px] tracking-widest uppercase font-bold text-[#c5a059] border border-[#c5a059] px-6 py-2 rounded-full hover:bg-[#c5a059] hover:text-white transition-all">
            Contato
          </button>
        </div>
      </div>
    </header>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculadoras" element={<Calculadoras />} />
            <Route path="/calculadoras/:type" element={<Calculadoras />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        
        <footer className="bg-gray-50 border-t border-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex justify-center mb-6">
               <div className="w-10 h-10 rounded-full border-2 border-[#c5a059] flex items-center justify-center">
                <span className="text-[#c5a059] font-bold text-sm">+</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-2">© 2024 R Anjos Consultoria. Todos os direitos reservados.</p>
            <p className="text-xs text-gray-300">Excelência em Planejamento Financeiro Internacional.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
