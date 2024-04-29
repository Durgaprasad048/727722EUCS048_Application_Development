import React from 'react'

const Error = () => {
  document.title="404 - Not Found";
  return (
    <>
    <div className='error-container'>
        <h1 className="error-heading text-center h1-ubuntu">404 <br /> NOT FOUND</h1>
    </div>
    </>
  )
}

export default Error