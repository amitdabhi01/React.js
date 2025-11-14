import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
        <div>
            <h1>Page not be Found</h1>
        </div>

        <Link to={"/"}>
            <button>Home</button>
        </Link>
    </>
  )
}

export default ErrorPage;
