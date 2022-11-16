/** @format */

import {Container} from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className='mt-auto bg-dark py-2'>
      <Container fluid>
        <div className='text-light text-center'>
          Made With ❤ By{' '}
          <a
            className='text-decoration-none link-info'
            href='https://github.com/hypensterisk'>
            Hypensterisk
          </a>
        </div>
      </Container>
    </footer>
  )
}
