import React from 'react';
import { LanguageDTO } from '../models/character.dto';
import { Z_BLOCK } from 'zlib';

interface MyState {
  language: LanguageDTO;
}

export class Language extends React.Component<any, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      language: props.language
    }
  }


  render() {
    const name = this.state.language.Name;
    const proficiences = this.state.language.Proficiencies?.map(p => {
      switch (p) {
        case "Speak":
          return "S";
        case "Read":
          return "R";
        case "Write":
          return "W";
        default:
          return "";
      }
    }).join(', ');
    const style = {
      display: "inline-block"
    }
    
    return <div style={style}><strong>{name}</strong> ({proficiences})</div>
  }
}