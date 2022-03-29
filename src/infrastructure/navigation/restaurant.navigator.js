import React from "react";
import { Text } from "react-native-paper";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurant.screen";
import { ViewResto } from "../../features/restaurants/screens/view-restaurant/view-restaurant.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return(
        <RestaurantStack.Navigator headerMode="none" 
            screenOptions={{
                ...TransitionPresets.ModalPresentationIOS,
            }}
        >
            <RestaurantStack.Screen
                name="Restos"
                component={RestaurantScreen}
            />
            <RestaurantStack.Screen
                name="RestoDetails"
                component ={ViewResto}
            />
        </RestaurantStack.Navigator>
    );
}