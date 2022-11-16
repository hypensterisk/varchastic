/** @format */

import {Navbar, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Nav from './Nav'
import Form from './Form'

export default function Header() {
  return (
    <header>
      <Navbar
        bg='dark'
        collapseOnSelect
        expand='lg'
        sticky='top'
        variant='dark'>
        <Container fluid>
          <Navbar.Brand as={Link} to={process.env.PUBLIC_URL}>
            <img
              alt=''
              src={`${process.env.PUBLIC_URL}/logo512.png`}
              width={32}
              height={32}
              className='d-inline-block align-top'
            />{' '}
            Varchastic
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav />
            <Form />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
