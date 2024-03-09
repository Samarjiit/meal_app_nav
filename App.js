import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { useEffect } from "react"
import CategoriesScreen from "./screens/CategoriesScreen"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen" //splash screen
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
      <CategoriesScreen />
    </>
  )
}

const styles = StyleSheet.create({
  container: {},
})
