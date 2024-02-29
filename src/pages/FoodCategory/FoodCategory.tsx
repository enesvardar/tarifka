import React from 'react';
import { View, Text, Pressable, Image, FlatList } from 'react-native';

import styles from './FoodCategory.style';
import { useRoute } from '@react-navigation/native';
import useFetch from '../../hooks/useFetch';
import FoodCard from '../../components/FoodCard';

interface Params {
  categorName: string;
}

interface ApiResponse {
  meals: Array<{
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
  }>;
}

const FoodCategory: React.FC = () => {

  const route = useRoute();

  const { categorName } = route.params as Params;

  const { error, loading, data } = useFetch<ApiResponse>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorName}`);

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.meals}
        renderItem={({ item }) => <FoodCard item={item} />}
        keyExtractor={(item) => item.idMeal}
      />
    </View>
  );
}

export default FoodCategory;