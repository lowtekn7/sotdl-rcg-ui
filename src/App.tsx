import React, { FormEvent, ChangeEvent } from 'react'
import './App.css'
import axios from 'axios'
import { Character } from './components/character.component'
import { CharacterDTO } from './models/character.dto'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'
import { NavigationBar } from './components/navbar.component'

interface MyState {
  character?: CharacterDTO
  errorText?: string
  level?: string
  ancestry?: string
  novicePath?: string
  expertPath?: string
  masterPath?: string
  ancestries?: string[]
  novicePaths?: string[]
  expertPaths?: string[]
  masterPaths?: string[]
}

interface MyProps {
  config: Record<string, string>
}

class App extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props)

    this.state = {
      level: 'any',
      ancestry: 'any',
      novicePath: 'any',
      expertPath: 'any',
      masterPath: 'any',
    }

    if (process.env.REACT_APP_API_ENDPOINT) {
      this.apiEndpoint = process.env.REACT_APP_API_ENDPOINT
      this.configureEndpoints()
    } else {
      throw new Error('API_ENDPOINT not configured')
    }
  }

  configureEndpoints() {
    this.characterUrl = `${this.apiEndpoint}/characters`
    this.ancestryUrl = `${this.apiEndpoint}/ancestries`
    this.pathsUrl = `${this.apiEndpoint}/paths`
  }

  apiEndpoint: string
  characterUrl: string = ''
  ancestryUrl: string = ''
  pathsUrl: string = ''

  handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    this.getNewCharacter()
  }

  getNewCharacter = () => {
    const params = `/${this.state.level}/${this.state.ancestry}/${this.state.novicePath}/${this.state.expertPath}/${this.state.masterPath}`
    axios
      .get(this.characterUrl + params, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then(res => {
        this.setState({
          character: res.data,
          errorText: undefined,
        })
      })
      .catch(err => {
        if (err.response) {
          this.setState({
            errorText: err.response.data,
          })
        }
      })
  }

  getAncestryList() {
    axios
      .get(this.ancestryUrl, {
        headers: { Accept: 'application/json' },
      })
      .then(res => {
        this.setState({
          ancestries: res.data,
        })
      })
  }

  getPaths() {
    axios
      .get(this.pathsUrl, {
        headers: { Accept: 'application/json' },
      })
      .then(res => {
        const allPaths: Record<string, string[]> = res.data

        this.setState({
          novicePaths: allPaths.Novice,
          expertPaths: allPaths.Expert,
          masterPaths: [...allPaths.Master, ...allPaths.Expert],
        })
      })
  }

  componentDidMount() {
    this.getAncestryList()
    this.getPaths()
  }

  updateLevel = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      level: event.target.value,
    })
  }

  updateAncestry = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      ancestry: event.target.value,
    })
  }

  updateNovicePath = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      novicePath: event.target.value,
    })
  }

  updateExpertPath = (event: ChangeEvent<HTMLSelectElement>) => {
    const state: MyState = {}
    state.expertPath = event.target.value

    this.setState(state)
  }

  updateMasterPath = (event: ChangeEvent<HTMLSelectElement>) => {
    const state: MyState = {}
    state.masterPath = event.target.value
    this.setState(state)
  }

  render() {
    if (!this.state) {
      return null
    }
    let character = <Character character={this.state.character} />
    let errorText = this.state.errorText

    return (
      <div>
        <NavigationBar></NavigationBar>
        <Container fluid>
          <Row>
            <Col>
              {(() => {
                if (errorText) {
                  return <Alert variant="danger">{errorText}</Alert>
                }

                return null
              })()}
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit} style={{ marginTop: '10px' }}>
                <Row>
                  <Col xs="4" sm="3" md="2">
                    <Form.Group>
                      <Form.Label>Level</Form.Label>
                      <Form.Control
                        as="select"
                        value={this.state.level}
                        onChange={this.updateLevel}
                      >
                        <option value="any">Any</option>
                        {Array.from(Array(11).keys()).map(i => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs="8" sm="9" md="10">
                    <Form.Group>
                      <Form.Label>Ancestry</Form.Label>
                      <Form.Control
                        as="select"
                        value={this.state.ancestry}
                        onChange={this.updateAncestry}
                      >
                        <option value="any">Any</option>
                        {this.state.ancestries?.map((ancestry, i) => (
                          <option key={i} value={ancestry}>
                            {ancestry}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="4" md="4">
                    <Form.Group>
                      <Form.Label>Novice Path</Form.Label>
                      <Form.Control
                        as="select"
                        value={this.state.novicePath}
                        onChange={this.updateNovicePath}
                      >
                        <option value="any">Any</option>
                        {this.state.novicePaths?.map((path, i) => (
                          <option key={i} value={path}>
                            {path}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs="12" sm="4" md="4">
                    <Form.Group>
                      <Form.Label>Expert Path</Form.Label>
                      <Form.Control
                        as="select"
                        value={this.state.expertPath}
                        onChange={this.updateExpertPath}
                      >
                        <option value="any">Any</option>
                        {this.state.expertPaths?.map((path, i) => (
                          <option key={i} value={path}>
                            {path}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs="12" sm="4" md="4">
                    <Form.Group>
                      <Form.Label>Master Path</Form.Label>
                      <Form.Control
                        as="select"
                        value={this.state.masterPath}
                        onChange={this.updateMasterPath}
                      >
                        <option value="any">Any</option>
                        {this.state.masterPaths?.map((path, i) => (
                          <option key={i} value={path}>
                            {path}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-block"
                    >
                      Get New Character
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>{character}</Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
