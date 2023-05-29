import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import App from './App.jsx'
import Decors from './Components/DecorPage/Decors.jsx'
import LoginPage from './Components/LoginPage/Login.jsx'
import SignUp from './Components/SignUpPage/SignUp.jsx'
import OurServices from './Components/OurServices/OurServices.jsx'
import AboutUs from './Components/AbouUs/AboutUs.jsx'
import DIY from './Components/DIY/diy.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  }, 
  {
    path: "/decorlar",
    element: <Decors/>
  },
  {
    path: "/daxilol",
    element: <LoginPage/>
  },
  {
    path: "/üzvol",
    element: <SignUp/>
  }, 
  {
    path: "/xidmətlərimiz",
    element: <OurServices/>
  },
  {
    path: "/haqqımızda",
    element: <AboutUs/>
  },
  {
    path: "/özündizaynet",
    element: <DIY/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
