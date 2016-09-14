import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routing from './Routing';
import theme from './theme';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './ui/state/reducers';

import '../assets/icons/css/leaflist-icons.css';
import '../css/index.css';

global.store = createStore(reducers);

const App = () => (
  <Provider store={ global.store }>
    <MuiThemeProvider muiTheme={ theme }>
      <Routing />
    </MuiThemeProvider>
  </Provider>
);

export default App;
