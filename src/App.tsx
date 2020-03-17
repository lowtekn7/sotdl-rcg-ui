import React from 'react';
import './App.css';
import axios from 'axios';
import { Character } from './Character';

interface IMyState {
  character: any;
}

class App extends React.Component<any, IMyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      character: null
    }

    axios.get(this.url, {
        headers: {
          "accepts": "application/json"
        }
      })
      .then((res) => {
        this.setState({
          character: res.data
        })
      })
  }
  url: string = "http://localhost:8080/api/v1/character";
  // query server for list of ancestries, novice, expert, and master paths
  
  render() {
    return (
      <div className="App">
        <Character character={this.state.character}></Character>
      </div>
    );
  }
}

export default App;
