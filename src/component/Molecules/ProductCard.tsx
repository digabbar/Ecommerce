import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../Atoms/Button';
import CmpText from '../Atoms/CmpText';
import global from '../../../helpers/global';
import {horizontalScale, verticalScale} from '../../../helpers/scaling';

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
      <CmpText style={styles.productName}>{name}</CmpText>
      <CmpText style={styles.productPrice}>${price.toFixed(2)}</CmpText>
      <Button
        onPress={() => onDelete(id)}
        title="Delete"
        color={global.color.error}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: global.color.black10,
    borderRadius: 10,
    padding: horizontalScale(16),
    margin: horizontalScale(8),
  },
  productName: {
    fontSize: global.fontSize.f18,
    fontFamily: global.getFontFamily('700'),
    color: global.color.text,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: global.fontSize.f16,
    color: global.color.text,
    marginBottom: verticalScale(12),
  },
});

export default ProductCard;
