import React, { Suspense, lazy } from 'react'
import { RecoilRoot } from 'recoil'

const Dukaan = lazy(()=>import('./components/Dukaan'))

export default function App(){
  return(
    <>
    <RecoilRoot>

      <Suspense fallback={<p>Loading...</p>}>
        <Dukaan />
      </Suspense>
    </RecoilRoot>
    </>
  )
}