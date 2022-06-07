import React from 'react'
import Loading from './Loading'

const SearchResults = ({movie}) => {
  if (movie.length <= 1) {
    return <h1 className='text-center text-danger'>No se encontro la pelicula :/</h1>
  } else if (!movie) {
    return <Loading />
  }
  return (
    <div>
      <header className="row align-items-start text-center mb-5 container mx-auto">
          {
            movie?.map (movie =>(
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
    </div>
  )
}

export default SearchResults