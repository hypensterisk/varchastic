/** @format */

import './index.css'
import {createRoot} from 'react-dom/client'
import {StrictMode} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './app'
import reportWebVitals from './reportWebVitals'
import {register} from './serviceWorkerRegistration'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
const children = (
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

root.render(children)
reportWebVitals(console.log)
register()
