import React from 'react'

interface MyState {
  language: [string, string[]]
}

export class Language extends React.Component<any, MyState> {
  render() {
    const [name, proficiencies] = this.props.language

    return (
      <React.Fragment>
        <strong>{name}</strong> ({proficiencies.join(', ')})
      </React.Fragment>
    )
  }
}
