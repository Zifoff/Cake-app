import { ReactNode } from 'react';

// БАЗОВЫЕ ТИПЫ ДЛЯ ПРИЛОЖЕНИЯ
export interface Baker {
  id: string;
  name: string;
  rating: number;
  specialty: string[];
  experience: number;
}

export interface Dessert {
  id: string;
  name: string;
  description: string;
  price: number;
  baker: Baker;
  images: string[];
  category: 'cake' | 'pie' | 'cookies' | 'other';
  ingredients: string[];
  isAvailable: boolean;
}

// Пропсы для кнопки
export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  loading?: boolean;
  children?: ReactNode;
}

// Пропсы для карточки десерта
export interface DessertCardProps {
  dessert: Dessert;
  onPress: (dessert: Dessert) => void;
  onAddToCart?: (dessert: Dessert) => void;
}

// Пропсы для профиля кондитера
export interface BakerProfileProps {
  baker: Baker;
  onContactPress: (baker: Baker) => void;
  onViewProducts: (baker: Baker) => void;
}