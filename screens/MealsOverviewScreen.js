import { View, FlatList, StyleSheet } from "react-native"
import { useLayoutEffect } from "react"
import { CATEGORIES, MEALS } from "../data/dummy-data"
import MealItem from "../components/MealItem"

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId //to extract the category id
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0
  })

  //setting navigation dynamically
  //1 option : inside directly screen config
  //2nd option : setoptions and uselayouteffect
  //Now this happens because useEffect actually executes this effect function after the component function was executed for the first time. That's why it's looking that ugly. This can be fixed by using the useLayoutEffect hook instead.  you typically have some kind of ongoing animation and you wanna set or execute some side effect while this is still happening, and before the component has been rendered. So before this component function has finished execution. Or to be precise, you wanna run this effect simultaneously with the component function execution. Then we use, useLayoutEffect instead of useEffect and use useLayoutEffect in the same way as we did use useEffect

  //setting the options is the side effect so use uselayouteffect
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title
    navigation.setOptions({ title: categoryTitle })
  }, [catId, navigation])

  function renderMealItem(itemData) {
    const item = itemData.item
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    }
    return <MealItem {...mealItemProps} />
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
