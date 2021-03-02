import React, { useState, useEffect } from 'react'
import NavMobile from '../components/NavMobile'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  const [cssOption , setCssOption] = useState(0)

  function detectaTamanhoDoDispositivo(){
      if (screen.width < 640 || screen.height < 480) {
          console.log('smartphone')
          setCssOption(0)
      } else if (screen.width < 1024 || screen.height < 768) {
          console.log('tablet')
          setCssOption(1)
      } else {
          console.log('pc')
          setCssOption(2)
      }
  }

  useEffect(()=>{
    detectaTamanhoDoDispositivo()
  },[] )

  return (
    <>
      <NavMobile/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
