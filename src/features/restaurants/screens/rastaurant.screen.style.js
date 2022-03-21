import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaView, FlatList} from 'react-native';
import styled from 'styled-components/native';

export const SafeContainer = styled(SafeAreaView)`
    flex:1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchBarContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;
export const RestaurantCardContainer = styled(View)`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantLIst = styled(FlatList).attrs({
    contentContainerStyle:{
        padding:16,
    }
})``;