import React from 'react';
import Pallete from './Pallete';
import seedColors from './seedColors';

function App() {
  return (
    <div>
      <Pallete pallete={seedColors[4]}/>
    </div>
  );
}

export default App;
