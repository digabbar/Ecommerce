import React, {useLayoutEffect} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {View, BackHandler} from 'react-native';
import {Header, RightComponent, TitleComponent} from '../Organism/Header';
import globalStyle from '../../../helpers/globalStyle';
import ProductList from '../Organism/ProductList';
import {useSelector} from 'react-redux';
import {showAllProducts} from '../../reducer/productSlice';

type HomePageProps = {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any, any>;
};

const HomePage: React.FC<HomePageProps> = ({navigation}) => {
  const allProducts = useSelector(showAllProducts);

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

  return (
    <View style={[globalStyle.primary, globalStyle.flexOne]}>
      <ProductList products={allProducts} />
    </View>
  );
};

export default HomePage;
