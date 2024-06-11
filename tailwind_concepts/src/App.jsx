import React from 'react'
// import './App.css'

export default function App(){
  return(
    <>
      <h1 className="text-3xl font-bold underline text-center">Tailwind CSS</h1>

      <div className="mt-10 text-center font-bold text-2xl grid grid-cols-3 hover:grid-cols-2">
        <div className="bg-red-500 h-20">Box-1</div>
        <div className="bg-green-600 h-20">Box-2</div>
        <div className="bg-blue-700 h-20">Box-3</div>
        <div className="bg-yellow-800 h-20">Box-4</div>
        <div className="bg-indigo-800 h-20">Box-5</div>
        <div className="bg-green-900 h-20">Box-6</div>
      </div>
      <hr className='bg-gray-800 m-20 h-2 border-dotted' />

      <div className='grid grid-cols-1 text-2xl font-bold text-center md:grid-cols-6'>
        <div className='bg-red-400 text-violet-800'>Box-1</div>
        <div className='bg-green-500'>Box-2</div>
        <div className='bg-blue-700'>Box-3</div>
      </div>
    </>
  )
}