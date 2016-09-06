import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeafList from './ui/homepage/LeafList';
import ForestNavigator from './ui/leaf-nav/ForestNavigator';
import './css/index.css';
import theme from './ui/theme';

const App = () => (
  <MuiThemeProvider muiTheme={ theme }>
    <ForestNavigator />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
