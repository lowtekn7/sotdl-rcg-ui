import React from "react";
import './Character.css';
import { CharacterDTO, TalentDTO, SpellDTO } from "./models/character.dto";
import { Statistic } from "./components/statistic.component";
import { Language } from "./components/language.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface MyState {
  character: CharacterDTO;
}

export class Character extends React.Component<any, MyState> {

  render() {
    if (!this.props.character) {
      return null;
    }
    const character: CharacterDTO = this.props.character;
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
          {index > 0 && <br/>} <strong>{key}</strong> {character.Professions[key]
            .map(p => {
              if (p[p.length -1] === '.') {
                return p.slice(0, -1);
              }
              return p;
            })
            .join(', ')}
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
        .sort((f: SpellDTO, s: SpellDTO) => f?.Rank - s?.Rank);
      return (
        <React.Fragment key={index}>
          <span><strong>{tradition}</strong> <span style={{textTransform:"lowercase"}}>{spellList.map((spell, i) => {
            return (
              `${spell.Name} (${spell.Rank})`
            )
          }).join(', ')}</span></span>
          <br/>
        </React.Fragment>
      )
    })
    
    return (
      <Container>
        <Row className="header">
          <Col xs="12" md="6">
            <h1>{character.Name}</h1>
          </Col>
          <Col xs="12" md="6">
            Level {character.Level} {paths.join('-')}
          </Col>
        </Row>
        <Row className="subHeader">
          <Col>
            <h6>Size {character.Characteristics.Size} {character.Ancestry}</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <Statistic Name="Perception" Score={character.Characteristics.Perception} />
            {
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
          </Col>

        </Row>
        <Row className="sectionHeader"><h4>Personality</h4></Row>
        <Row>
          <Col>
          {(() => {
            if (character.Hatred.length > 0) {
              return (
                <React.Fragment>
                  <strong>Hatred</strong> {character.Hatred.join(', ')}
                </React.Fragment>
                
              )
            }
          })()}
          </Col>
        </Row>

        <Row className="sectionHeader"><h4>Languages and Professions</h4></Row>
        <Row>
          <Col>
            {languages}
          </Col>
        </Row>
        <Row>
          <Col>
            {professions}
          </Col>
        </Row>
        <Row className="sectionHeader"><h4>Attack Options</h4></Row>
        <Row>
          <Col>
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
          </Col>
        </Row>
        <Row className="sectionHeader"><h4>Talents</h4></Row>
        <Row>
          <Col>
          {talents}
          </Col>
        </Row>
        
        {(() => {
          if (character.Traditions.length > 0) {
            return (
              <React.Fragment>
                <Row className="sectionHeader"><h4>Magic</h4></Row>
                <Row>
                  <Col>
                  <Statistic Name="Power" Score={character.Characteristics.Power}/><br/>
                  {spells}
                  {(() => {
                    let grimoire = character.Equipment.find(e => e.Name === "Grimoire");
                    if (grimoire) {
                      return (
                        <React.Fragment>
                          <strong>Grimoire</strong> {grimoire.Spells.sort((f, s) => f.Rank - s.Rank)
                            .map((s, i) => {
                              return (
                                <React.Fragment key={i}>
                                  {i > 0 && ', '}
                                  <span style={{textTransform: "lowercase"}}>{s.Name} ({s.Rank})</span>
                                </React.Fragment>
                              )
                            })}
                        </React.Fragment>
                      )
                    }
                  })()}
                  </Col>
                </Row>
              </React.Fragment>
            )
          }
        })()}
        <Row className="sectionHeader"><h4>Equipment</h4></Row>
        <Row>
          <Col>
            <strong>Lifestyle</strong> {character.Lifestyle}<br/>
            <strong>Coins</strong> {character.Coins}<br/>
            {character.Equipment.filter(e => e.Type !== "Weapon")
              .map(e => { // get rid of the period since we're going to have comma separated
                if (e.Name[e.Name.length - 1] === '.') {
                  e.Name = e.Name.slice(0, -1);
                }

                return e;
              })
              .map((e, i) => {
              return <span key={i}>{i > 0 && ', '}{e.Name}{e.Quantity > 1 && ` (${e.Quantity})`}</span>
            })}
          </Col>
        </Row>

        <Row className="sectionHeader"><h4>Background</h4></Row>
        <Row>
          <Col>
          
          {(() => {
            if (character.MarksOfDarkness.length > 0) {
              return (
                <React.Fragment>
                  <strong>Marks of Darkness</strong><br/>
                    {character.MarksOfDarkness.map((mark, i) => <span key={i}>- {mark}<br/></span>)}
                </React.Fragment>
              )
            }
          })()}
          {background}
          </Col>
        </Row>
      </Container>
    
    )
  }
}