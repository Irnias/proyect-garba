import React from 'react';
import FullList from '../src/components/FullList/FullList';
import Producto from '../src/components/Producto/Producto';
import NotFound from '../src/components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import '../src/styles/App.css';

class App extends React.Component {

  render(){
    return (
      <div>
      <Router>
          <div className="titulo">
              <Link to="">
                <img src="https://dj4i04i24axgu.cloudfront.net/normi/statics/0.2.78/garbarino/images/logo-garbarino.svg" alt="logo"/>
              </Link>
          </div>
        <Switch>
          <Route exact path="/" component={FullList} />
          <Route path="/productos/:id" component={Producto} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}
}

export default App;
