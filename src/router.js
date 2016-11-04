import React from 'react';
import {render} from 'react-dom';

import {Router, 
        Route, 
        IndexRoute, 
        Link, 
        browserHistory } from 'react-router'

import CV from './Components/CV.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
  render() {
    return (
      <div>
        <div className="no-print container">
          <Link to="/en">Engish</Link> | <Link to="/fr">Francais</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}


export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={CV} />
      <Route path="CV" component={CV}>
        <Route path="/:lang" component={CV}/>
      </Route>
    </Route>
  </Router>
);
