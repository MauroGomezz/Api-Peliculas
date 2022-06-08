import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from './components/Movies';
import Navbar from "./components/Navbar"
import Start from "./components/Start"
import Shows from "./components/Shows"
import InfoMovies from './components/InfoMovies';
import InfoTv from './components/InfoTv';

function App() {
  let [pag, setPag] = useState(1)
  
  const handleClick = (e) => {
    if (e.currentTarget.name === "mas" && pag < 1000) {
      setPag(pag += 1)
    } else if (e.currentTarget.name === "menos" && pag > 1) {
      setPag(pag -= 1)
    }
  }
  
  const resetPage = () => {
    setPag(1)
  }

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    
      const searchMovie = async(e)=> {
        e.preventDefault();
        console.log("Searching");
        try{
          const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
          const res= await fetch(url);
          const data= await res.json();
          console.log(data);
          setMovies(data.results);
        }
        catch(e){
          console.log(e);
        }
      }
    
    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const resetResults = () => {
      setMovies([])
    }

  return (
  <BrowserRouter>
    <Navbar resetPage={resetPage} handleChange={handleChange} searchMovie={searchMovie} query={query} movies={movies} resetResults={resetResults}/> 
    <Routes>
      <Route path="/Peliculas/:id" element={<InfoMovies/>}/>
      <Route path='/Peliculas' element={<Movies pag={pag} handleClick={handleClick}/>}/>
      <Route path='/TV-shows/:id' element={<InfoTv/>}/>
      <Route path='/TV-shows' element={<Shows pag={pag} handleClick={handleClick}/>}/>
      <Route path='/' element={<Start/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
