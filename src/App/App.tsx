import React, { Component } from 'react';
import Palette from '../Palette/Palette';
import seedColors from '../seedColors';
import './App.css';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { generatePalette } from '../Utilities/colorHelper';
import PaletteList from '../PaletteList/PaletteList';
import SingleColorPalette from '../SingleColorPalette/SingleColorPalette';
import { PaletteObj } from '../Types/DataModels.type';
import NewPaletteForm from '../NewPaletteForm/NewPaletteForm';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from '../Page/Page';

type Props = {};

type States = {
  palettes: PaletteObj[];
};

class App extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    if (window.localStorage.getItem('palettes')) {
      const savedPalettes: PaletteObj[] = JSON.parse(
        window.localStorage.getItem('palettes')!
      );
      this.state = { palettes: savedPalettes };
    } else {
      this.state = { palettes: seedColors };
    }
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.syncLocalStorage = this.syncLocalStorage.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  findPalette(id: string): PaletteObj {
    const paletteFound = this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
    if (paletteFound) {
      return paletteFound;
    }
    throw new Error('Palette not found!');
  }

  savePalette(newPalette: PaletteObj) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }

  deletePalette(id: string) {
    this.setState(
      (st) => ({
        palettes: st.palettes.filter((palette) => palette.id !== id)
      }),
      this.syncLocalStorage
    );
  }

  syncLocalStorage() {
    // Save palettes to local storage
    window.localStorage.setItem(
      'palettes',
      JSON.stringify(this.state.palettes)
    );
  }

  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={300}>
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/new"
                  render={(routeProps: RouteComponentProps) => (
                    <Page slideDirection="left">
                      <NewPaletteForm
                        savePalette={this.savePalette}
                        palettes={this.state.palettes}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={(routeProps: RouteComponentProps) => (
                    <Page slideDirection="left">
                      <PaletteList
                        deletePalette={this.deletePalette}
                        palettes={this.state.palettes}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={(routeProps) => (
                    <Page slideDirection="left">
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
                  path="/palette/:paletteId/:colorId"
                  render={(routeProps) => (
                    <Page slideDirection="left">
                      <SingleColorPalette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                        colorId={routeProps.match.params.colorId}
                      />
                    </Page>
                  )}
                />
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export type AppSavePaletteFunc = App['savePalette'];

export default App;
