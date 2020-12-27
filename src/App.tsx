import React, { Component } from 'react';
import Pallete from './Pallete';
import seedColors from './seedColors';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { PalleteObj } from './Interfaces';
import { generatePallete } from './colorHelper';

class App extends Component {
  findPallete(id: string): PalleteObj {
    const palleteFound = seedColors.find(function (pallete) {
      return pallete.id === id;
    });
    if (palleteFound) {
      return palleteFound;
    }
    throw new Error('Pallete not found!');
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>PALLETE LIST GOES HERE!</h1>} />
        <Route
          exact
          path="/pallete/:id"
          render={(routeProps) => (
            <Pallete
              pallete={generatePallete(
                this.findPallete(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>

      // <div>
      //   <Pallete pallete={generatePallete(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
