import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { useEffect } from "react"
import CategoriesScreen from "./screens/CategoriesScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen" //splash screen
import MealsOverviewScreen from "./screens/MealsOverviewScreen"

const Stack = createNativeStackNavigator()
//setting the custom fonts
export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    LemonLove: require("./assets/fonts/LemonLove.ttf"),
    MilkyCoffee: require("./assets/fonts/MilkyCoffee.otf"),
  })
  //it will do componentdidmount
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, [])
  if (!fontsLoaded) {
    return undefined
  } else {
    SplashScreen.hideAsync()
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
              // headerStyle: { backgroundColor: "#351401" },
              // headerTintColor: "white",
              // contentStyle: { backgroundColor: "#3f2f25" },
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            //one way to setting navigation dynamically
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId
            //   return { title: catId }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {},
})
