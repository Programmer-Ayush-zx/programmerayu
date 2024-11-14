"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/card-hover-effect'
import { SiAndroid, SiArduino, SiEspressif, SiHtml5, SiJavascript, SiNextdotjs, SiPython, SiRaspberrypi, SiReact, SiTailwindcss } from 'react-icons/si'
export default function Skills() {
  const skills  = [
    {
      text:"React",
      title:"",
      Icon: SiReact,
    },
    {
      text:"Android",
      title:"",
      Icon: SiAndroid,
    },
    {
      text:"HTML",
      title:"",
      Icon: SiHtml5,
    },
    {
      text:"ESP-WiFi",
      title:"",
      Icon: SiEspressif,
    },
    {
      text:"Raspberry",
      title:"",
      Icon: SiRaspberrypi,
    },
    {
      text:"NextJs",
      title:"",
      Icon: SiNextdotjs,
    },
    {
      text:"Tailwind CSS",
      title:"",
      Icon: SiTailwindcss,
    },
    {
      text:"Javascript",
      title:"",
      Icon: SiJavascript,
    },
    {
      text:"Arduino",
      title:"",
      Icon: SiArduino,
    },
    {
      text:"Python",
      title:"",
      Icon: SiPython,
    }
  ];
  return (
    <div className='max-w-5xl mx-auto px-8'>
        <Title text="Skills 🎯" className='flex flex-col justify-center items-center -rotate-6'/>
        <HoverEffect items={skills}/>
    </div>

  )
}
