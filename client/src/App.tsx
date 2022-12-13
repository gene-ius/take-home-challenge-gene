import React from 'react'


import './assets/stylesheets/styles.scss'
import '../src/assets/webfonts/Nunito/Nunito-Black.ttf'

import CitySelectorContainer from 'components/Containers/CitySelectorContainer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorEvent from 'components/error'
import Explore from 'components/explore'


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <CitySelectorContainer/>,
      errorElement: <ErrorEvent/>
    },
    {
      path: "events/:location/:timeframe",
      element: <Explore/>,
      errorElement: <ErrorEvent/>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  ) 

}

export default App
