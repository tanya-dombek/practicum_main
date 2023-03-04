import React from 'react';
import './index.css'
import AppHeader from './components/header/app-header-form';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients-form'
import BurgerConstructor from './components/burger-constructor/burger-constructor-form';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <div className='constructorGroupe'>
        <BurgerIngredients/>
        <BurgerConstructor/>
      </div>
     

    </div>
  );
}

export default App;
