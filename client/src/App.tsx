import React from 'react'


import './assets/stylesheets/styles.scss'
import '../src/assets/webfonts/Nunito/Nunito-Black.ttf'

import CitySelectorContainer from 'components/Containers/CitySelectorContainer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <CitySelectorContainer/>
    }
  ])
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  ) 

}

export default App
