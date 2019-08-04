import React, { Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import DocumentTitle from 'react-document-title';
import Home from './Home'
//import Background from '../assets/images/Sky.jpeg'
import '../styles/main.scss';
import Header from '../components/Header'
import Footer from '../components/Footer'
import MoltoIt from '../components/MoltoIt'
import ScrollToTop from './ScrollToTop';


class App extends Component {

  render() {
    return (
        <div className="mainContainer">
            <Header />
                <div className="Apps">
                    <ScrollToTop/>
                    <Switch>
                        <RouteWithTitle exact path="/" title="Inicio" render={(props) => <Home {...props}/>}/>
                        <RouteWithTitle exact path="/moltoit" title="MOLTO-IT" render={(props) => <MoltoIt/>}/>
                        <RouteWithTitle exact path="/moltoor" title="MOLTO-OR" render={(props) => <MoltoIt/>}/>
                        <RouteWithTitle exact path="/molto3bp" title="MOLTO-3BP" render={(props) => <MoltoIt/>}/>
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
