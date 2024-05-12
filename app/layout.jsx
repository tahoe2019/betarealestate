import React from 'react'
import '@/assets/styles/global.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'
import Hero  from '@/components/hero'


export const metadata = {
  title: ' property plus find the perfect reatal',
  description : 'Find your dream rental property',
  keywords: 'rental,find rentals, find properties',
}


const MainLayout = ({children }) => {
  return (
    

    <html lang='en'>
        <body>
            <div>
              <Navbar />
              <Hero />
              <main className="px-16">{children}</main>
              <Footer />
               
            </div>
        </body>
    </html>
  )
}

export default MainLayout;
