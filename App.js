import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import AppLoading from 'expo-app-loading';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { theme } from "./src/infrastructure/theme";

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
        <RestaurantScreen/>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
   
  );
}


