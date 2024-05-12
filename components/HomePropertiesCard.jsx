import React from 'react'/* 
import properties from '@/properties.json'; */
import Link from 'next/link'
import PropertyCard from '@/components/PropertyCard';
import {fetchproperties} from '@/utils/request';





const HomePropertiesCard = async () => {


const properties = await fetchproperties();
  

    const recentProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 4);



  return (
    /* <!-- Recent Properties --> */

    <>
    <section className="p-8">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-rose-600 mb-8 text-center">
          Recent Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">

                {
                    recentProperties ===  0 ? (
                        <p>No properties Found</p>
                    ) : recentProperties.map ((property) => (
                        <PropertyCard key={property._id} property = {
                            property
                        } />
                    )) 
                }
            </div>
            </div>
            </section>

            <section className="m-auto max-w-lg my-10 px-6">
            <Link
                href="/properties"
                className="block bg-rose-600 text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
                >View All Properties</Link>
    </section>

            </>
  )
}

export default HomePropertiesCard
