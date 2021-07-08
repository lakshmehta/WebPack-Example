import React from 'react'
import { useState, useContext } from 'react'
import Movie from './movie'
import { MovieContext } from './movieContext'


function MovieList(props){
    const [movies, setMovies]= useContext(MovieContext);
    return (
        <div>
            {movies.map((movies)=>(
               <div>
                   <Movie Name={movies.Name} price={movies.price} key={movies.id}/>
               </div> 
            ))}
        </div>
    );
};
export default MovieList;