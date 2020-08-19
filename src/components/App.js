import React, { useState, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Home from '../components/Home';
//import Background from '../assets/images/Sky.jpeg'
import '../styles/main.scss';

import Background from '../components/Background';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LazyMoltoIt = lazy(() => import('../components/MoltoIt'));
const LazyMoltoItStart = lazy(() =>
  import('../components/MoltoIt/MissionCode')
);
const LazyScrollToTop = lazy(() => import('./ScrollToTop'));
const LazyFinalResults = lazy(() =>
  import('../components/MoltoIt/FinalResults')
);
const LazyParetoFront = lazy(() => import('../components/MoltoIt/Results'));

const App = () => {
  return (
    <div className="mainContainer">
      <Header />
      <Background />
      <React.Suspense fallback={<span>...Loading</span>}>
        <div className="Apps">
          <LazyScrollToTop />
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
              render={(props) => <LazyMoltoItStart />}
            />
            <RouteWithTitle
              exact
              path="/moltoit/new"
              title="MOLTO-IT"
              render={(props) => <LazyMoltoIt />}
            />
            <RouteWithTitle
              exact
              path="/moltoor"
              title="MOLTO-OR"
              render={(props) => <LazyMoltoItStart />}
            />

            <RouteWithTitle
              exact
              path="/molto3bp"
              title="MOLTO-3BP"
              render={(props) => <LazyMoltoItStart />}
            />
            <RouteWithTitle
              exact
              path="/moltoit/results/:id"
              title="Results"
              render={(props) => <LazyParetoFront />}
            />
            <RouteWithTitle
              exact
              path="/moltoit/finalresults"
              title="Final Results"
              render={(props) => <LazyFinalResults />}
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </React.Suspense>
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
