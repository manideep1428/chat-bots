'use client'
import Link from "next/link";
import Input from "./ui/Input";
import { useState } from "react";
import { SignupInput } from "@manideep1428/meduim-common";
import Button from "./ui/Button";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios"

 
export const Auth = ({type}:{type:"signup" | "signin"})=>{
    const router = useRouter();
    const [postInput,setPostInput] = useState<SignupInput>({
        email:'',
        password:'' 
    })
    const handleApi = async ()=>{
      const response = await axios.post(`/api/auth/${ type==="signin" ? "signin" : "signup"}` , postInput)
       
    }
    return(
        <div className="h-screen flex flex-col justify-center gap-2 items-center">
           <div className="text-3xl font-bold">
              { type=="signup" ?  " Create an Account":"Login To Your Account" }
            </div>
               <div className="text-slate-500 ">
                 { type=="signup" ?  "Already Have a Account?":"Don't Have Account?" }
                   <Link className="text-blue-500 pl-2 underline" href={type==="signin" ?"/signup":"/signin"}>
                 { type=="signup" ? "Login" :"SignUp" }
                    </Link>             
               </div>
               <div className="">
                    <Input labelName="Email" placeholder="email1428@gmail.com" name="email" type="email"
                    value={postInput.email} onChange={(e)=>{
                        setPostInput({...postInput, email:e.target.value})} 
                        } 
                    />
                    <Input labelName="Password" placeholder="Pass@18895" name="email" type="password"
                    value={postInput.password} onChange={(e)=>{
                        setPostInput({...postInput, password:e.target.value})} 
                        } 
                    />
                    <Button className="mt-10" click={handleApi} btnName={type=="signup"? "Signup" :"SignIn"}/>
               </div>      
             <ToastContainer/>          
        </div>
    )
}

export default Auth;