import { useState } from 'react';


interface ChatInputProps {
  className?:string
  onchange:(e:any)=>void
  inputValue:string 
  onclick : ()=>void
  btnName:string
}

const ChatInput: React.FC<ChatInputProps> = ({className,onchange,inputValue,onclick,btnName}) => {
  return (
    <div className='flex flex-row items-center justify-between p-4 bg-gray-100 text-black'>
      <input
        type="text"
        value={inputValue}
        onChange={onchange}
        placeholder="Type your message..."
        className="flex-grow bg-white border border-gray-300 rounded-md py-2 px-4 mr-4 outline-none"
      />
      <button onClick={onclick}>
        {btnName}
      </button>
     </div> 
  );
};

export default ChatInput;
