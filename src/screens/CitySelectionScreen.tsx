import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const cities = [
  'Москва', 'Санкт-Петербург', 'Рязань'
];

const CitySelectionScreen = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const navigation = useNavigation();

  const handleCitySelect = async (city: string) => {
    setSelectedCity(city);
  };

  const handleContinue = async () => {
    if (!selectedCity) return;

    try {
      // Сохраняем город в AsyncStorage
      await AsyncStorage.setItem('userCity', selectedCity);
      
      // Переходим на главный экран (создадим его следом)
      navigation.navigate('Main' as never);
      
    } catch (error) {
      Alert.alert('Ошибка', 'Не удалось сохранить город');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Выберите ваш город</Text>
      
      <ScrollView style={styles.citiesList}>
        {cities.map((city) => (
          <TouchableOpacity
            key={city}
            style={[
              styles.cityButton,
              selectedCity === city && styles.selectedCityButton
            ]}
            onPress={() => handleCitySelect(city)}
          >
            <Text style={[
              styles.cityText,
              selectedCity === city && styles.selectedCityText
            ]}>
              {city}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {selectedCity && (
        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={handleContinue}
        >
          <Text style={styles.confirmButtonText}>
            Продолжить с {selectedCity}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B4B63',
    textAlign: 'center',
    marginBottom: 30,
  },
  citiesList: {
    flex: 1,
  },
  cityButton: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCityButton: {
    borderColor: '#8B4B63',
    backgroundColor: '#FFE4E6',
  },
  cityText: {
    fontSize: 18,
    color: '#333333',
  },
  selectedCityText: {
    color: '#8B4B63',
    fontWeight: '600',
  },
  confirmButton: {
    backgroundColor: '#8B4B63',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 30,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CitySelectionScreen;