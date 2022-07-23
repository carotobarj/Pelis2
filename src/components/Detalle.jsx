import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react';

function Detalle() {

    let token = sessionStorage.getItem('token');
    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');

    useEffect(() => {
        const endPointDetail = `https://api.themoviedb.org/3/movie/${movieID}?api_key=cb8f73c2f5f3d1c0dac0dfb1776d6977&language=en-US`;
        axios.get(endPointDetail)
            .then(response => {
                const movieData = response.data;
                console.log(movieData);
            })
            .catch(error => {
                swal(<h2>No existe ese id</h2>)
            })
    }, [movieID]);

    return (
        <>
            {!token && <Redirect to="/" />}
            <h2>Título:</h2>
            <div className="row">
                <div className="col-4">imagen</div>
                <div className="col-8">
                    <h5>Fecha de estreno:</h5>
                    <h5>Reseña:</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    <h5>Géneros:</h5>
                    <ul>
                        <li>Genero 1</li>
                        <li>Genero 2</li>
                        <li>Genero 3</li>
                        <li>Genero 4</li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Detalle