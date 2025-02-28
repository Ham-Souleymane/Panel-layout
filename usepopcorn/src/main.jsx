import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import RatingStar from './RatingStar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <App> */}
   <RatingStar maxRating={10} />
  </StrictMode>,
)
