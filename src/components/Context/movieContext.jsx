import React,{useState, createContext} from 'react';


export const MovieContext = createContext();

export default function MovieProvider(props) {
    const [movies,setMovies] = useState([
        {
            Name: 'Harry potter',
            price: '$10',
            id: 1234
        },
        {
            Name: 'Suits',
            price: '$10',
            id: 2341
        },
        {
            Name: 'Inception',
            price: '$10',
            id: 5467
        },
        {
            Name: 'Loki',
            price: '$10',
            id: 2345
        }
    ])
    return (
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>

    )
}