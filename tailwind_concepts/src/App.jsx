import React from 'react'
// import './App.css'

export default function App(){
  return(
    <>
      <h1 className="text-3xl font-bold underline text-center">Tailwind CSS</h1>

      {/* <div className="mt-10 text-center font-bold text-2xl grid grid-cols-3 hover:grid-cols-2">
        <div className="bg-red-500 h-20 col-span-2">Box-1</div>
        <div className="bg-green-600 h-20">Box-2</div>
        <div className="bg-blue-700 h-20">Box-3</div>
        <div className="bg-yellow-800 h-20">Box-4</div>
        <div className="bg-indigo-800 h-20">Box-5</div>
        <div className="bg-green-900 h-20">Box-6</div>
      </div> */}
      <hr className='m-10 border-8 bg-red-800  border-green-900 border-l-yellow-800 border-l-8' />

      <div className='grid grid-cols-1 text-2xl font-bold text-center md:grid-cols-6'>
        <div className='bg-red-400 text-violet-800'>Box-1</div>
        <div className='bg-green-500'>Box-2</div>
        <div className='bg-blue-700'>Box-3</div>
      </div>
      <hr className='w-28 my-10 mx-auto border-red-700 border-b-0 border-dotted border-8'/>

      <MainApp />
    </>
  )
}

const MainApp = ()=>{
  return(<>
      <div className=' bg-gray-200 grid grid-cols-3 font-bold text-xl p-20 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-row-2 sm:shadow-[inset_10px_30px_4px_2px_rgba(0,0,0,0.5)]'>
        
        <div className='bg-red-600'>Box-1</div>
        <div className='bg-green-600'>Box-2</div>
        <div className='bg-blue-600 hover:col-span-2'>Box-3</div>
        <div className='bg-amber-600'>Box-4</div>
        <div className='bg-indigo-600'>Box-5</div>
        <div className='bg-yellow-400 hover:shadow-[12px_12px_8px_2px_rgba(0,0,0,0.5)]'>Box-6</div>
      
      </div>
  </>)
}