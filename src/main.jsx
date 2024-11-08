import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import { FavFood, DislikedFood } from './FavFood.jsx'
import Test from './Test.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Test />
  </StrictMode>
)
