import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { useEffect } from "react"
import CategoriesScreen from "./screens/CategoriesScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen" //splash screen
import MealsOverviewScreen from "./screens/MealsOverviewScreen"
import MealDetailScreen from "./screens/MealDetailScreen"
import { createDrawerNavigator } from "@react-navigation/drawer"
import FavoritesScreen from "./screens/FavoritesScreen"
import { Ionicons } from "@expo/vector-icons"
const Stack = createNativeStackNavigator()

const Drawer = createDrawerNavigator()
//drawer nav nested inside the stack navigation
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerInactiveTintColor: "white",
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}
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
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
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
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{ title: "About the meal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {},
})
