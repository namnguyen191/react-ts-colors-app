import React from 'react';
import Pallete from './Pallete';
import seedColors from './seedColors';

function App() {
  return (
    <div>
      <Pallete pallete={seedColors[5]} />
    </div>
  );
}

export default App;
