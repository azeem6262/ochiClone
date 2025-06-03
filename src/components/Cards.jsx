import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='flex relative items-center justify-center card rounded-xl w-full h-full bg-[#004D43]'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-1 border-2 left-3 bottom-10 rounded-full'>&copy;2019</button>
            </div>
        </div>
        <div className='cardcontainer h-[50vh] w-1/2 flex gap-5'>
            <div className='flex items-center justify-center relative card rounded-xl w-1/2 h-full bg-[#212121]'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute px-5 py-1 border-2 left-3 bottom-10  uppercase rounded-full'>Rating 5.0 on clutch</button>
            
            </div>
            <div className='flex items-center justify-center relative card rounded-xl w-1/2 h-full bg-[#212121]'>
                <img className='h-1/3 w-1/3' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute px-5 py-1 border-2 left-3 bottom-10 rounded-full uppercase whitespace-nowrap'>Business bootcamp alumni</button>
            
            </div>
        </div>
    </div>
  )
}

export default Cards