import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Home from '../components/Home';
import '../styles/main.scss';
import Background from '../components/Background';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Spinner } from '@chakra-ui/core';
const LazyMoltoIt = lazy(() => import('../components/MoltoIt'));
const LazyMoltoItStart = lazy(() =>
  import('../components/MoltoIt/MissionCode')
);
const LazyScrollToTop = lazy(() => import('./ScrollToTop'));
const LazyFinalResults = lazy(() =>
  import('../components/MoltoIt/FinalResults')
);
const LazyParetoFront = lazy(() => import('../components/MoltoIt/Results'));

const Loader = () => {
  return (
    <div className="loader">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
};
const App = () => {
  return (
    <div className="mainContainer">
      <Background />
      <Header />
      <React.Suspense
        fallback={
          <div className="Apps fake__div">
            <Loader />
          </div>
        }
      >
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
