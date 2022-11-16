/** @format */

import {Card, Spinner as SpinnerReactBootstrap} from 'react-bootstrap'

export default function Spinner() {
  return (
    <Card bg='dark' body className='text-center'>
      <SpinnerReactBootstrap animation='border' variant='primary' />
    </Card>
  )
}
