import React, { useEffect, useState } from 'react'
import useFetch from '../Hooks/useFetch';
import Loading from './Loading';

const Card = ({pag, handleClick, movies}) => {

  const data = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=21bd9878ad3040eb47f9ae6db373c432&Language=es-MX&page=${pag}`, {})
  if (!data) {
    return <Loading />;
  }
  const movie = data.results

  return (
    <div>
      <header className="row align-items-start text-center mb-5 container mx-auto">
          {
            movie.map(movie =>(
              <div key={movie.id} className='col-6 col-md-3 mt-5 d-flex justify-content-center'>
                  <div className='tv-container'>
                        <a href=".">
                        <h2 className='fs-5'>
                            {movie.title}
                        </h2>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                        <p>{movie.overview}</p>
                    </a>
                  </div>
              </div>
            ))
          }
      </header>
      <button className='btn btn-primary' name="menos" onClick={handleClick}>Anterior</button>
      <button className='btn btn-primary' name="mas" onClick={handleClick}>Siguiente</button>
    </div>
  )
}

export default Card