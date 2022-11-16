/** @format */

import Header from './header'
import Main from './main'
import {Suspense} from 'react'
import Spinner from './Spinner'
import {Routes} from 'react-router-dom'

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Spinner />}>
          <Routes></Routes>
        </Suspense>
      </Main>
    </>
  )
}
