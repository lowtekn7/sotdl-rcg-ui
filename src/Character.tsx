import React from "react";
import './Character.css';
import { CharacterDTO, TalentDTO, SpellDTO } from "./models/character.dto";
import { Statistic } from "./components/statistic.component";
import { Language } from "./components/language.component";

interface MyState {
  character: CharacterDTO;
}

export class Character extends React.Component<any, MyState> {
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
    const perceptionTalents: (string | undefined)[] = Object.keys(character.Talents).map((key: string) => {
      let found: TalentDTO | undefined = character.Talents[key].find((t: TalentDTO) => t.IsPerceptionRelated);
      if (found) {
        return found.Name;
      }

      return "";
    }).filter(name => name);
    const languages = Object.keys(character.Languages).map((l, i) => {
      return <span key={i}>
        {i > 0 && ", "}
        <Language language={[l, character.Languages[l]]}/>
      </span>
    });
    const professions = Object.keys(character.Professions).map((key: string, index: number) => {
      return (
        <React.Fragment key={index}>
          {index > 0 && <br/>} <strong>{key}</strong> {character.Professions[key].join(', ')}
        </React.Fragment>
      )
    });
    const background = Object.keys(character.Description).map((key, index) => {
      return (
        <React.Fragment key={index}>
          {index > 0 && <br/>} <strong>{key}</strong> {character.Description[key].join(', ')}
        </React.Fragment>
      )
    });

    const talents = Object.keys(character.Talents).map((key, index) => {
      return (
        <React.Fragment key={index}>
          {index > 0 && <br/>} <strong>{key}</strong> {character.Talents[key].map(t => t.Name).join(', ')}
        </React.Fragment>
      )
    });

    const spells = character.Traditions.map((tradition, index) => {
      const spellList = character.Spells.filter(s => s.Tradition === tradition)
        .sort((f: SpellDTO, s: SpellDTO) => s?.Casts - f?.Casts);
      return (
        <React.Fragment key={index}>
          <span><strong>{tradition}</strong> <span style={{textTransform:"lowercase"}}>{spellList.map((spell, i) => {
            return (
              `${spell.Name} (${spell.Casts})`
            )
          }).join(', ')}</span></span>
          <br/>
        </React.Fragment>
      )
    })
    let characterString = JSON.stringify(this.state.character, null, 2);
    return (
      <div className="statBlock">
        <h2 className="header">{character.Name}<span className="spacer"></span><span className="subText">Level {character.Level} {paths.join('-')}</span></h2>
        <h4 className="subHeader">Size {character.Characteristics.Size} {character.Ancestry}</h4>
        <p><Statistic Name="Perception" Score={character.Characteristics.Perception} />{
          (() => {
            if (perceptionTalents.length > 0) {
              return `, ${perceptionTalents.join(', ')}`;
            }
          })()
        }<br/>
        <Statistic Name="Defense" Score={character.Characteristics.Defense}/>; <Statistic Name="Health" Score={character.Characteristics.Health}/><br/>
        <Statistic Name="Strength" Score={attributes.Strength}/>, <Statistic Name="Agility" Score={attributes.Agility}/>, <Statistic Name="Intellect" Score={attributes.Intellect}/>, <Statistic Name="Will" Score={attributes.Will}/><br/>
        <Statistic Name="Corruption" Score={character.Characteristics.Corruption}/>, <Statistic Name="Insanity" Score={character.Characteristics.Insanity}/><br/>
        <Statistic Name="Speed" Score={character.Characteristics.Speed}/>
        </p>
        <h4 className="sectionHeader">Languages and Professions</h4>
        <p>{languages}</p>
        <p>{professions}</p>
        
        <h4 className="sectionHeader">Attack Options</h4>
        <p>
          {(() => {
            let weapons = character.Equipment.filter(e => e.Type === "Weapon");
            if (weapons.length > 0) {
              return weapons.map((w, i) => {
                return (
                  <span key={i}>
                    <strong>{w.Name}</strong> ({w.WeaponType === "Ranged" ? "ranged" : "melee"}) {w.AttackBonus} <span style={{fontStyle: "italic"}}>{w.Properties.join(', ')}</span><br/>
                  </span>
                )
              });
            }
          })()}
        </p>
        <h4 className="sectionHeader">Talents</h4>
        <p>{talents}</p>
        
        {(() => {
          if (character.Traditions.length > 0) {
            return (
              <React.Fragment>
                <h4 className="sectionHeader">Magic</h4>
                <p>
                  <Statistic Name="Power" Score={character.Characteristics.Power}/><br/>
                  {spells}
                  {(() => {
                    let grimoire = character.Equipment.find(e => e.Name === "Grimoire");
                    if (grimoire) {
                      return (
                        <React.Fragment>
                          <strong>Grimoire</strong> {grimoire.Spells.sort((f, s) => s.Casts - f.Casts)
                            .map((s, i) => {
                              return (
                                <React.Fragment key={i}>
                                  {i > 0 && ', '}
                                  <span style={{textTransform: "lowercase"}}>{s.Name} ({s.Casts})</span>
                                </React.Fragment>
                              )
                            })}
                        </React.Fragment>
                      )
                    }
                  })()}
                </p>
              </React.Fragment>
            )
          }
        })()}
        <h4 className="sectionHeader">Equipment</h4>
        <p>
          {character.Equipment.filter(e => e.Type !== "Weapon").map((e, i) => {
            return <span key={i}>{i > 0 && ', '}{e.Name}{e.Quantity > 1 && ` (${e.Quantity})`}</span>
          })}
        </p>
        <h4 className="sectionHeader">Background</h4>
        <p>{background}</p>
        <pre>{characterString}</pre>
      </div>
    
    )
  }
}