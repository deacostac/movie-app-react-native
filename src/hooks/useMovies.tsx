import { useState, useEffect } from 'react';
import movieDB from '../api/MovieDB'
import { MoviesResponse, Movie } from '../interfaces/movieInterface'

interface MoviesState {
    nowPlaying: Movie[]
    popular: Movie[]
    topRated: Movie[]
    upcoming: Movie[]
}

export const useMovies = () => {

    const [ isLoading, setIsLoading ] = useState<Boolean>(true)
    const [ moviesState, setMoviesState ] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    })

    const getMovies = async () => {
        const nowPlayingPromise = movieDB.get<MoviesResponse>('/now_playing')
        const popularPromise = movieDB.get<MoviesResponse>('/popular')
        const topRatedPromise = movieDB.get<MoviesResponse>('/top_rated')
        const upcomingPromise = movieDB.get<MoviesResponse>('/upcoming')

        const resp = await Promise.all([
            nowPlayingPromise, 
            popularPromise, 
            topRatedPromise, 
            upcomingPromise
        ])

        setMoviesState({
            nowPlaying: resp[0].data.results,
            popular: resp[1].data.results,
            topRated: resp[2].data.results,
            upcoming: resp[3].data.results
        })

        setIsLoading(false)
    }

    useEffect(()=>{
        //get now playing movies
        getMovies()
    })

    return {
        ...moviesState,
        isLoading
    }
}
