import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('CitySelection' as never);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🎂</Text>
      </View>
      <Text style={styles.appName}>Cake</Text>
      <Text style={styles.subtitle}>Кондитерское приложение</Text>
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Загрузка...</Text>
      </View>
    </View>
  );
};

// Стили остаются те же...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF0F5',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    fontSize: 80,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#8B4B63',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#8B4B63',
    opacity: 0.8,
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 50,
  },
  loadingText: {
    fontSize: 14,
    color: '#8B4B63',
    opacity: 0.7,
  },
});

export default SplashScreen;