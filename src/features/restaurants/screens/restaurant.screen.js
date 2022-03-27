import React, {useContext} from "react";
import { Searchbar } from 'react-native-paper';
import { FlatList, View } from "react-native";
import { RestaurantInfo } from "../components/retaurant-info.component";
import { SafeContainer, SearchBarContainer, RestaurantCardContainer, RestaurantLIst } from "./rastaurant.screen.style";
import { RestaurantContext } from "../../../services/restaurants/restaurant.context";
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Search } from "../components/search.component";

export const RestaurantScreen = () => {

    
    const {isLoading, error, restaurants} = useContext(RestaurantContext);
    return(
      <SafeContainer >
        {isLoading && (
          <View style={{position:"absolute", top:"50%", left:"50%"}}>
              <ActivityIndicator animating={true} color={Colors.red800} />
          </View>
        )
          
        }
      <Search/>
      <RestaurantLIst
        data = {restaurants}
        renderItem = {({item})=> {
        return(
            <RestaurantInfo restaurant={item}/>
          );
        }}
        keyExtractor = {(item) => item.name}
        contentContainerStyle ={{padding:16}}
      />
    </SafeContainer>
    );
   
};
