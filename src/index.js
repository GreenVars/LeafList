import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeafList from './ui/homepage/LeafList';
import './css/index.css';

const App = () => (
  <MuiThemeProvider>
    <LeafList />
  </MuiThemeProvider>  
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
