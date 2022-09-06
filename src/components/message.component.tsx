import React from 'react'
import Alert from 'react-bootstrap/Alert'
import CloseButton from 'react-bootstrap/CloseButton'

interface MyState {
    isHidden: boolean
  }

export class Message extends React.Component<any, MyState> {
  constructor(props: MyState) {
    super(props)

    this.state = {isHidden: false };
  }

  onClick = () => {
    this.setState({isHidden: true})
  }
  render() {
    if (!this.state.isHidden) {
        return (
            <React.Fragment>
                <Alert variant="danger">
                      Heroku will no longer be offering free hosting as of November 28th, 2022. If you wish for this site to remain available, please <a href="https://github.com/lowtekn7/sotdl-rcg-ui/issues">notify me by posting an issue</a> on Github and if there is enough interest, I'll migrate the app somewhere so it can continue to live on. Enjoy while you can! :) <CloseButton onClick={ this.onClick } />
                </Alert>
      
            </React.Fragment>
          )
    }

    return (<React.Fragment></React.Fragment>)


  }
}
