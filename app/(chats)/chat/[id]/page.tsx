'use client'

import ChatInput from '@/app/components/ui/SearchBox'
import { Arrow, ArrowLoading } from '@/app/components/ui/Svgs';
import { run } from '@/app/lib/actions/GetAIData'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Chatpage ()  {
    const [prompt,setPrompt]  = useState("")
    const [response,setRespose]= useState("");
    const [loading, setLoading] = useState(false);
     
    const handleResponse =  async () =>{
      setPrompt("")
      setLoading(true)
      console.log(`Send to Server : ${prompt}`)
     try{
      if( prompt === ""  || prompt.trim() === "" ){
      throw new Error("Input Should be empty")
     }
    const res = await run(prompt)
    setRespose(res)
    setLoading(false)
    }
    catch(error:any){
      toast.error(error.message)
      console.log(error.message)
      setLoading(false)
     } 
    }
  return (
    <div className='flex flex-col w-full h-screen'>
       <div className='w-5/6 flex flex-col justify-center items-start m-auto'>
       <ToastContainer/>
       <ReactMarkdown>{response}</ReactMarkdown>
       </div>
      <div className='flex flex-col p-4 fixed h-full w-full justify-end'>
        <ChatInput btnName={<Arrow/>}  onclick={handleResponse} className={`text-black ${loading ? "hidden" : "" }`} bg-sky-50  inputValue={prompt} onchange={(e)=>setPrompt(e.target.value)}/>  
       </div>
    </div>
  
  )
}
