import { Switch, Route} from 'react-router-dom';

import Login from "./components/Login.jsx";
import Listado from './components/Listado.jsx';


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/listado" component={Listado} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
