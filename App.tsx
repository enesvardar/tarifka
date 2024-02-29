
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './src/pages/Categories';
import FoodCategory from './src/pages/FoodCategory';
import FoodDetail from './src/pages/FoodDetail';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Category" component={FoodCategory} />
        <Stack.Screen name="Detail" component={FoodDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
