import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import GoogleApiWrapper from "./googlemap";
import NewWantPage from "./NewWantPage";
import NewHelpPage from "./NewHelpPage";
import NeedHelpOverview from "./NeedHelpOverview";
import WantToHelpOverview from "./WantToHelpOverview";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/googlemap" component={GoogleApiWrapper} />
      <Route path="/NewWantPage" component={NewWantPage} />
      <Route path="/NewHelpPage" component={NewHelpPage} />
      <Route path="/NeedHelpOverview" component={NeedHelpOverview} />
      <Route path="/WantToHelpOverview" component={WantToHelpOverview} />
    </Switch>
  </main>
);

export default Main;
