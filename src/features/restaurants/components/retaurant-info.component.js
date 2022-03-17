import React from "react";
import styled from 'styled-components/native';
import {  Text, StyleSheet} from 'react-native';
import { Card, Paragraph } from "react-native-paper";

const Title = styled.Text`
    padding: 16px;
    color: red;
`;

const RestaurantCard = styled(Card)`
    background: #fff;
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding:20px;
    backgroundColor:white;
`;

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
        <RestaurantCard elevation={5} >
            <RestaurantCardCover source={{ uri:photos[0] }} />
            <Title >{name}</Title>
        </RestaurantCard>
    );
};

