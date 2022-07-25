//Libraries
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Imports
import Login from "./components/Login.jsx";
import Listado from './components/Listado.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Detalle from './components/Detalle.jsx';
import Resultados from './components/Resultados.jsx';
import Favoritos from './components/Favoritos.jsx';

// Styles
import "./css/App.css"
import "./css/bootstrap.min.css"

function App() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(()=>{
      const favsInLocalStorage = localStorage.getItem('favs');
      // console.log(favsInLocalStorage);
      if(favsInLocalStorage !== null){
const favsCollection = JSON.parse(favsInLocalStorage);
setFavoritos(favsCollection);
console.log(favsCollection);
      }
  }, [])

  const favMovies = localStorage.getItem('favs');
  let tempMoviesFavs;

  if (favMovies === null) {
    tempMoviesFavs = [];
  } else {
    tempMoviesFavs = JSON.parse(favMovies);
  }


  const addOrRemoveFromFavs = e => {
    const btnFav = e.currentTarget;
    const parent = btnFav.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    const movieData = { imgURL, title, overview, id: btnFav.dataset.movieId }
    // console.log(imgURL);
    // console.log(title);
    // console.log(overview);
    // console.log(movieData);
    // console.log(btnFav.dataset)
    let movieIsInFavs = tempMoviesFavs.find(movie => {
      return movie.id === movieData.id
    });

    if (!movieIsInFavs) {
      tempMoviesFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMoviesFavs));
      setFavoritos(tempMoviesFavs);
      console.log('se agregó la peli');
    } else {
      let moviesLeft = tempMoviesFavs.filter(movie => {
        return movie.id !== movieData.id
      });
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      setFavoritos(moviesLeft);
      console.log('se eliminó la peli');
    }




  }

  return (

    <>
      <Header favoritos={favoritos} />
      <div className='container mt-3'>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/listado" render={(props) => <Listado addOrRemoveFromFavs={addOrRemoveFromFavs} {...props} />} />
          <Route path="/detalle" component={Detalle} />
          <Route path="/resultados" render={(props) => <Resultados addOrRemoveFromFavs={addOrRemoveFromFavs} {...props} />} />
          <Route path="/favoritos" render={(props) => <Favoritos favoritos={favoritos} addOrRemoveFromFavs={addOrRemoveFromFavs} {...props} />} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
