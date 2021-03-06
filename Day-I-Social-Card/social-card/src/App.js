import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Icons from './components/FooterComponents/Footer'
const App = () => {
  return (
    <div className= "container">
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
