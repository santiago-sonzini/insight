import React from 'react'

const Loading = () => {
  return (
    <div className=' flex min-h-screen flex-col items-center justify-center bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200'>
        <h1 className=' text-white font-bold animate-pulse'>
            Loading...
        </h1>
    </div>
  )
}

export default Loading