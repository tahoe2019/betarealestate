import React from 'react'

import InfoBox from './infoboxe'

const InfoBoxes = () => {
  return (
    


    /* <!-- Renters and Owners --> */
    <section>
      <div className="container-xl lg:container m-auto px-2 sm:px-8 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
         
         <InfoBox

         heading='For Renters'
         backgroundColor="bg-gray-100"
         buttonInfo={{
            text: 'Browse you Properties',
            link: '/properties',
            backgroundColor: 'bg-rose-600'
         }}>

            Find you dream Home in here where ever you are.
            just make here you booking appointment you can win ticket

         </InfoBox>

         <InfoBox

            heading='For Owners'
            backgroundColor="bg-rose-100"
            buttonInfo={{
            text: 'add your property',
            link: '/properties',
            backgroundColor: 'bg-rose-600'
            }}>

            Find you dream Home in here where ever you are.
            just make here you booking appointment you can win ticket

            </InfoBox>
            
          
        </div>
      </div>
    </section>

  )
}

export default InfoBoxes
