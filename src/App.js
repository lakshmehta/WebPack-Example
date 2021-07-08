import React,{createContext} from 'react';
import MovieList from './components/Context/movieList';
import Nav from './components/Context/nav';
import AddMovie from './components/Context/addMovie';
import { MovieProvider} from './components/Context/movieContext'
import withBack from './components/Hoc/withBack';
import CompC from './components/example/child3';
import child1 from './components/example/child1';
const FirstName = createContext();
const LastName = createContext();
 function App(){
    return(
        // <MovieProvider>
        //     <div>
        //         <Nav/> 
        //         <AddMovie/> 
        //         <MovieList/>
        //     </div>
           
        // </MovieProvider>
        <FirstName.Provider value={"Jacky"}>
        <LastName.Provider value={" Den"}>
            <CompC/>
        </LastName.Provider>            
    </FirstName.Provider> 
    )
        
}
export default withBack(App)
export {FirstName,LastName};