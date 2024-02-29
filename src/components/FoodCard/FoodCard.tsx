import React from 'react';
import { View, Text, Pressable, Image, TouchableHighlight } from 'react-native';

import styles from './FoodCard.style';
import { useNavigation } from '@react-navigation/native';

interface Props {
  item: {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
  }
}

const FoodCard: React.FC<Props> = ({ item }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container} onTouchStart={() =>
      navigation.navigate('Detail', {
        strMeal: item.strMeal,
      })}>
      <Image style={styles.categoryImage}
        source={{
          uri: item.strMealThumb
        }} />
      <View style={styles.textView} >
        <Text style={styles.text}>
          {item.strMeal}
        </Text>
      </View>
    </View >
  );
}

export default FoodCard;