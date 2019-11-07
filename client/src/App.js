import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import AddStudent from "./pages/AddStudent";
import StudentsList from "./pages/StudentsList";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={AddStudent} />
          <Route exact path="/studentslist" component={StudentsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
