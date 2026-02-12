
import { Tour, TourCategory } from './types';

export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Serengeti Safari Expedition',
    location: 'Tanzania',
    price: 3499,
    duration: '10 Days',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    category: TourCategory.ADVENTURE,
    description: 'Witness the Great Migration firsthand. A breathtaking journey through the heart of the Serengeti with expert guides.',
    highlights: ['Luxury Tented Camps', 'Big Five Game Drives', 'Hot Air Balloon Safari']
  },
  {
    id: '2',
    title: 'Zen & Gardens Tour',
    location: 'Kyoto, Japan',
    price: 2800,
    duration: '7 Days',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    category: TourCategory.CULTURAL,
    description: 'Immerse yourself in the tranquility of ancient temples and the exquisite beauty of traditional Japanese gardens.',
    highlights: ['Tea Ceremony Experience', 'Private Temple Access', 'Arashiyama Bamboo Grove']
  },
  {
    id: '3',
    title: 'Amalfi Coast Culinary Dream',
    location: 'Italy',
    price: 3200,
    duration: '8 Days',
    rating: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    category: TourCategory.CULINARY,
    description: 'Savor the flavors of Southern Italy. From lemon groves in Sorrento to private cooking classes in Positano.',
    highlights: ['Michelin-star Dining', 'Wine Tasting in Ravello', 'Private Boat Tour']
  },
  {
    id: '4',
    title: 'Icelandic Northern Lights',
    location: 'Iceland',
    price: 2600,
    duration: '6 Days',
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=800&q=80',
    category: TourCategory.NATURE,
    description: 'Chase the Aurora Borealis through volcanic landscapes, glaciers, and geothermal lagoons.',
    highlights: ['Blue Lagoon Access', 'Ice Cave Exploration', 'Golden Circle Tour']
  },
  {
    id: '5',
    title: 'Patagonian Trekking Odyssey',
    location: 'Chile & Argentina',
    price: 4100,
    duration: '14 Days',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80',
    category: TourCategory.ADVENTURE,
    description: 'Challenge yourself with the W-trek in Torres del Paine and marvel at the Perito Moreno Glacier.',
    highlights: ['Granite Peaks', 'Glacier Hiking', 'Remote Eco-lodges']
  },
  {
    id: '6',
    title: 'Santorini Sunset Retreat',
    location: 'Greece',
    price: 2100,
    duration: '5 Days',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    category: TourCategory.RELAXATION,
    description: 'Relax in iconic white-washed villas overlooking the caldera. The perfect blend of luxury and scenery.',
    highlights: ['Private Infinity Pool', 'Wine Tour', 'Oia Sunset Cruise']
  }
];
