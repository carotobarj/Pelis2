import React from 'react'
import swal from '@sweetalert/with-react';
import {useHistory} from 'react-router-dom'

function Buscador() {

    const history = useHistory();

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        console.log(keyword);
        if(keyword.length === 0){
            swal(<h4>Escribe una palabra clave!</h4>)
        } else if(keyword.length < 4){
            swal(<h4>debes escribir más de 4 caracteres</h4>)
        } else{
            e.currentTarget.keyword.value = '';
history.push(`/resultados?keyword=${keyword}`);
        }
    }
    return (
        <div>
            <form className="d-flex items-center" onSubmit={submitHandler}>
                <label className="form-label mb-0 mx-3">
                    <input className="form-control" type="text" name="keyword" placeholder='busca aquí...' />
                </label>
                <button className="btn btn-primary" type="submit">Buscar</button>
            </form>
        </div>
    )
}

export default Buscador