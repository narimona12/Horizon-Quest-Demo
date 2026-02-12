
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTours = () => {
    document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">H</div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>HORIZON QUEST</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#tours" className={`font-medium hover:text-indigo-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-100'}`}>Tours</a>
          <a href="#about" className={`font-medium hover:text-indigo-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-100'}`}>About Us</a>
          <a href="#contact" className={`font-medium hover:text-indigo-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-100'}`}>Contact</a>
          <button 
            onClick={scrollToTours}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 active:scale-95"
          >
            Book Now
          </button>
        </div>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
