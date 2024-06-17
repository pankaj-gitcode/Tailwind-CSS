import React, { Suspense, lazy } from 'react'

const Dukaan = lazy(()=>import('./components/Dukaan'))

export default function App(){
  return(
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Dukaan />
      </Suspense>
    </>
  )
}