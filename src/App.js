import React from "react";
import Homepage from "./components/homepage/homepage.components";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./components/shoppage/shoppage.component";
import "./App.css";

function HatsPage(props) {
  console.log(props);
  return <h1>Welcome to Hats page {props.match.params.hatsId}</h1>;
}
function JacketsPage() {
  return <h1>Hello i am from Jackets page</h1>;
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/shop/hats/:hatsId" component={HatsPage} />
        <Route exact path="/shop/jackets" component={JacketsPage} />
      </Switch>
    </div>
  );
}

export default App;
