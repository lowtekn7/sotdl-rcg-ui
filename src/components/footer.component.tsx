import React from 'react'
import { MDBContainer, MDBFooter, MDBRow } from 'mdbreact'

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
            <br />
            <a
              target="_blank"
              href="https://github.com/lowtekn7/sotdl-rcg-ui/issues"
            >
              Report a bug
            </a>
            <br />
            <a target="_blank" href="https://github.com/lowtekn7/sotdl-rcg-ui">
              View the Readme on Github
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    )
  }
}
