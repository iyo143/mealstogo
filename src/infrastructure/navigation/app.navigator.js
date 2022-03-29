import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsNavigator } from "./restaurant.navigator";
import { Text, View } from "react-native";


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
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "tomato",
        headerShown:false, 
    };
};

function MyTabs(){
    return(
        <Tab.Navigator
        screenOptions={createScreenOptions}
        >
        <Tab.Screen name = "Restaurant" component={RestaurantsNavigator}/>
        <Tab.Screen name = "Map" component={MapScreen}/>
        <Tab.Screen name = "Settings" component={SettingScreen}/>
        </Tab.Navigator>
    );
}

export const AppNavigator = ()=> {

    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
   
}
