import React, {useEffect} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import MyGallery from './components/UserGallery/MyGallery';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ColoringPage from './components/ImageGallery/ColoringPage';
import Logout from './components/Logout';
import Auth from './components/Auth';
import { useDispatch } from 'react-redux';


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then((resp) => {
        if (resp.user) {
          localStorage.token = resp.token
          dispatch({
            type: 'SET_USER',
            payload: resp
          });
        }
        else {
          alert(resp.error)
        }
      })
    }
  }, []);

  return (
    <div className="App">
      <h1>Hi from App</h1>
      <NavBar/>
      <Switch>
        <Route path="/login" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Route path="/mygallery" component={MyGallery} />
        <Route path="/" exact component={ Home } />
        <Route path="/images" exact component={ImageGallery} />
        <Route path="/coloringpage/:id" component={ColoringPage} />
      </Switch>
    </div>
  )
}

export default withRouter(App);
