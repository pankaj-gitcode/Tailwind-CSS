            // All services arranged in one columns from Atom

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import {servicesAtom, walletAtom } from './Atom';

export default function Home(){
    const navigate = useNavigate();
    const srvc = useRecoilValue(servicesAtom);
    const creditAvl = useRecoilValue(walletAtom);
   

    return(
        <>

            <div className='flex flex-col gap-1.4 mt-5 pl-5 text-slate-300 text-[15px] font-semibold leading-6'>
                
                            {/* all services:home,Products,Delivery etc.. fetched from Atom.jsx */}

                {srvc.map((e)=> <p className='flex gap-2  hover:bg-gray-700 cursor-pointer rounded-[5px] py-1.5 w-[90%] px-4 ' 
                key={srvc.indexOf(e)} onClick={()=>navigate(`${e.path}`)}>{e.icon}{e.service}

                </p> )}
                            {/* -------------------- AVL. CREDITS ---------------------- */}
                    {/* <div className='flex items-center pl-4 bg-gray-700 w-[90%] leading-5 py-2 rounded-md mt-16 lg:mt-40 '> */}
                    <div className='flex items-center bg-gray-700 w-[90%] leading-1 rounded-md py-[6px] px-3 lg:translate-y-full translate-y-0 '>
                        <div>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 bg-[#fff]/10  rounded-[3px] w-8 h-8 p-1"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                        </svg>

                        </div>

                        <div className='pl-2 '>
                            <h5>Available Credits</h5>
                            <h5 className='font-semibold text-[16px]'>{creditAvl}</h5>
                        </div>
                    </div>
                
            </div>
        </>
    )
}