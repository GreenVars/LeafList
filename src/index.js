import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeafList from './ui/homepage/LeafList';
import './css/index.css';
import theme from './ui/theme';

const App = () => (
  <MuiThemeProvider muiTheme={theme}>
    <LeafList />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
