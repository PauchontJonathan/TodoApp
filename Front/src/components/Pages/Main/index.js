import React from 'react';
import { NavLink } from 'react-router-dom';

import './main.scss';

const Main = () => {
  return (
    <div className="main">
      <h1 className="main-title">TodoList</h1>
      <p className="main-description">Bienvenue sur cette application, TODOLIST a pour but de vous donner l'occasion de créer des listes de tâches. Vous aurez donc la possibilité de créer, modifier ou supprimer autant de listes que vous le souhaitez </p>
      <NavLink to="/signup" className="main-signup">S'inscrire</NavLink>
    </div>
  )
}

export default Main;