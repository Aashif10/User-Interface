import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Create from './Components/Create'
import All from './Components/All'
import Navbar from './Components/Navbar'
import Update from './Components/Update'

const router = createBrowserRouter([{
  path: "/",
  element:<> <Navbar></Navbar></>
},
 
  {
  path: "/create",
  element:<> <Navbar></Navbar> <Create></Create></>
  },
  {
    path: "/all",
    element:<> <Navbar></Navbar> <All></All></>
  },
  {
    path: "/:id",
    element:<><Navbar></Navbar><Update></Update></>  
  }
])

const App = () => {
  return (
    <div>
    
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App