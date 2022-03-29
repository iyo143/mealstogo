import React from "react";
import { Text } from "react-native";
import { RestaurantInfo } from "../../components/retaurant-info.component";
import { SafeContainer } from "../rastaurant.screen.style";
import { List } from 'react-native-paper';

export const ViewResto = ({route, navigation}) =>{

    const {resto} = route.params;
    const [expanded, setExanded] = React.useState(true);

    return(
       <SafeContainer>
          <RestaurantInfo restaurant={resto}/>
          <List.Section >
            <List.Accordion
                title="Breakfast"
                left={props => <List.Icon{...props} icon="bread-slice"/>}>
                <List.Item title="Eggs item" />
                <List.Item title="Second item" />
            </List.Accordion>
            <List.Accordion
                title="Lunch"
                left={props => <List.Icon{...props} icon="hamburger"/>}>
                <List.Item title="Eggs item" />
                <List.Item title="Second item" />
            </List.Accordion>
            <List.Accordion
                title="Dinner"
                left={props => <List.Icon{...props} icon="food-variant"/>}>
                <List.Item title="Eggs item" />
                <List.Item title="Second item" />
            </List.Accordion>
            <List.Accordion
                title="Drinks"
                left={props => <List.Icon{...props} icon="food-fork-drink"/>}>
                <List.Item title="Eggs item" />
                <List.Item title="Second item" />
            </List.Accordion>
          </List.Section>
       </SafeContainer>
     
    );
}