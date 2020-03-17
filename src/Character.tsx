import React from "react";
import './Character.css';
import { CharacterDTO } from "./models/character.dto";
import { Statistic } from "./components/statistic.component";
import { Language } from "./components/language.component";

interface MyState {
  character: CharacterDTO;
}

export class Character extends React.Component<any, MyState> {
  constructor(props: any) {
    super(props);
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
    const character = this.state.character;
    const paths = [character.Paths["Novice"], character.Paths["Expert"] ?? null, character.Paths["Master"] ?? null].filter(p => p);
    const attributes = character.Attributes;
    const languages = character.Languages.map((l, i) => {
      return <span key={i}>
        {i > 0 && ", "}
        <Language language={l}/>
      </span>
    });
    let characterString = JSON.stringify(this.state.character, null, 2);
    return (
      <div className="statBlock">
        <h2 className="header">{character.Name}<span className="spacer"></span><span className="subText">Level {character.Level} {paths.join('-')}</span></h2>
        <h4 className="subHeader">Size {character.Characteristics.Size} {character.Ancestry}</h4>
        <p><Statistic Name="Perception" Score={character.Characteristics.Perception} /><br/>
        <Statistic Name="Defense" Score={character.Characteristics.Defense}/>; <Statistic Name="Health" Score={character.Characteristics.Health}/><br/>
        <Statistic Name="Strength" Score={attributes.Strength}/>, <Statistic Name="Agility" Score={attributes.Agility}/>, <Statistic Name="Intellect" Score={attributes.Intellect}/>, <Statistic Name="Will" Score={attributes.Will}/><br/>
        <Statistic Name="Speed" Score={character.Characteristics.Speed}/>
        </p>
        <h4 className="sectionHeader">Languages and Professions</h4>
        <p>{languages}</p>
        
        <h4 className="sectionHeader">Attack Options</h4>
        <h4 className="sectionHeader">Special Actions</h4>
        <h4 className="sectionHeader">Magic</h4>
        <pre>{characterString}</pre>
      </div>
    
    )
  }
}