// == Import : npm
import React from 'react';
import Header from 'src/containers/Header';
import Pages from 'src/containers/Pages';

// == Import : local
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <Header />
    <Pages />
  </div>
);

// == Export
export default App;
