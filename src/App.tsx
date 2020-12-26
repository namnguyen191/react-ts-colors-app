import React from 'react';
import Pallete from './Pallete';
import seedColors from './seedColors';
import './App.css';
import { generatePallete } from './colorHelper';

function App() {
  return (
    <div>
      <Pallete pallete={generatePallete(seedColors[4])} />
    </div>
  );
}

export default App;
