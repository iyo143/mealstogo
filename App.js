import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import AppLoading from 'expo-app-loading';
import {  useFonts as useOswald, Oswald_400Regular,} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular,} from '@expo-google-fonts/lato';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { theme } from "./src/infrastructure/theme";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Text, View,  } from 'react-native';
import { restaurantRequest } from "./src/services/restaurants/restaurant.service";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurant.context";


function RestoScreen(){
  return (
    <RestaurantScreen/>
  );
}
function MapScreen(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map!</Text>
    </View>
  );
}
function SettingScreen(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const TAB_ICON =  {
  Restaurant: "md-restaurant",
  Settings: "md-settings",
  Map: "md-map",
}
const createScreenOptions = ({route})=>{
  const iconName = TAB_ICON[route.name];
  return{
    tabBarIcon: ({size, color})=>(
       <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

function MyTabs(){
  return(
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions = {{
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }}
    >
      <Tab.Screen name = "Restaurant" component={RestoScreen}/>
      <Tab.Screen name = "Map" component={MapScreen}/>
      <Tab.Screen name = "Settings" component={SettingScreen}/>
    </Tab.Navigator>
  );
}

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
        <RestaurantsContextProvider>
          <NavigationContainer>
            <MyTabs/>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


