// == Import : npm
import React from 'react';
import Header from 'src/components/Header';
import Pages from 'src/components/Pages';

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
