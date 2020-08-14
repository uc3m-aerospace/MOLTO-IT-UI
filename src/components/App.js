import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Home from './Home';
//import Background from '../assets/images/Sky.jpeg'
import '../styles/main.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MoltoItStart from '../components/MoltoIt/MissionCode';
import MoltoIt from '../components/MoltoIt';
import ParetoFront from '../components/MoltoIt/Results';
import ScrollToTop from './ScrollToTop';
import Background from '../components/Background';
import FinalResults from '../components/MoltoIt/FinalResults';

const App = () => {
  return (
    <div className="mainContainer">
      <Background />
      <Header />
      <div className="Apps">
        <ScrollToTop />
        <Switch>
          <RouteWithTitle
            exact
            path="/"
            title="Inicio"
            render={(props) => <Home {...props} />}
          />
          <RouteWithTitle
            exact
            path="/moltoit"
            title="MOLTO-IT"
            render={(props) => <MoltoItStart />}
          />
          <RouteWithTitle
            exact
            path="/moltoit/new"
            title="MOLTO-IT"
            render={(props) => <MoltoIt />}
          />
          <RouteWithTitle
            exact
            path="/moltoor"
            title="MOLTO-OR"
            render={(props) => <MoltoItStart />}
          />
          <RouteWithTitle
            exact
            path="/molto3bp"
            title="MOLTO-3BP"
            render={(props) => <MoltoItStart />}
          />
          <RouteWithTitle
            exact
            path="/molto3bp"
            title="MOLTO-3BP"
            render={(props) => <MoltoItStart />}
          />
          <RouteWithTitle
            exact
            path="/moltoit/results/:id"
            title="Results"
            render={(props) => <ParetoFront />}
          />
          <RouteWithTitle
            exact
            path="/moltoit/finalresults"
            title="Results"
            render={(props) => <FinalResults />}
          />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

const RouteWithTitle = ({ title, render, component: Comp, ...props }) => (
  <Route
    {...props}
    render={(p) => (
      <DocumentTitle title={'MOLTO | ' + title}>
        {render ? render(p) : <Comp {...p} />}
      </DocumentTitle>
    )}
  />
);

export default App;
