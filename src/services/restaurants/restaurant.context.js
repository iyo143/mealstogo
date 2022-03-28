import React, {useState, createContext, useEffect, useMemo, useContext} from "react";
import { LocationContext } from "../location/location.context";

import { restaurantsRequest, restaurantsTransform } from "./restaurant.service";

export const RestaurantContext  = createContext();

export const RestaurantsContextProvider = ({children}) => {   
    const [restaurants,setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {location} = useContext(LocationContext);
    const retrieveRestos = (locate) => {
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(()=>{
            restaurantsRequest(locate)
            .then(restaurantsTransform)
            .then((results)=> {
                setRestaurants(results);
            }).catch((err)=>{
                setIsLoading(false);
                setError(err);
            })
        }, 2000)
    }
    useEffect(()=> {
        if(location){
            console.log(location);
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestos(locationString);
            console.log(locationString);
        }
        
    }, [location])

    return (
        <RestaurantContext.Provider value={{
            restaurants,
            isLoading,
            error
            }}>
            {children}
        </RestaurantContext.Provider>
    )
}