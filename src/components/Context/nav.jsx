import React from 'react'
import { MovieContext } from './movieContext'
export default function Nav() {
    const [movies, setMovies] = useContext(contextValue)
    return (
        <div>
            <h4>Laksh M</h4>
            <p>List of Movies: {movies.length}</p>
        </div>
    )
}
