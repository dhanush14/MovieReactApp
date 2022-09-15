import classes from './NewMovieForm.module.css'
import {useRef} from 'react'
import MOVIE_DATA from '../../pages/AllMovies'
function NewMovieForm(){
    const baseUrl="http://localhost:8080/movie";
    const titileInputRef=useRef()
    const imageInputRef=useRef()
    const imdbInputRef=useRef()
    const descriptionInputRef=useRef()
    
    function submitHandler(event){
        event.preventDefault();
        const enteredTitle=titileInputRef.current.value;
        const enteredImage=imageInputRef.current.value;
        const enteredImdb=imdbInputRef.current.value;
        const enteredDescription=descriptionInputRef.current.value;
        const movieData={
            id:"movie"+(MOVIE_DATA.length+1),
            title:enteredTitle,
            image:enteredImage,
            imdb:enteredImdb,
            description:enteredDescription
        };
      //MOVIE_DATA[MOVIE_DATA.length]=movieData

      fetch(baseUrl+"/",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(movieData)
      }).then((Response)=>{
            alert("Movie added Successfully")
      }).catch((Error)=>
      {
        alert("Error..")
      })

      alert('Movie added successfully')
      titileInputRef.current.value="";
       imageInputRef.current.value="";
       imdbInputRef.current.value="";
        descriptionInputRef.current.value="";
        console.log(movieData)
    }
    return(
        <div className={classes.item}>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Movie Title</label>
                    <input type='text' reuired id='title' ref={titileInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Movie image</label>
                    <input type='text' reuired id='image' ref={imageInputRef}/>
                </div>
                <div className={classes.control} >
                    <label htmlFor="imdb">IMDB Ratings</label>
                    <input type='text' reuired id='imdb' ref={imdbInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Movie Description</label>
                    <textarea required id='description' rows='5' ref={descriptionInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Movie</button>
                </div>
            </form>
        </div>
    )
}
export default NewMovieForm