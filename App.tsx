
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Calculadoras from './pages/Calculadoras';
import Servicos from './pages/Servicos';
import Cursos from './pages/Cursos';
import Blog from './pages/Blog';

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5534991299890";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full border-2 border-[#c5a059] flex items-center justify-center">
            <span className="text-[#c5a059] font-bold text-xs">+</span>
          </div>
          <span className="tracking-widest uppercase font-semibold text-xs text-[#0a0f1c]">R Anjos Consultoria</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 lg:space-x-12">
          <Link 
            to="/calculadoras" 
            className={`text-[10px] font-bold tracking-widest transition-colors ${isActive('/calculadoras') ? 'text-[#c5a059]' : 'text-gray-500 hover:text-[#0a0f1c]'}`}
          >
            CALCULADORAS
          </Link>
          <Link 
            to="/servicos" 
            className={`text-[10px] font-bold tracking-widest transition-colors ${isActive('/servicos') ? 'text-[#c5a059]' : 'text-gray-500 hover:text-[#0a0f1c]'}`}
          >
            SERVIÇOS
          </Link>
          <Link 
            to="/cursos" 
            className={`text-[10px] font-bold tracking-widest transition-colors ${isActive('/cursos') ? 'text-[#c5a059]' : 'text-gray-500 hover:text-[#0a0f1c]'}`}
          >
            CURSOS
          </Link>
          <Link 
            to="/blog" 
            className={`text-[10px] font-bold tracking-widest transition-colors ${isActive('/blog') ? 'text-[#c5a059]' : 'text-gray-500 hover:text-[#0a0f1c]'}`}
          >
            BLOG
          </Link>
        </nav>
        
        <div className="flex items-center space-x-3 md:space-x-4">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-[9px] md:text-[10px] tracking-widest uppercase font-bold text-white bg-[#0a0f1c] px-4 md:px-6 py-2 rounded-full hover:bg-[#c5a059] transition-all shadow-sm"
          >
            Contato
          </a>
          <a 
            href="https://ranjosarearestrita.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-[9px] md:text-[10px] tracking-widest uppercase font-bold text-[#c5a059] border border-[#c5a059] px-4 md:px-6 py-2 rounded-full hover:bg-[#c5a059] hover:text-white transition-all shadow-sm"
          >
            Membros
          </a>
        </div>
      </div>
    </header>
  );
};

const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path));

  const navItems = [
    { path: '/', label: 'Home', icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
    { path: '/calculadoras', label: 'Calculadoras', icon: <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /> },
    { path: '/servicos', label: 'Serviços', icon: <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
    { path: '/cursos', label: 'Cursos', icon: <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
    { path: '/blog', label: 'Blog', icon: <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2zM14 4v4h4" /> },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-gray-100 px-4 h-20 flex items-center justify-around shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
      {navItems.map((item) => (
        <Link 
          key={item.path} 
          to={item.path} 
          className="flex flex-col items-center justify-center space-y-1 w-full"
        >
          <div className={`p-2 rounded-xl transition-all ${isActive(item.path) ? 'text-[#c5a059] bg-[#c5a059]/5' : 'text-gray-400'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {item.icon}
            </svg>
          </div>
          <span className={`text-[8px] font-black uppercase tracking-widest ${isActive(item.path) ? 'text-[#c5a059]' : 'text-gray-400'}`}>
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
};

const FloatingContact: React.FC = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5534991299890";
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-8 right-6 md:right-8 z-[60] bg-white border border-gray-100 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <div className="absolute inset-0 bg-[#c5a059]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
      <svg className="w-6 h-6 text-[#c5a059] relative z-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.403 0 6.556-5.332 11.89-11.891 11.89-2.015 0-3.991-.511-5.741-1.477l-6.255 1.7zm6.152-4.148l.344.204c1.554.921 3.35 1.408 5.195 1.408 5.42 0 9.831-4.411 9.831-9.831 0-2.626-1.022-5.094-2.879-6.951-1.856-1.856-4.325-2.877-6.952-2.877-5.42 0-9.831 4.411-9.831 9.831 0 1.916.549 3.784 1.588 5.41l.225.353-.943 3.447 3.522-.924zm11.362-7.443c-.328-.164-1.94-.957-2.241-1.066-.301-.108-.521-.164-.741.164-.221.328-.853 1.066-1.045 1.284-.191.218-.383.245-.711.082-.328-.164-1.386-.511-2.641-1.63-.976-.87-1.636-1.946-1.827-2.274-.191-.328-.02-.505.144-.668.148-.147.328-.382.492-.574.164-.191.218-.328.328-.547.11-.218.055-.41-.028-.574-.082-.164-.741-1.785-1.012-2.441-.264-.638-.532-.551-.73-.561-.188-.01-.403-.011-.617-.011-.214 0-.563.08-.857.4-.294.32-1.123 1.099-1.123 2.682 0 1.583 1.152 3.111 1.311 3.328.16.218 2.268 3.464 5.493 4.854.767.33 1.366.527 1.833.676.77.244 1.471.21 2.025.127.618-.093 1.94-.792 2.214-1.558.274-.766.274-1.422.191-1.558-.082-.136-.301-.218-.629-.382z"/>
      </svg>
    </a>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white pb-20 md:pb-0">
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
        
        <MobileBottomNav />
        <FloatingContact />

        <footer className="bg-gray-50 border-t border-gray-100 py-12 pb-32 md:pb-12">
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
