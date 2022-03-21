import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { Text } from "../../../components/typography/text.component";

export const Icon = styled.Image`
width: 15px;
height: 15px;
`;

export const Open = styled.View`
    justify-content:center;
    align-items:center;
    flex-direction:row;
`;
export const Title = styled.Text`
    color: ${(props) => props.theme.colors.ui.primary};
    font-family: ${(props)=>props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.title}
`;
export const RestaurantCard = styled(Card)`
    background:  ${(props) => props.theme.colors.bg.primary};
    margin-bottom: ${(props) => props.theme.space[3]};

`;
export const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background:  ${(props) => props.theme.colors.bg.primary};
`;
export const Address = styled.Text`
    font-family: ${(props)=>props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption}
`;
export const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`
export const Rating = styled.View`
    flex-direction:row;
    padding-top: ${(props)=>props.theme.space[2]};
    padding-bottom: ${(props)=>props.theme.space[2]};
`;

export const SpaceBetween = styled.View`
    flex-direction:row;
    justify-content: space-between
`;
