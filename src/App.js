//Libraries
import { Switch, Route} from 'react-router-dom';

//Imports
import Login from "./components/Login.jsx";
import Listado from './components/Listado.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Styles
// import "./css/App.css"
import "./css/bootstrap.min.css"

function App() {
  return (

    <>
      <Header/>
      <div className='container mt-3'>       
         <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/listado" component={Listado} />
        </Switch>
        </div>
<Footer/>
    </>
  );
}

export default App;
