import MovieItem from "./MovieItem"

function MovieList(props){
    return(
        <ul>
            {props.movies.map(movie=><MovieItem
            id={movie.id}
            title ={movie.title}
            image={movie.image}
            imdb={movie.imdb}
            description={movie.description}/>)}
        </ul>
    )
}
export default MovieList