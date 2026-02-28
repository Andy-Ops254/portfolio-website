import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './Components/App.jsx'



// Get the root element
const container = document.getElementById('root');
// Create a root
const root = createRoot(container);
// Render the application

root.render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
);
