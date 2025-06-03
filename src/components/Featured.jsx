import { motion } from 'framer-motion'
import { span } from 'framer-motion/client'
import React, { useState } from 'react'

function Featured() {
    
    
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-600 pb-20'>
            <h1 className='text-8xl font-["Neue_Montreal"] tracking-tighter'>Featured projects</h1>
            
        </div>
        <div className='px-20'>
            <div className='forText mt-15 flex'>
                    <h1 className='whitespace-nowrap uppercase font-["Neue_Montreal"]'>Salience labs</h1>
                    <h1 className='whitespace-nowrap px-145 uppercase font-["Neue_Montreal"]'>cardboard spaceship</h1>
            </div>
            <div className='cards w-full flex gap-10 mt-5'>
                <div className='cardcontainer relative w-1/2 h-[80vh]'>
                    
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" alt="" />
                    </div>
                </div>
                <div onHoverStart={()=>{handleHover(1); console.log("Mouse enter Cardboard Spaceship")}} className='cardcontainer relative rounded-xl w-1/2 h-[80vh]'>
                    
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Featured