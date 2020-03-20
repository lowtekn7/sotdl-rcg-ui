import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>Shadow of the Demon Lord<br/> Random Character Generator</Navbar.Brand>

      </Navbar>
    )
  }
}
