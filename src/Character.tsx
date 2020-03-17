import React from "react";

interface MyState {
  character: any;
}

export class Character extends React.Component<any, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      character: props.character
    }
    console.log(props)
  }

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.character, null, 2)}</pre>
      </div>
    
    )
  }
}