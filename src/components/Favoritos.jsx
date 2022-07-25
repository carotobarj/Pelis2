import {Link, Redirect} from 'react-router-dom'


function Favoritos(props) {
    let token = sessionStorage.getItem('token');

  return (
    <>
     {!token && <Redirect to="/" />}

    <h2>Sección de Favoritos</h2>
    <div className='row'>
   {!props.favoritos.length && <div className= "col-12 text-danger">No tienes nada en favoritos 😔 </div>}
        {
          props.favoritos.map((movie, index) => {
            return (
              <div className='col-3' key={index}>
                <div className="card my-4">
                  <img src={movie.imgURL} className="card-img-top" alt="..." />
                  <button className="favorite-btn" onClick={props.addOrRemoveFromFavs} data-movie-id={movie.id}>🖤</button>
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

export default Favoritos