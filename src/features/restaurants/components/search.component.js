import React, {useContext, useState} from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";


export const SearchBarContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
    const {keyword, search} = useContext(LocationContext);
    const [searchKerword, setSearchKeyword] = useState(keyword);
    console.log(searchKerword);
    return(
        <SearchBarContainer>
            <Searchbar
                placeholder="Search for a location"
                value={searchKerword}
                onSubmitEditing={()=>{
                    search(searchKerword);
                }}
                onChangeText={(text)=>{
                    if(!text.length){
                    }
                    setSearchKeyword(text)
                }}
            />
        </SearchBarContainer>
    );

} 