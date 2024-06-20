import React from 'react'
import Services from './Services'

export default function Dukaan(){
    return(
        <>          
                    {/* ---------------------HEADER ---------------------- */}
            <div className=' flex items-center justify-between fixed w-full  px-2  sm:px-8 py-3 bg-[#fff] shadow-[0_1px_1px_0_rgba(0,0,0,0.2)]'>

                <div className='flex justify-between items-center sm:gap-4 gap-2'>
                            {/* --------------SIDE BAR ----------------- */}
                    <div className='bg-[#1E2640] text-[#fff] absolute left-0 top-0 h-full md:fixed w-56 sm:block hidden font-semibold translate-x-full lg:translate-x-0'>

                                {/* ------------ PROFILE/VISIT STORE/ARROW ----------- */}
                        <div className='flex items-center justify-center gap-2'>
                            <div className='bg-slate-100 text-[#000] my-3 w-10 h-9 text-[8px] py-3 pl-1 rounded'>DUKAAN</div>
                            <div>
                                <h5>Profile</h5>
                                <p className='underline text-slate-400 text-xs'>Visit Store</p>
                            </div>
                            <div className='ml-6'>
                                
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-[20px] h-[20px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>

                            </div>
                        </div>
                                    {/* ---------------------: SERVICES :-------------------- */}
                        <Services />


                    </div>
                            {/* -------------- HUMBERGER ----------------- */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 font-extrabold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </div>
                            {/* ------------------ Header services ---------------- */}
                    <div className=' ml-2 sm:ml-44 text-xl font-medium'>Payouts</div>
                    <div className=' flex items-center justify-between '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                        <p className='sm:text-sm text-xs pl-1 hidden sm:block'>How it works</p>
                    </div>
                </div>
                <div className='bg-[#f2f2f2] flex items-center justify-between pl-2 pr-8 py-3 gap-2'>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 opacity-50">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <input type="text" className='w-[10vw] sm:w-[20vw] outline-none bg-transparent text-xs sm:text-sm' placeholder='Search features, tutorials, etc.' />
                </div>

                            {/* ---------------------- SPEAKER & DOWN ARROW ---------------------- */}
                <div className=' flex items-center justify-between sm:gap-4 gap-2 '>

                    <button className='bg-[#f2f2f2] sm:h-10 h-8 w-8 sm:w-10 p-2 rounded-full '>
                    <img src="https://dashboard-clone-dukaan.vercel.app/_next/image?url=%2Fspeaker.png&w=32&q=75" alt="" width='20' height='20' decoding='async' style={{color:'transparent'}}/>
                    </button>

                    <button className='bg-[#f2f2f2] sm:h-10 h-8 w-8 sm:w-10 rounded-full sm:p-2 p-1 '>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>
                    </button>


                </div> 

            </div>
            <div>
                
            </div>
        </>
    )
}