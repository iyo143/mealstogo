import React from "react";
import { Searchbar } from 'react-native-paper';
import { FlatList } from "react-native";
import { RestaurantInfo } from "../components/retaurant-info.component";
import { SafeContainer, SearchBarContainer, RestaurantCardContainer, RestaurantLIst } from "./rastaurant.screen.style";

export const RestaurantScreen = () => (
    <SafeContainer >
      <SearchBarContainer>
        <Searchbar/>
      </SearchBarContainer>
      <RestaurantLIst
        data = {[{name:1},{name:2},{name:3},{name:4},{name:5},{name:6},{name:7},{name:8},{name:9},{name:10},{name:11},{name:12}]}
        renderItem = {()=> <RestaurantInfo/>}
        keyExtractor = {(item) => item.name}
        contentContainerStyle ={{padding:16}}
      />
        
    </SafeContainer>
);
