
import React from 'react';
import { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
  onSelect: (tour: Tour) => void;
}

const TourCard: React.FC<TourCardProps> = ({ tour, onSelect }) => {
  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full border border-slate-100"
      onClick={() => onSelect(tour)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={tour.imageUrl} 
          alt={tour.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-600 uppercase tracking-widest shadow-sm">
          {tour.category}
        </div>
        <div className="absolute bottom-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-lg font-bold">
          ${tour.price}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1 text-amber-500 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < Math.floor(tour.rating) ? 'fill-current' : 'text-slate-300'}`} viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-slate-400 text-sm ml-1">({tour.rating})</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{tour.title}</h3>
        <p className="text-slate-500 text-sm mb-4 flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          {tour.location}
        </p>
        
        <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
          <span className="text-slate-500 font-medium text-sm">{tour.duration}</span>
          <span className="text-indigo-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            View Details 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
