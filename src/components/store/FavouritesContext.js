import { createContext,useState } from "react";

const FavoritesContext = createContext(
    {
        favorites:[],
        totalFavorites:0,
        addFavorite:(favoriteMovie) => {},
        removeFavorite:(movieId)=> {},
        itemIsFavorite:(movieId)=>{}
    }
);
export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites]=useState([]);

    function addFavoritesHandler(favoriteMovie){
        setUserFavorites((prevFavorites)=>{
            return prevFavorites.concat(favoriteMovie);
        });
    }

    function removeFavoriteHandler(movieId){
        setUserFavorites(prevFavorites =>{
            return prevFavorites.filter(movie => movie.id !== movieId)
        })
    }

    function itemIsFavoriteHandler(movieId){
        return userFavorites.some(movie => movie.id === movieId)
    }

const context ={
    favorites:userFavorites,
    totalFavorites:userFavorites.length,
    addFavorite:addFavoritesHandler,
    removeFavorite:removeFavoriteHandler,
    itemIsFavorite:itemIsFavoriteHandler
};

return <FavoritesContext.Provider value={context}>
    {props.children}
</FavoritesContext.Provider>
} 

export default FavoritesContext;