import React from "react";
import Navbar from "./Components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import MainCart from "./Components/MainCart";
import "antd/dist/antd.css";
import Videos from "./Components/Videos";
import { Route, Switch } from "react-router-dom";
import Games from "./Components/Games";
import TvShows from "./Components/TvShows";
import Comics from "./Components/Comics";

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <MainCart />
        </Route>
        <Route exact path="/video">
          <Videos />
        </Route>
        <Route exact path="/comic">
          <Comics />
        </Route>
        <Route exact path="/movie">
          <MainCart />
        </Route>
        <Route exact path="/tvshow">
          <TvShows />
        </Route>
        <Route exact path="/game">
          <Games />
        </Route>
      </Switch>
    </>
  );
};

export default App;
