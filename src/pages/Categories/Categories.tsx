import { FlatList, View } from "react-native";
import styles from './Categories.style';
import useFetch from "../../hooks/useFetch";
import CategoryButton from "../../components/CategoryButton";

interface ApiResponse {
  categories: Array<{
    strCategoryThumb: string;
    strCategory: string;
    idCategory: string;
  }>;
}

const Categories = () => {

  const { error, loading, data } = useFetch<ApiResponse>("https://www.themealdb.com/api/json/v1/1/categories.php");

  console.log(data?.categories[0])

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.categories}
        renderItem={({ item }) => <CategoryButton item={item} />}
        keyExtractor={(item) => item.idCategory}
      />
    </View>
  )
}

export default Categories;