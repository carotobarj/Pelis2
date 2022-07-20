import React from 'react'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react'

function Listado() {

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token === null) {
      history.push('/');
         }
  })



  


  return (
    <div>Listado</div>
  )
}

export default Listado