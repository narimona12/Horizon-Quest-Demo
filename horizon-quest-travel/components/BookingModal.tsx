
import React, { useState } from 'react';
import { Tour } from '../types';

interface BookingModalProps {
  tour: Tour | null;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ tour, onClose }) => {
  if (!tour) return null;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: 1
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-2/5 relative h-48 md:h-auto">
            <img src={tour.imageUrl} alt={tour.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">{tour.location}</p>
              <h3 className="text-white text-xl font-bold leading-tight">{tour.title}</h3>
            </div>
          </div>
          
          <div className="md:w-3/5 p-8">
            <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {step === 1 ? (
              <>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Book Your Adventure</h2>
                <p className="text-slate-500 mb-6 text-sm">Secure your spot for the {tour.title} starting from ${tour.price}/person.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                      placeholder="John Doe"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Preferred Date</label>
                      <input 
                        required
                        type="date" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Guests</label>
                      <input 
                        required
                        type="number" 
                        min="1" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                      placeholder="john@example.com"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold shadow-lg shadow-indigo-200 transition-all transform hover:-translate-y-1">
                    Proceed to Payment
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12 flex flex-col items-center">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Success!</h2>
                <p className="text-slate-500 mb-6">Thank you {formData.name}, we've received your booking request for {tour.title}. A travel concierge will contact you shortly.</p>
                <button 
                  onClick={onClose}
                  className="bg-slate-900 text-white px-8 py-2 rounded-xl font-bold hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
