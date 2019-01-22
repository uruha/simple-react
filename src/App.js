import React, { Component, lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

const List = lazy(() => import('./List'));
class App extends Component {
  render() {
    const Loading = <div>Loading...</div>;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Simple React</h1>
        </header>
        <main>
          <Suspense fallback={Loading}>
            <List />
          </Suspense>
        </main>
      </div>
    );
  }
}

export default App;
