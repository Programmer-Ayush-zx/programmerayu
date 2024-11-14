import { cn } from '@/lib/utils';
import React from 'react'
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Navbar({className}:{className?:string}) {
    const social = [
        {
            link:"https://www.youtube.com",
            label:"YouTube",
            Icon: SiGithub,
        },
        {
            link:"https://www.google.com",
            label:"GoogleDev",
            Icon: SiLinkedin,
        },
        {
            link:"https://www.instagram.com",
            label:"Instagram",
            Icon: SiInstagram,
        }
    ]
  return (
    <nav className={cn('py-10 flex justify-between items-center',className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-emerald-500 -rotate-2'
        >ProgrammerAyu👨🏻‍💼</h1>
        <div className='flex items-center gap-5'>
            {social.map((social,index)=>{
                const Icon = social.Icon;
                return(
                <a 
                href={social.link}
                key={index}
                aria-label={social.label}
                >
                <Icon className='h-5 w-5 hover:scale-135 transition-all'/>
                </a>
                );
            })}
        </div>
    </nav>
  )
}
