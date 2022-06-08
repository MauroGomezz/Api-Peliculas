import React from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import Loading from './Loading';

const Start = () => {

  const data = useFetch("https://api.themoviedb.org/3/movie/popular?api_key=21bd9878ad3040eb47f9ae6db373c432&Language=es-MX&page=1", {})
  if (!data) {
    return <Loading />;
  }
  const movie = data.results.slice(0, 5)

  return (
    <main>
      <article className='slider-container'>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner position-relative">
            {
              movie.map((movie, index) => {
                if (index === 0) {
                  return(
                    <div key={movie.id} className="carousel-item active" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`, backgroundRepeat: "no-repeat"}}>
                      <div className='position-absolute info-movie-container'>
                        <Link to={`/Peliculas/${movie.id}`}>
                          <h1 className='title-movie'>{movie.title}</h1>
                        </Link>
                        <p className='movie-desciption'>{movie.overview}</p>
                        <span className='movie-date'>{movie.release_date}</span>
                      </div>
                    </div>
                  )
                } else {
                  return (
                    <div key={movie.id} className="carousel-item" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`, backgroundRepeat: "no-repeat"}}> 
                      <div className='position-absolute info-movie-container'>
                        <Link to={`/Peliculas/${movie.id}`}>
                          <h1 className='title-movie'>{movie.title}</h1>
                        </Link>
                        <p className='movie-desciption'>{movie.overview}</p>
                        <span className='movie-date'>{movie.release_date}</span>
                      </div>
                    </div>
                  )
                }
                }
              )
            }
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </article>
    </main>
  )
}

export default Start