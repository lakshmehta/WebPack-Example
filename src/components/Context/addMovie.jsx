import React from 'react'
import { useState } from 'react'
import { MovieContext } from './movieContext'
export default function AddMovie() {
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [movies, setMovies] = useContext(contextValue)
    const updateName=(e)=>{
        setName(e.target.value)
    }
    
    const updatePrice=(e)=>{
        setPrice(e.target.value)
    }
    const addMovie=()=>{
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies,{name:Name, price:price}])
    }
    return (
        <form onSubmit={addMovie}>
            <input type="text" name="Name" value={Name} onChange={updateName}/>
            <input type="text" name="price" value={price} onChange={updatePrice}/>
            <button>Submit</button>
        </form>
    )
}
