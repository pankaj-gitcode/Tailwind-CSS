// services routing path defined here

import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
// import { servicesAtom } from './Atom';

const Orders = lazy(()=>import('./Orders'));
const Products = lazy(()=>import('./Products'));
// const Dukaan = lazy(()=>import('./Dukaan'));
const Home = lazy(()=>import('./Home'));

export default function Services(){

    return(
        <>
            <Suspense fallback={<p>Loading...</p>}>

            <BrowserRouter>
                    {/* <AllServices /> */}

                    <Home />
                <Routes>
                    <Route path={'/'}  />
                    <Route path={'/products'} element={<Products/>}/>
                    <Route path={'/orders'} element={<Orders />}/>
                </Routes>
            </BrowserRouter>
            </Suspense>
            
        </>
    )
}

// const AllServices = ()=>{
//     const navigate = useNavigate()
//     const servc = useRecoilValue(servicesAtom);

//     // adding cursor as pointer
//     const pointer = ()=>{
//         const divBoxes = document.getElementsByTagName('p');
//         Array.from(divBoxes).map((e)=>e.style.cursor = 'pointer')
//     }
//     // pointer()

//     return(<>
//         <div className='flex flex-col gap-6'>
//             {
//                 servc.map((e)=> <p key={servc.indexOf(e)}>{e.service}</p> )
//             }    
//         </div>
//     </>)
// }

