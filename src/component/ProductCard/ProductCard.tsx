import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CmpButton from '../CmpButton/CmpButton';
import global from '../../../helpers/global';
import styles from './style';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  onDelete: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  onDelete,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>${price.toFixed(2)}</Text>
      <CmpButton
        onPress={() => onDelete(id)}
        title="Delete"
        color={global.color.error}
      />
    </View>
  );
};

export default ProductCard;
