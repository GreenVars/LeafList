import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routing from './ui/Routing';
import './css/index.css';
import './assets/icons/css/leaflist-icons.css';
import theme from './ui/theme';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './ui/state/reducers';

global.store = createStore(reducers);

const App = () => (
  <MuiThemeProvider muiTheme={ theme }>
    <Routing />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Provider store={ global.store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
