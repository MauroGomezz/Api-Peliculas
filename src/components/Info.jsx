import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import Loading from './Loading';
import svg from '../assets/2451996.svg'

const Info = () => {
    const {id} = useParams();
    
    const data = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=21bd9878ad3040eb47f9ae6db373c432`, {})
    if (!data) {
        return <Loading />;
    }

  return (
    <article>
        <h1 className='movie-title'>{data.original_title}</h1>
        <div className='d-flex info-container'>
            <div className='info-img'>
                <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
            </div>
            <div className='esxtra-info'>
                <p className='movie-description'>{data.overview}</p>
                <ul className='genres-container'>
                    {
                        data.genres.map(genre => (
                            <li key={genre.id} className="genres">{genre.name}</li>
                        ))
                    }
                </ul>
                <span className='date'>{data.release_date}</span>
                <p className='time'>{data.runtime} Minutes</p>
                <ul className='conpanies-container'>
                    {
                        data.production_companies.map(company => (
                            <li key={company.id} className="company">{company.name}</li>
                        ))
                    }
                </ul>
                <img src={svg} alt="star" className='star-svg w-25'/><span className='score'>{data.vote_average}/10</span>
            </div>
        </div>
    </article>
  )
}

export default Info