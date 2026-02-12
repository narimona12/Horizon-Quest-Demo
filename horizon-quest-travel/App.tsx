
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import TourCard from './components/TourCard';
import BookingModal from './components/BookingModal';
import { TOURS } from './constants';
import { Tour, TourCategory } from './types';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TourCategory | 'All'>('All');
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  const filteredTours = useMemo(() => {
    if (selectedCategory === 'All') return TOURS;
    return TOURS.filter(tour => tour.category === selectedCategory);
  }, [selectedCategory]);

  const scrollToTours = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-slate-50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 animate-in slide-in-from-bottom duration-1000">
            Journey Beyond <br />The Ordinary
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-in slide-in-from-bottom duration-1000 delay-200">
            Experience curated luxury adventures designed for the discerning traveler. From the peaks of Patagonia to the temples of Kyoto.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom duration-1000 delay-300">
            <a 
              href="#tours" 
              onClick={scrollToTours}
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-indigo-600/20 transition-all transform hover:-translate-y-1"
            >
              Explore Destinations
            </a>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg transition-all">
              Watch Our Film
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToTours}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7"></path></svg>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Destinations', value: '50+' },
              { label: 'Happy Travelers', value: '12k+' },
              { label: 'Years Experience', value: '15+' },
              { label: 'Tour Guides', value: '120+' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</p>
                <p className="text-slate-500 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section id="tours" className="py-24 bg-slate-50 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Curated Experiences</h2>
              <p className="text-slate-500">Discover our most sought-after adventures, hand-picked for unique cultural immersion and ultimate luxury.</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {['All', ...Object.values(TourCategory)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat as any)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedCategory === cat 
                      ? 'bg-indigo-600 text-white shadow-lg' 
                      : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <TourCard 
                key={tour.id} 
                tour={tour} 
                onSelect={(t) => setSelectedTour(t)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Redefining Exploration</h2>
            <p className="text-slate-400 text-lg">We don't just book tours. We craft lifetime memories through meticulously planned itineraries and exclusive local access.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Expert Curation',
                desc: 'Every itinerary is vetted by local experts to ensure authentic and seamless experiences.',
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              },
              {
                title: 'Premium Comfort',
                desc: 'We partner with the world’s most renowned boutique hotels and eco-lodges.',
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              },
              {
                title: '24/7 Concierge',
                desc: 'From landing to takeoff, our dedicated support team is available whenever you need us.',
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-indigo-600/20 text-indigo-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80" alt="Travelers" className="w-full h-[600px] object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-indigo-600 rounded-3xl -z-10 animate-pulse"></div>
            </div>
            
            <div>
              <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">What Our Explorers Say</h2>
              
              <div className="space-y-12">
                {[
                  {
                    quote: "The Japanese Zen tour was life-changing. Every detail from the ryokans to the private guides was perfect.",
                    author: "Sarah Jenkins",
                    role: "Architect",
                    img: "https://i.pravatar.cc/150?u=sarah"
                  },
                  {
                    quote: "Horizon Quest took the stress out of our safari. It was pure magic seeing the lions at sunrise.",
                    author: "Mark & Emily",
                    role: "Honeymooners",
                    img: "https://i.pravatar.cc/150?u=mark"
                  }
                ].map((t, i) => (
                  <div key={i} className="flex gap-6">
                    <img src={t.img} alt={t.author} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <p className="text-slate-600 text-lg italic mb-4">"{t.quote}"</p>
                      <h4 className="font-bold text-slate-900">{t.author}</h4>
                      <p className="text-slate-400 text-sm">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section id="contact" className="py-24 bg-indigo-600 text-white relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Start Your Journey?</h2>
            <p className="text-indigo-100 text-xl mb-12 opacity-90">Join our newsletter to receive exclusive offers and early access to limited edition tours.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-4 rounded-full bg-white text-slate-900 focus:ring-4 focus:ring-indigo-400 outline-none shadow-xl"
              />
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold shadow-xl transition-all transform hover:scale-105 active:scale-95">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">H</div>
                <span className="text-xl font-bold tracking-tight text-slate-900">HORIZON QUEST</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Premium boutique travel experiences for the modern explorer. Crafted with passion, delivered with excellence.
              </p>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'instagram'].map(s => (
                  <a key={s} href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                    <span className="sr-only">{s}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"></path></svg>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Destinations</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Africa & Safaris</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Asia Cultural Tours</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">European Getaways</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">South American Treks</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Support</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Safety & Insurance</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Booking Policy</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Contact Us</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="flex gap-2">
                  <svg className="w-5 h-5 text-indigo-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  hello@horizonquest.com
                </li>
                <li className="flex gap-2">
                  <svg className="w-5 h-5 text-indigo-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  +1 (555) 123-4567
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
            <p>© {new Date().getFullYear()} Horizon Quest Travel Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Overlays */}
      <BookingModal tour={selectedTour} onClose={() => setSelectedTour(null)} />
    </div>
  );
};

export default App;
