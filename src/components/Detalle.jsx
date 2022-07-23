import { Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react';

function Detalle() {

    let token = sessionStorage.getItem('token');
    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const endPointDetail = `https://api.themoviedb.org/3/movie/${movieID}?api_key=cb8f73c2f5f3d1c0dac0dfb1776d6977&language=es-ES`;
        axios.get(endPointDetail)
            .then(response => {
                const movieData = response.data;
                setMovie(movieData);
            })
            .catch(error => {
                swal(<h2>No existe ese ID</h2>)
            })
    }, [movieID]);

    return (
        <>
            {!token && <Redirect to="/" />}
            {!movie && <p>Espera un momento...</p>}
            {movie &&
                <>
                    <h2> {movie.title}</h2>
                    <div className="row">
                        <div className="col-4"><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="movie poster" /></div>
                        <div className="col-8">
                            <h5>Fecha de estreno: {movie.release_date}</h5>

                            <h5>Reseña:</h5>
                            <p>{movie.overview}</p>
                            <h5>Rating: {movie.vote_average}</h5>
                            <h5>Géneros:</h5>
                            <ul>
                                {movie.genres.map(oneGenre => <li key={oneGenre.id}>{oneGenre.name}</li>)}
                            </ul>
                        </div>
                    </div>
                </>
            }

        </>
    )
}

export default Detalle