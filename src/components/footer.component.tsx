import React from 'react'
import { MDBContainer, MDBFooter } from 'mdbreact'

export class FooterPage extends React.Component {
  render() {
    return (
      <MDBFooter color="black" className="font-small">
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            Shadow of the Demon Lord is &copy; Copyright -{' '}
            <a href="https://schwalbentertainment.com/shadow-of-the-demon-lord/">
              Schwalb Entertainment
            </a>{' '}
            and used here with permission by Robert Schwalb
          </MDBContainer>
        </div>
      </MDBFooter>
    )
  }
}
