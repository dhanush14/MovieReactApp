import {useContext} from 'react'
import MovieList from '../components/movies/MovieList'
import FavoritesContext from '../components/store/FavouritesContext'

function Favorites(){
    const favouritesCtxt = useContext(FavoritesContext)
    let content;
    if(favouritesCtxt.totalFavorites === 0) {
        content = <h3> Nothing to show. Start adding your favourite movies.</h3>
    }
    else{
        content =<MovieList movies = {favouritesCtxt.favorites}/>
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>
               Favorites page
            </h2>
            {content}
        </div>
    )
}
export default Favorites