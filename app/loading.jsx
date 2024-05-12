'use cleint'
import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const loading = (loading) => {

    const override = {
        display : 'block',
        margin: '100px auto',
    };


  return (
    
    <ClipLoader
      color='#E11D48'
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      
    />
  
  )
}

export default loading
