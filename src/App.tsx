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


  }
  url: string = "http://localhost:8080/api/v1/character";
  // query server for list of ancestries, novice, expert, and master paths

  componentDidMount() {
    axios.get(this.url, {
      headers: {
        "accepts": "application/json"
      }
    })
    .then((res) => {
      this.setState({
        character: res.data
      });
    })
  }
  
  render() {
    if (!this.state.character) {
      return null;
    }

    return (
      <div className="App">
        <Character character={ this.state.character }/>
      </div>
    );
  }
}

export default App;
