import React from "react";
import './Character.css';
import { CharacterDTO } from "./models/character.dto";

interface MyState {
  character: CharacterDTO;
}

export class Character extends React.Component<any, MyState> {
  constructor(props: any) {
    super(props);
    console.log(`constructor props`, props)
  }

  componentDidMount() {
    this.setState({
      character: this.props.character
    });
  }

  render() {
    if (!this.state) {
      return null;
    }
    let character = JSON.stringify(this.state.character, null, 2);
    return (
      <div>
        <h2 className="header">{this.state.character.Name}</h2>
        <h4 className="subHeader">Size {this.state.character.Characteristics.Size} {this.state.character.Ancestry}</h4>
        <pre>{character}</pre>
      </div>
    
    )
  }
}