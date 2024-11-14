import React from 'react'
import { SiArduino, SiC, SiNextdotjs, SiPython, SiReact, SiTailwindcss } from 'react-icons/si';
import Title from './Title';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

export default function Projects() {
    const  projects = [

        {
            title: "Portfolio Website",
            tech:[SiNextdotjs, SiTailwindcss , SiReact],
            link:"https://www.youtube.com/",
            cover:"/project1.png",
            background:"bg-red-500",
        },
        {
            title: "ChatApplication",
            tech:[SiNextdotjs, SiTailwindcss , SiReact],
            link:"https://www.youtube.com/",
            cover:"/project1.png",
            background:"bg-indigo-500",
        },
        {
            title: "ArdUi Core (8 Bit PC)",
            tech:[SiPython,SiArduino,SiC],
            link:"https://www.youtube.com/",
            cover:"/project1.png",
            background:"bg-sky-500",
        }
    ];
  return (
    <div className='py-10 p-5 sm:p-0'>
        <Title text="Projects 🛠️ " className='flex flex-col items-center justify-center rotate-6'/>
        <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
            {projects.map((project , index)=>{
                return <a href={project.link} key={index}>
                    <div className={cn("p-5 rounded-md",project.background)}>
                        <DirectionAwareHover imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>
                            <div className='space-y-5'>
                                <h1 className='text-2xl font-bold'>{project.title}</h1>
                                <div className='flex items-center gap-5'>
                                    {project.tech.map((Icon,index)=>{
                                        return<Icon key={index} className='w-8 h-8'/>
                                    })}
                                </div>
                            </div>
                        </DirectionAwareHover>
                    </div>
                </a>
            })}
        </div>
    </div>
  )
}
