import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import ViewPaste from './components/ViewPaste'
import Home from './components/Home'
import Paste from './components/Paste'
import NotFound from './components/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        {/* <Navbar /> */}
        <Home />
      </div>
    )
  },
  {
    path: "/paste",
    element: (
      <div>
        <Navbar />
        <Paste />
      </div>
    )
  },
  {
    path: "/viewpaste/:id",
    element: (
      <div>
        <Navbar />
        <ViewPaste />
      </div>
      
    )
  },

  {

    path : "*",
    element : (

      <div>
        <Navbar/>
        <NotFound />
      </div>

    )
  }

]);

function App() {
  return (
    <div>
      
      <RouterProvider router={router} />
    </div>
  )
}

export default App
