import React, { useState } from 'react'
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import SearchResults from './SearchResults';

const Navbar = ({resetPage}) => {

    const navigate = useNavigate()
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    
      const searchMovie = async(e)=> {
        e.preventDefault();
        console.log("Searching");
        try{
          const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
          const res= await fetch(url);
          const data= await res.json();
          setMovies(data.results);
        }
        catch(e){
          console.log(e);
        }
        navigate(`search/${query}`)
      }
    
    const handleChange = (e) => {
        setQuery(e.target.value)
    }

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Inicio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to='Peliculas' name="movie" onClick={resetPage}>Peliculas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="TV-shows" name="shows" onClick={resetPage}>TV shows</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="About">About</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" onSubmit={searchMovie}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange={handleChange}/>
                        <button className="btn btn-outline-primary" type="submit" >Search</button>
                    </form>
                </div>
            </div>
        </nav>
        <Routes>
            <Route path={`search/${query}`} element={<SearchResults movie={movies}/>}></Route>
        </Routes>
    </div>
  )
}

export default Navbar