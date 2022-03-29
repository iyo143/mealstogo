import { ThemeProvider } from "styled-components/native";
import AppLoading from 'expo-app-loading';
import {  useFonts as useOswald, Oswald_400Regular,} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular,} from '@expo-google-fonts/lato';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Text, View,  } from 'react-native';
import { restaurantRequest } from "./src/services/restaurants/restaurant.service";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurant.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { AppNavigator } from "./src/infrastructure/navigation/app.navigator";
import { Navigation } from "./src/infrastructure/navigation";

export default function App() {

  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded){
    return <AppLoading />;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation/>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


