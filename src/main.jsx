import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RegisteredUsers from './pages/RegisteredUsers.jsx'
import QuoteUsers from './pages/QuoteUsers.jsx'
import Contacts from './pages/Contacts.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
    <Route path='' element={<RegisteredUsers />} />
    <Route path='/quotes' element={<QuoteUsers />} />
    <Route path='/contact-us' element={<Contacts />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
