import React from 'react'
import NewWindow from 'react-new-window'

interface MyProps {
  character: JSX.Element
  onUnload: Function
}

export class PrintableCharacter extends React.Component<MyProps, any> {
  render() {
    return (
      <NewWindow
        onUnload={() => this.props.onUnload()}
        features={{ left: 200, top: 200, width: 400, height: 800 }}
      >
        {this.props.character}
        <span style={{ height: '2000px', display: 'inline-block' }}></span>
      </NewWindow>
    )
  }
}
