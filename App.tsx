import {Provider} from 'react-redux';
import store from './src/reducer/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AddProduct from './src/component/Pages/AddProduct';
import HomePage from './src/component/Pages/HomePage';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
}
