import React, { Component } from 'react';
import Pallete from '../Pallete/Pallete';
import seedColors from '../seedColors';
import './App.css';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { generatePallete } from '../Utilities/colorHelper';
import PalleteList from '../PalleteList/PalleteList';
import SingleColorPallete from '../SingleColorPallete/SingleColorPallete';
import { PalleteObj } from '../Types/DataModels.type';
import NewPalleteForm from '../NewPalleteForm/NewPalleteForm';

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
        <Route exact path="/pallete/new" render={() => <NewPalleteForm />} />
        <Route
          exact
          path="/"
          render={(routeProps: RouteComponentProps) => (
            <PalleteList palletes={seedColors} {...routeProps} />
          )}
        />
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
        <Route
          path="/pallete/:palleteId/:colorId"
          render={(routeProps) => (
            <SingleColorPallete
              pallete={generatePallete(
                this.findPallete(routeProps.match.params.palleteId)
              )}
              colorId={routeProps.match.params.colorId}
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
