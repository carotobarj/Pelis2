import axios from 'axios';
import swal from '@sweetalert/with-react'
import { useHistory, Redirect } from 'react-router-dom';

function Login() {
    const history = useHistory();
    //console.log(history);

    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email === '' || password === '') {
            swal(<h2>los campos no pueden estar vacíos</h2>);
            return;
        }
        if (email !== '' && !regexEmail.test(email)) {
            swal(<h2>debes escribir una dirección de correo electrónico válida</h2>);
            return;
        }
        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swal(<h2>Credenciales inválidas</h2>);
            return;
        }

        axios
            .post('http://challenge-react.alkemy.org', { email, password })
            .then(res => {
                swal(<h2>Ok, tu información está correcta</h2>);
                console.log(res.data);
                const tokenRecibido = res.data.token;
                sessionStorage.setItem('token', tokenRecibido);
                history.push('/listado')
            })
    }

    let token = sessionStorage.getItem('token');

    return (
        <>
            {token && <Redirect to="/listado" />}
            <div className="row">
                <div>
                    <h2>Formulario de Login</h2>
                    <form onSubmit={submitHandler}>
                        <label className="form-label d-block mt-2">
                            <span>Correo Electrónico</span><br />
                            <input className="form-control" type="text" name="email" />
                        </label>
                        <br />
                        <label className="form-label d-block mt-2">
                            <span>Contraseña</span>
                            <br />
                            <input className="form-control" type="password" name="password" />
                        </label>
                        <br />
                        <button className="btn btn-success mt-2" type="submit">Login</button>
                    </form>
                </div>
            </div>

        </>

    )

}

export default Login;