import {  Link, Redirect } from 'react-router-dom';


function Listado() {
  let token = localStorage.getItem('token');

  return (
    <>
      {!token && <Redirect to="/" />}
      <div className='row'>
        {/* Estructura Base */}
        <div className='col-3'>
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Movie title</h5>
              <p className="card-text">Summary Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <Link to="/" className="btn btn-primary">View Detail</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Listado