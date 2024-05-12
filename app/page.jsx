import React from 'react'
import Hero from '@/components/hero';
import InfoBoxes from '@/components/infoBoxes';
import HomePropertiesCard from '@/components/HomePropertiesCard';
import connectDb  from '@/config/database';

const Homepage= async () => {


/* await connectDb(); */
  

  return (
    <>

      
      <InfoBoxes />
      <HomePropertiesCard />
      

        
      
    </>
  )
}

export default Homepage;
