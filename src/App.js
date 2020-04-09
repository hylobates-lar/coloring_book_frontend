import React, {useEffect} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import MyGallery from './components/UserGallery/MyGallery';
import MyFeaturedImage from './components/UserGallery/MyFeaturedImage';
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
          dispatch({
            type: 'CLEAR_USER'
        });
        }
      })
    }
  }, []);

  return (
    <div className="App">
      <div className="background"></div>
      <div id="header">
        <h1 id="logo">Color by Nature</h1>
        <NavBar/>
      </div>
      <div className="main-content">
      <Switch>
        <Route path="/login" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Route path="/mygallery" component={MyGallery} />
        <Route path="/" exact component={ Home } />
        <Route path="/images" exact component={ImageGallery} />
        <Route path="/coloringpage/:id" component={ColoringPage} />
        <Route path="/featuredimage/:id" component={MyFeaturedImage} />
      </Switch>
      </div>
      <div id="footer">
        created by <a href="https://github.com/hylobates-lar/coloring_book_frontend">@hylobates-lar</a> // 2020
      </div>
    </div>
  )
}

export default withRouter(App);
