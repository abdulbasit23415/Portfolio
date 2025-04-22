
'use client';
import React, { useEffect, useState } from 'react'
// import { PencilRuler,SearchCheck,Swords  } from 'lucide-react';

import AchmeLogo from './components/AchmeLogo';
import App from './components/App';
import { Button } from '@/components/ui/button';
import { ImLink } from "react-icons/im";
import MyCard from './components/MyCard';
 function Page() {
  const[repo,setRepos] = useState([]);
  useEffect(()=>{
    fetchRepos()
      },[])
  async function fetchRepos(){
    // async function fetchRepos() {
      const response = await fetch('https://api.github.com/users/AbdulBasit23415/repos');
      const data = await response.json();
      console.log(data);      // ✅ This will be an array of repos
      setRepos(data);         // ✅ Directly set the array into state
    
    
  }
  return (
    <div className='bg-gray-950 min-h-screen  '>
        <App/>
  <MyCard repo={repo } />
       </div> 
  

  )
}

export default Page
