import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {
  // Сохраняем выбранный город
  setCity: async (city: string) => {
    try {
      await AsyncStorage.setItem('selectedCity', city);
    } catch (error) {
      console.error('Error saving city:', error);
    }
  },

  // Получаем сохраненный город
  getCity: async (): Promise<string | null> => {
    try {
      return await AsyncStorage.getItem('selectedCity');
    } catch (error) {
      console.error('Error getting city:', error);
      return null;
    }
  }
};