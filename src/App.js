import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style/style.css"
import routes from "./routes"
import {Switch,Route} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <Navbar/>
          <div className="routes">
              <Switch>
              {
                routes.map(item => {
                  return <Route
                      key={item.id}
                      path={item.path}
                      component={item.component}
                      exact
                  />
                })
              }
              </Switch>
          </div>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
