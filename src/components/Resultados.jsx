import { useEffect, useState } from 'react';
import swal from '@sweetalert/with-react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function Resultados() {
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        const endPointResults = `https://api.themoviedb.org/3/search/movie?api_key=cb8f73c2f5f3d1c0dac0dfb1776d6977&language=es-&query=${keyword}`;
        axios.get(endPointResults)
            .then(response => {
                const resultsData = response.data.results;
                setResultados(resultsData);
            })
            .catch(error => {
                swal(<h2>No hay resultados</h2>)
            })
    }, [keyword]);

    return (
        <>
            <h2> Buscaste <em>{keyword}</em></h2>
            <div className='row'>
                {
                    resultados.map((movie, index) => {
                        return (
                            <div className='col-3' key={index}>
                                <div className="card my-4">
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title.substring(0, 30)}...</h5>
                                        <Link to={`/detalle?movieID=${movie.id}`} className="btn btn-primary">View Detail</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Resultados;