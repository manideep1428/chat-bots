'use client'
import ChatInput from '@/app/components/ui/SearchBox';
import { run } from '@/app/lib/actions/GetAIData';
import React, { useState, useEffect } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/theme/material.css'; 

export default function Chatpage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [markdownContent, setMarkdownContent] = useState(null); 


  const handleResponse = async () => {
    setPrompt('');
    console.log(`Send to Server : ${prompt}`);
    if (prompt.length > 0) {
      const res = await run(prompt);
      setResponse(res);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(response);
  };

  useEffect(() => {
    if (markdownContent) {
      const editor = CodeMirror.fromTextArea(
        document.getElementById('code-editor'),
        {
          mode: 'markdown', // Set mode to markdown
          theme: 'material',
          lineNumbers: true,
          readOnly: true, // Make the code editor read-only
        }
      );
      editor.setValue(markdownContent); // Set the content in the editor
    }
  }, [markdownContent]); // Run effect only when markdownContent changes

  return (
    <div className='flex flex-col w-full h-full '>
      <div className='w-5/6 h-[80%] flex flex-col justify-center items-start m-auto'>
        <button onClick={copyToClipboard}>Copy</button>
        {markdownContent && ( // Conditionally render CodeMirror only if content exists
          <CodeMirror
            id='code-editor' // Provide an ID for initialization
            options={{
              mode: 'markdown', // Set mode to markdown
              theme: 'material',
              lineNumbers: true,
              readOnly: true, // Make the code editor read-only
            }}
          />
        )}
      </div>
      <div className='flex flex-col justify-end'>
        <div className='flex flex-col justify-center fixed'>
          <ChatInput
            btnName='Send'
            onclick={handleResponse}
            className='text-black bg-sky-50'
            inputValue={prompt}
            onchange={(e) => setPrompt(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
