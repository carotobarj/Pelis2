import { Link, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react';


function Listado() {
  let token = sessionStorage.getItem('token');

  const [moviesList, setMoviesList] = useState([])

  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=cb8f73c2f5f3d1c0dac0dfb1776d6977&language=en-US&page=1';
    axios.get(endPoint)
      .then(response => {
        const apiData = response.data.results;
        setMoviesList(apiData);
      })
      .catch(error =>{
       swal(<h2>Perdón por el inconveniente, intenta mas tarde</h2>)
      })
  }, []);
  console.log(moviesList);

  return (
    <>
      {!token && <Redirect to="/" />}
      <div className='row'>
        {/* Estructura Base */}
        {
          moviesList.map((movie, index) => {
            return (
              <div className='col-3' key={index}>
                <div className="card my-4">
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title.substring(0,30)}...</h5>
                    <p className="card-text">{movie.overview.substring(0,100)}...</p>
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

export default Listado