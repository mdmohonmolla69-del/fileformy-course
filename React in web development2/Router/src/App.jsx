import { useState } from 'react'
import Navbarb from './components/Navbarb'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'
function App() {
    const router = createBrowserRouter([
          {
            path: "/",
            element: <><Navbarb/><Home/></>
          },
          {
            path: "/login",
            element: <><Navbarb/><Login/></>
          },    
          {
            path: "/about",
            element: <><Navbarb/><About/></>
          },    
          {
            path: "/user/:username",
            element: <><Navbarb/><User/></>
          },    
    ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
