import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import RouteContainer from './containers/RouteContainer/RouteContainer';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
      		<RouteContainer />
      	</BrowserRouter>
    );
  }
}

export default App;
