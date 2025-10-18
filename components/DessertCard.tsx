import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DessertCardProps } from '../types/components';
import { DesignSystem } from 'src/types/DesignSystem';

// Временные стили (потом заменим на данные от Татьяны)
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#2ecc71',
    fontWeight: '600',
  },
  baker: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  }
});

const DessertCard: React.FC<DessertCardProps> = ({ 
  dessert, 
  onPress, 
  onAddToCart 
}) => {
  return (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => onPress(dessert)}
    >
      <Text style={styles.title}>{dessert.name}</Text>
      <Text style={styles.price}>{dessert.price} €</Text>
      <Text style={styles.baker}>Кондитер: {dessert.baker.name}</Text>
      
      {onAddToCart && (
        <TouchableOpacity 
          onPress={() => onAddToCart(dessert)}
          style={{ marginTop: 12, padding: 8, backgroundColor: '#3498db', borderRadius: 6 }}
        >
          <Text style={{ color: '#fff', textAlign: 'center' }}>В корзину</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default DessertCard;