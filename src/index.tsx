/** @format */

import './index.css'
import {createRoot} from 'react-dom/client'
import {StrictMode} from 'react'
import App from './app'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
const children = (
  <StrictMode>
    <App />
  </StrictMode>
)

root.render(children)
reportWebVitals(console.log)
