import React from 'react';
import Pallete from './Pallete';
import seedColors from './seedColors';
import './App.css';

function App() {
  return (
    <div>
      <Pallete pallete={seedColors[5]} />
    </div>
  );
}

export default App;
