import { MovingBoarderBtn } from '@/components/ui/moving-border'
import React from 'react'
import Title from './Title';

export default function MainSection() {
  return (
    <div className='flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between min-h-[60vh]'>
        <div className='space-y-10 text-center lg:text-left'>
            <h1 className='text-4xl lg:text-7xl font-bold border-white'>Hey there ! 👋<br/>
            <span className='underline underline-offset-8 decoration-purple-500'>{"I'm Ayush."}</span>
            </h1>
            <p className='md:w-96 text-lg text-gray-300'>
                {
                "A certified Game developer, tech enthusiast and a great App Developer"
        
                }
            </p>
            <a href={"mailto:mymail@gmail.com"} className='inline-block group'>
            <Title text="Contact Me 📬 "/>
            </a>
        </div>
        <div className='relative'>
            <div className='h-72 w-72 space-y-3 -rotate-[30deg] relative'>
                <div className='flex gap-3 translate-x-8'>
                    <div className='w-32 h-32 rounded-2xl bg-green-500'></div>
                    <div className='w-32 h-32 rounded-full bg-indigo-500'></div>
                </div>
                <div className='flex gap-3 -translate-x-8'>
                <div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>
                    <div className='w-32 h-32 rounded-full bg-green-500'> </div>
                </div>
                <div className='glow absolute top-[40%] right-1/2 -z-10 rounded-full'>
                </div>
            </div>
            <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>
                <MovingBoarderBtn borderRadius='0.5rem' className='p-2 font-semibold'>
                        <p> 📦 Working on a project</p>
                </MovingBoarderBtn>
            </div>
        </div>
    </div>
  )
}
