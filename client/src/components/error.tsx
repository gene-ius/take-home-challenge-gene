import React , {FC} from 'react'
import { useRouteError } from "react-router-dom";


const ErrorEvent : FC = () => {
    const error = useRouteError()
    console.error(error);


  return (
    <div className='errPage'>
    <h1 className='errPage'>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p>
      <i>{error.status}</i>
      <i>{error.statusText || error.message}</i>
    </p>
  </div>
  )
}

export default ErrorEvent



