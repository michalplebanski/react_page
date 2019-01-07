import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainRoute from './containers/MainRoute/MainRoute.container';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
      		<MainRoute />
      	</BrowserRouter>
    );
  }
}

export default App;
