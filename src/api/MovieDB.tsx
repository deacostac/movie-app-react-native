import axios from 'axios'

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '68a562f3eaa879f923aac9d202daa7cd',
        language: 'es-ES'
    }
})

export default movieDB