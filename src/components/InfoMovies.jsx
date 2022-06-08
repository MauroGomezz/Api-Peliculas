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
    <article className='info-container-all'>
        <h1 className='movie-title'>{data.original_title} ({data.release_date.slice(0, -6)})</h1>
        <div className='d-flex info-container'>
            <div className='info-img'>
                <img className='' src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
            </div>
            <div className='extra-info container'>
                <p className='movie-description'>{data.overview}</p>
                <ul className='genres-container'>
                    {
                        data.genres.map(genre => (
                            <li key={genre.id} className="genres">{genre.name}</li>
                        ))
                    }
                </ul>
                <p className='time'><span>Runtime:</span> {(data.runtime / 60).toFixed(2)} hrs</p>
                <div className='conpanies-container'>
                    <span>Companies:</span>
                    <ul className='conpanies-list'>
                        {
                            data.production_companies.map(company => (
                                <li key={company.id} className="conpany">{company.name}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <img src={svg} alt="star" className='star-svg'/>
                    <span className='score'>{data.vote_average}/10</span>
                </div>
            </div>
        </div>
    </article>
  )
}

export default Info