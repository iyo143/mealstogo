import React from 'react';
import {View} from "react-native";
import styled from 'styled-components/native';
import { theme } from '../../infrastructure/theme';

const sizeVariant = {
    small: 1,
    medium: 2, 
    large: 3,
};

const positionVariant = {
    top: 'marginTop', 
    left: 'marginLeft', 
    right: 'marginRight', 
    bottom: 'marginBottom'
};

const getVariant = (position, size) => {
    const sizeIndex = sizeVariant[size];
    const property = positionVariant[position];
    const value = theme.space[sizeIndex];
    return `${property}:${value}`;
};

export const Spacer = styled.View`
    ${({position, size})=> getVariant(position,size)}
`;

Spacer.defaultProps = {
    position: 'top', 
    size:'small'
}