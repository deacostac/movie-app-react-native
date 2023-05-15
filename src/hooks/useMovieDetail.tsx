import { useState, useEffect } from "react"
import movieDB from "../api/MovieDB"
import { MovieFull } from '../interfaces/movieInterface';
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";

interface MovieDetails {
    isLoading: boolean,
    movieFull?: MovieFull,
    cast: Cast[]
}

export const useMovieDetail = ( movieId: number ) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: [] 
    })

    const getMovieDetail = async () => {
        const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`)
        const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`)

        const [movieDetailsResp, castResponse ] = await Promise.all([movieDetailsPromise, castPromise])

        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castResponse.data.cast
        })

    }

    useEffect(() => {
        getMovieDetail()
    }, [])
    
    return {
        ...state
    }
 
}
