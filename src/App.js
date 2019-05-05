import React from "react";
import NavbarBox from "./components/Navigation/NavbarBox";
import Home from "./components/Layout/Home";
import Dashboard from "./components/Layout/Dashboard";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import CreatePost from "./components/Projects/CreatePost";
import PostDetails from "./components/Projects/PostDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarBox />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/new-post" component={CreatePost} />
          <Route path="/posts/:id" component={PostDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
