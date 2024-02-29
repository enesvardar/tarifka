import React from 'react';
import { View, Text, Pressable, Image, TouchableHighlight } from 'react-native';

import styles from './CategoryButton.style';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Props {
  item: {
    strCategoryThumb: string;
    strCategory: string;
  }
}

const CategoryButton: React.FC<Props> = ({ item }) => {

  const navigation = useNavigation();

  return (
    <View onTouchStart={() =>
      navigation.navigate('Category', {
        categorName: item.strCategory,
      })}>
      <Pressable style={styles.container} >
        <Image style={styles.categoryImage}
          source={{
            uri: item.strCategoryThumb
          }} />
        <Text style={styles.text}>
          {item.strCategory}
        </Text>
      </Pressable>
    </View >
  );
}

export default CategoryButton;