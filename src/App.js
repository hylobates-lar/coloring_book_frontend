import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Form from './components/Form';
import NavBar from './components/NavBar';
import Home from './components/Home';
import MyGallery from './components/MyGallery';
import ImageGallery from './components/ImageGallery'

class App extends React.Component {

  state = {
    user: {
      images: [],
      username: "",
      id: 0
    },
    token: ""
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {

      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
        .then(r => r.json())
        .then(this.handleResp)
    }
  }

  
  handleLoginSubmit = (userInfo) => {
    return fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResp)
  }
  
  handleRegisterSubmit = (userInfo) => {
    return fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResp)
  }

    handleResp = (resp) => {
      console.log(resp)
      if (resp.user) {
        localStorage.token = resp.token
        this.setState(resp, () => {
          this.props.history.push("/mygallery")
        })
      }
      else {
        alert(resp.error)
      }
    }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  
  addOneImage = (imageObj) => {
    let copyOfUser = {
      ...this.state.user,
      images: [...this.state.user.images, imageObj]
    }

    this.setState({
      user: copyOfUser
    })

  }

  renderProfile = (routerProps) => {
    return <MyGallery user={this.state.user} token={this.state.token}  />
  }

  render () {
    return (
      <div className="App">
        <h1>Hi from App</h1>
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/mygallery" render={ this.renderProfile } user={this.state.user}/>
          <Route path="/" exact component={ Home } />
          <Route path="/images" exact component={ ImageGallery } user={this.state.user} addOneImage={this.addOneImage}/>
        </Switch>
      </div>
    )}
}

export default withRouter(App);
