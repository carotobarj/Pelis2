function Login() {
    
    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        if(email === '' || password === ''){
         console.log('los campos no pueden estar vacíos');   
        }

    }
    return (
        <>
            <h2>Formulario de Login</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Correo Electrónico</span>
                    <br/>
                    <input type="email" name="email" />
                </label>
                <br/>
                <label>
                    <span>Contraseña</span>
                    <br/>
                    <input type="password" name="password" />
                </label>
                <br/>
                <button type="submit">Login</button>
            </form>
        </>

    )

}

export default Login;