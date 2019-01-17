import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://qiita.com/api/v2/items?page=1&per_page=20', {
      mode: 'cors'
    })
      .then(res => res.json())
      .then(json =>
        this.setState({
          isLoaded: true,
          items: json
        })
      )
      .catch(error =>
        this.setState({
          isLoaded: true,
          error
        })
      );
  }

  render() {
    const { items, isLoaded, error } = this.state;
    let Result;
    const Loading = <li>Loading...</li>;
    const FailLoad = <li>{error ? error.message : ''}</li>;
    const ItemList = items.map(item => (
      <li key={item.id}>
        <a href={item.url}>{item.title}</a>
      </li>
    ));

    if (!isLoaded) {
      Result = Loading;
    } else {
      if (error) {
        Result = FailLoad;
      } else {
        Result = ItemList;
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Simple React</h1>
        </header>
        <main>
          <ul>{Result}</ul>
        </main>
      </div>
    );
  }
}

export default App;
