import React from 'react';
import { View, Text, Pressable, Image, FlatList } from 'react-native';

import styles from './FoodDetail.style';
import { useRoute } from '@react-navigation/native';
import useFetch from '../../hooks/useFetch';
import FoodCard from '../../components/FoodCard';

interface Params {
  strMeal: string;
}

interface ApiResponse {
  meals: Array<{
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
    strArea: string;
    strInstructions: string;
  }>;
}


const FoodDetail: React.FC = () => {


  const route = useRoute();

  const { strMeal } = route.params as Params;

  const { error, loading, data } = useFetch<ApiResponse>("https://www.themealdb.com/api/json/v1/1/search.php?s=Beef%20and%20Mustard");

  console.log(data?.meals[0].strArea)

  return (
    <View>
      <Image style={styles.image} source={{ uri: data?.meals[0].strMealThumb }} />
      <Text style={styles.foodName}>{data?.meals[0].strMeal}</Text>
      <Text style={styles.foodArea}>{data?.meals[0].strArea}</Text>

      <Text style={styles.foodDetail}>{data?.meals[0].strInstructions}</Text>
      <Pressable
        style={styles.youtubeButton}
      ><Text style={styles.youtubeText}>Watch on Youtube</Text></Pressable>
    </View>
  );
}

export default FoodDetail;