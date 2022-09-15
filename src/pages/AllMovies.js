import MovieList from "../components/movies/MovieList"
import { Component } from "react";




class AllMovies extends Component{
    state={
        MOVIE_DATA:[]
    }
    baseURL="http://localhost:8080/movie";

    async componentDidMount(){
        const Response=await fetch (this.baseURL+"/");
        const body=await Response.json();
        this.setState({MOVIE_DATA:body})
    }
    render(){
        const {MOVIE_DATA}=this.state;

        return(
            <div style={{textAlign:"center"}}>
                <h1>All Movies Page</h1>
                <MovieList movies={MOVIE_DATA}/>
            </div>
        )
    }
   
}
export default AllMovies;


