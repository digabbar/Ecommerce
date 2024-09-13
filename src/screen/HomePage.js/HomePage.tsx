import React, {useLayoutEffect, useCallback} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {View, BackHandler, FlatList} from 'react-native';
import Header from '../../component/Header/Header';
import RightComponent from '../../component/Header/RightComponent';
import TitleComponent from '../../component/Header/TitleComponent';
import globalStyle from '../../../helpers/globalStyle';
import ProductCard from '../../component/ProductCard/ProductCard';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {deleteProduct, showAllProducts} from '../../reducer/productSlice';

type HomePageProps = {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any, any>;
};

type Product = {
  id: number;
  name: string;
  price: number;
  onDelete?: (id: number) => void;
};

const HomePage: React.FC<HomePageProps> = ({navigation}) => {
  const allProducts = useSelector(showAllProducts);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const handleBackPress = () => {
      return true;
    };

    navigation.setOptions({
      header: () => (
        <Header
          rightComponent={
            <RightComponent onPress={() => navigation.navigate('AddProduct')} />
          }
          titleComponent={<TitleComponent title="Hello Mosaab! 🌟" />}
        />
      ),
    });

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [navigation]);

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
    <View style={[globalStyle.primary, globalStyle.flexOne]}>
      <FlatList
        data={allProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomePage;
