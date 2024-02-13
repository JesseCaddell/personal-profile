import React from 'react'
import './App.css';
import Profile from './Profile';
import Hobbies from './Hobbies';
import Sorry from './Sorry';

function App() {
  return (
    <div className="container">
      <Profile />
      <Hobbies />
      <Sorry />
    </div>
  );
}

export default App;