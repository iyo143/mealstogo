import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Platform } from 'react-native-web';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from "../components/retaurant-info.component";
import styled from 'styled-components/native';


const SafeContainer = styled(SafeAreaView)`
    flex:1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchBarContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;
const RestaurantCardContainer = styled(View)`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => (
    <SafeContainer >
    <SearchBarContainer>
      <Searchbar/>
    </SearchBarContainer>
    <RestaurantCardContainer >  
      <RestaurantInfo/>
    </RestaurantCardContainer>
  </SafeContainer>
);
