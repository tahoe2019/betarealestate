import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {FaBed,FaBath,FaRulerCombined,FaMoneyBill,FaMapMarker} from 'react-icons/fa'


const PropertyCard = ({property}) => {

    const getRateDisplay = () => {

        const {rates } = property;

        if(rates.monthly){
            return `${rates.monthly.toLocaleString()}/mo`;

        }else if(rates.weekly){
           
            return `${rates.weekly.toLocaleString()}/wk`;


        }
        else if(rates.nightly){
           
            return `${rates.nightly.toLocaleString()}/night`;


        }


    }


  return (
    /* <!-- Listing 1 --> */
          <div className="rounded-xl shadow-md relative mx-8 hover:-translate-y-1 hover:scale-110  duration-300">
            <Image
              src={`/images/properties/${property.images[0]}`}
              sizes='100vw'
              height={0}
              width={0}
              alt=""
              className='w-full h-auto rounded-t-xl'
            />
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600">{property.type}</div>
                <h3 className="text font-bold">{property.name}</h3>
              </div>
              <h3
                className="absolute top-[5px] right-[5px] bg-white px-4 py-2 rounded-lg text-rose-600 font-bold text-right md:text-center lg:text-right"
              >
                ${getRateDisplay()}
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p>
                 <FaBed className='inline mr-2' /> {property.beds} {'  '}
                  <span className="md:hidden lg:inline">Beds</span>
                </p>
                <p>
                <FaBath className='inline mr-2' /> {property.baths} {'  '}
                  <span className="md:hidden lg:inline">Baths</span>
                </p>
                <p>
                <FaRulerCombined className='inline mr-2' />
                  {property.square_feet} <span className="md:hidden lg:inline">sqft</span>
                </p>
              </div>

              <div
                className="flex justify-center gap-4 text-black text-sm mb-4"
              >
                {
                    property.rates.nightly && (
                        <p><FaMoneyBill className='inline mr-2' /> Nightly</p>
                    )
                }

                {
                    property.rates.weekly && (
                        <p><FaMoneyBill className='inline mr-2' />  weekly</p>
                    )
                }

{
                    property.rates.monthly && (
                        <p><FaMoneyBill className='inline mr-2' />  Monthly</p>
                    )
                }

              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                <FaMapMarker className='text-rose-700 mt-1' /> 
                  <span className="text-rose-700"> {property.location.city} {' '} {property.location.state}</span>
                </div>
                <Link
                  href={`/properties/${property._id}`}
                  className="h-[36px] bg-rose-600 hover:bg-white hover:text-rose-600 hover:border border-rose-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
  )
}

export default PropertyCard
