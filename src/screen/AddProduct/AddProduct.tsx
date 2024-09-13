import React, {useCallback, useLayoutEffect, useState, useMemo} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {View, BackHandler} from 'react-native';
import Header from '../../component/Header/Header';
import globalStyle from '../../../helpers/globalStyle';
import LeftComponent from '../../component/Header/LeftComponent';
import TitleComponent from '../../component/Header/TitleComponent';
import CmpTextInput from '../../component/CmpTextInput/CmpTextInput';
import CmpButton from '../../component/CmpButton/CmpButton';
import {horizontalScale, verticalScale} from '../../../helpers/scaling';
import global from '../../../helpers/global';
import {useDispatch} from 'react-redux';
import {addProduct} from '../../reducer/productSlice';

type AddProductProps = {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any, any>;
};

const AddProduct: React.FC<AddProductProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({productName: '', price: ''});
  const [errors, setErrors] = useState({productName: '', price: ''});

  const validateForm = useCallback(() => {
    const newErrors: {productName?: string; price?: string} = {};
    let isValid = true;

    if (!formData.productName.trim()) {
      newErrors.productName = 'Product Name is required';
      isValid = false;
    }

    if (!formData.price.trim()) {
      newErrors.price = 'Price is required';
      isValid = false;
    } else if (isNaN(Number(formData.price))) {
      newErrors.price = 'Price must be a number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [formData]);

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prevState => ({...prevState, [field]: value}));
    setErrors(prevState => ({...prevState, [field]: ''}));
  }, []);

  const handleAddProduct = useCallback(() => {
    if (validateForm()) {
      dispatch(
        addProduct({name: formData.productName, price: Number(formData.price)}),
      );
      navigation.goBack();
    }
  }, [validateForm, dispatch, formData, navigation]);

  useLayoutEffect(() => {
    const handleBackPress = () => {
      navigation.goBack();
      return true;
    };

    navigation.setOptions({
      header: () => (
        <Header
          leftComponent={<LeftComponent onPress={handleBackPress} />}
          titleComponent={<TitleComponent title="Add Product" />}
        />
      ),
    });

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [navigation]);

  const containerStyle = useMemo(
    () => ({
      marginHorizontal: horizontalScale(16),
      marginVertical: verticalScale(16),
    }),
    [],
  );

  return (
    <View style={[globalStyle.primary, globalStyle.flexOne, containerStyle]}>
      <CmpTextInput
        label="Product Name"
        placeholder="Enter"
        value={formData.productName}
        onChange={text => handleInputChange('productName', text)}
        error={errors.productName}
      />
      <CmpTextInput
        label="Price"
        placeholder="Enter"
        value={formData.price}
        keyboardType="numeric"
        onChange={text => handleInputChange('price', text)}
        error={errors.price}
      />
      <CmpButton
        onPress={handleAddProduct}
        title="Add"
        color={global.color.success}
      />
    </View>
  );
};

export default AddProduct;
