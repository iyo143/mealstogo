import React, {useContext} from "react";
import { Searchbar } from 'react-native-paper';
import { FlatList } from "react-native";
import { RestaurantInfo } from "../components/retaurant-info.component";
import { SafeContainer, SearchBarContainer, RestaurantCardContainer, RestaurantLIst } from "./rastaurant.screen.style";
import { RestaurantContext } from "../../../services/restaurants/restaurant.context";

export const RestaurantScreen = () => {

    const restaurantContext = useContext(RestaurantContext);
    console.log(restaurantContext)
    return(
      <SafeContainer >
      <SearchBarContainer>
        <Searchbar/>
      </SearchBarContainer>
      <RestaurantLIst
        data = {restaurantContext.restaurants}
        renderItem = {()=> <RestaurantInfo/>}
        keyExtractor = {(item) => item.name}
        contentContainerStyle ={{padding:16}}
      />
    </SafeContainer>
    );
   
};
