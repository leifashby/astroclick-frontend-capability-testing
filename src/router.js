import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";

import { App, NotFound } from "./components";
import { Home, Test1, Test2, Test3 } from "./containers";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/test1" component={Test1} />
      <Route path="/test2" component={Test2} />
      <Route path="/test3" component={Test3} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
