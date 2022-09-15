import { useContext } from "react"
import { Link } from "react-router-dom"
import classes from './MainNavigation.module.css'
import FavoritesContext from "../components/store/FavouritesContext"

function MainNavigation(){
    const favouritesCtxt = useContext(FavoritesContext)
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Movies</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> All Movies</Link>
                    </li>
                    <li>
                        <Link to="/addMovie"> Add Movie</Link>
                    </li>
                    <li>
                        <Link to="/favorites"> Favorites</Link>
                        <span className={classes.badge}>{favouritesCtxt.totalFavorites}</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation