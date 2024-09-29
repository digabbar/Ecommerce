import React, {useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import ProductCard from '../Molecules/ProductCard';

import {deleteProduct} from '../../reducer/productSlice';
import {horizontalScale, verticalScale} from '../../../helpers/scaling';

type Product = {
  id: number;
  name: string;
  price: number;
};

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({products}) => {
  const dispatch = useDispatch();

  const handleDelete = useCallback(
    (id: number) => {
      dispatch(deleteProduct(id));
    },
    [dispatch],
  );

  const renderItem = ({item}: {item: Product}) => (
    <ProductCard
      id={item.id}
      name={item.name}
      price={item.price}
      onDelete={handleDelete}
    />
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(8),
  },
});

export default ProductList;
