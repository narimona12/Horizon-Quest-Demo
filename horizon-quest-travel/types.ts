
export interface Tour {
  id: string;
  title: string;
  location: string;
  price: number;
  duration: string;
  rating: number;
  imageUrl: string;
  category: TourCategory;
  description: string;
  highlights: string[];
}

export enum TourCategory {
  ADVENTURE = 'Adventure',
  CULTURAL = 'Cultural',
  RELAXATION = 'Relaxation',
  CULINARY = 'Culinary',
  NATURE = 'Nature'
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
