import CategoryGridTitle from "../components/CategoryGridTitle"
import { FlatList } from "react-native"
import { CATEGORIES } from "../data/dummy-data"

function CategoriesScreen({ navigation }) {
  //navigation is a props/object has method navigate which destructor otherpages inside the app.js. it is provided to those comp whihc use as screen
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id }) //once press it it iwll navigate to mealsoverview.2nd parameter is a params object passes to the screen
    }
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler} //pass as props to categorytitle.js
      />
    )
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    ></FlatList>
  )
}

export default CategoriesScreen
