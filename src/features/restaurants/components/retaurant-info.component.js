import React from "react";
import {  Text, StyleSheet} from 'react-native';
import { Card, Paragraph } from "react-native-paper";

export const RestaurantInfo = ({restaurant = {}}) => {

    const{
        name = 'Some Restaurant', 
        icon,
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
          ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isCloseTemporarily,
    } = restaurant; 

    return (
        <Card elevation={5} styles = {styles.card}>
            <Card.Cover source={{ uri:photos[0] }} style = {styles.cover}/>
            <Paragraph style = {styles.title}>{name}</Paragraph>
        </Card>
    );
};

const styles = StyleSheet.create({
   card: { 
       backgroundColor: "white", 
   }, 
   cover: {
       padding:20,
       backgroundColor: "white"
   },
   title: {
       padding: 20,
   }
});