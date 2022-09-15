import classes from './MovieItem.module.css'
import {useContext} from 'react';
import FavoritesContext from '../store/FavouritesContext';

function MovieItem(props){
    const favouritesCtxt = useContext(FavoritesContext)
    const itemIsFavourite = favouritesCtxt.itemIsFavorite(props.id)

    function toggleFavouriteStatusHandler(){
        if(itemIsFavourite){
            favouritesCtxt.removeFavorite(props.id);
        }
        else{
            favouritesCtxt.addFavorite({
                id:props.id,
                title:props.title,
                image:props.image,
                imdb:props.imdb,
                description:props.description
            });
        }
    }
    return(
        <ul className={classes.item}>
            <div className={classes.image} >
                <img src={props.image} alt={props.title} className={classes.movieImage}/>
            </div>
            <div className={classes.content}>
                <h3>Title : {props.title}</h3>
                <h3>IMDB Rating: {props.imdb}</h3>
                <p>Description: {props.description}</p>
                
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavouriteStatusHandler}> 
                {itemIsFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
                </button>
            </div>

        </ul>
    )
}
export default MovieItem;