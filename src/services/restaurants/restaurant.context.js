import React, {useState, createContext, useEffect, useMemo} from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurant.service";

export const RestaurantContext  = createContext();

export const RestaurantsContextProvider = ({children}) => {   
    const [restaurants,setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const retrieveRestos = () => {
        setIsLoading(true);
        setTimeout(()=>{
            restaurantsRequest()
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
        retrieveRestos();
    }, [])

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