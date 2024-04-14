'use client'

import ChatInput from '@/app/components/ui/SearchBox'
import { run } from '@/app/lib/actions/GetAIData'
import React, { useState } from 'react'


export default function Chatpage ()  {
    const [prompt,setPronpt]  = useState("")
    const [response,setRespose]= useState("");
     
    const handleResponse=  async () =>{
      console.log(`Send to Server : ${prompt}`)
      if(prompt.length > 0){
        const res = await run(prompt)
        setRespose(res)
      }
      
    }

  return (
    <div className='flex flex-col w-full h-full '>
       <div className='flex justify-center'>
        {response}
       </div>
      <div className='flex flex-col justify-end'>
      <div className='flex flex-col justify-center'>
        <ChatInput btnName='Send' onclick={handleResponse} className='text-black bg-sky-50' inputValue={prompt} onchange={(e)=>setPronpt(e.target.value)}/>  
       </div>
      </div>
    </div>
  
  )
}
