import React, { Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import DocumentTitle from 'react-document-title';
import Home from './Home'
import Background from '../assets/images/Sky.jpeg'
import '../styles/main.scss';
import Header from '../components/Header'
import Footer from '../components/Footer'


class App extends Component {

  render() {
    return (
        <div className="mainContainer">
            <Header />
                <div className="Apps">
                    <Switch>
                        <RouteWithTitle exact path="/" title="Inicio" render={(props) => <Home {...props} refer="hola" />}/>
                        <Redirect to="/"/>
                    </Switch>
                </div>
            <Footer/>
        </div>
    );
  }
}

const RouteWithTitle = ({title, render, component: Comp, ...props}) => (
    <Route {...props} render={p =>
        <DocumentTitle title={"MOLTO | " + title}>
            {render ? render(p) : <Comp {...p}/>}
        </DocumentTitle>
    }/>
);


export default connect(state => ({
    admin: state.admin
}), { })(App);
