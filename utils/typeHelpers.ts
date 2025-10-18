import { Dessert, Baker } from '../types';

// Функция для фильтрации десертов по категории
export const filterDessertsByCategory = (
  desserts: Dessert[], 
  category: Dessert['category']
): Dessert[] => {
  return desserts.filter(dessert => dessert.category === category);
};

// Функция для поиска кондитеров по специализации
export const findBakersBySpecialty = (
  bakers: Baker[], 
  specialty: string
): Baker[] => {
  return bakers.filter(baker => baker.specialty.includes(specialty));
};

// Функция для проверки доступности десерта
export const isDessertAvailable = (dessert: Dessert): boolean => {
  return dessert.isAvailable && dessert.price > 0;
};