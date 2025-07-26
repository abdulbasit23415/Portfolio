import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { ImLink } from 'react-icons/im'

function MyCard({repo}) {
  return (
    <div>
      <div className='flex ' >
        <Image src="/myimage2.jpeg" className='w-[350px] h-[397px] my-9 mx-32  border-gray-900 rounded-xs  '
        width={1000}
        height={1000}
        priority={false}
        alt={"My Image"} />
        <div className='my-5' >
        <h1 className='text-[#ff4b5c] font-bold text-md'>Discover</h1>
        
        <h2 className=' font-stretch-200% font-bold text-5xl text-white '>About Me</h2>
        <div className="w-[9%] h-[2px] bg-[#ff4b5c] my-2 " />
       <p className='text-white pr-20 text-justify'> I’m a BS Data Science student and Python developer with skills in both frontend and backend using Node.js. I enjoy building full-stack applications and data-driven solutions that are efficient, scalable, and user-focused.</p>
       <div className='  border-[#ff4b5c] border-2 my-5  px-5 py-5 grid grid-cols-2 gap-5 font-bold text-white h-48 w-[91%]  '>
        <h1>Name: ABDULBASIT</h1>
        <h1>Age: 21</h1>
        <h1>Location: Lahore, Pakistan</h1>
        <h1>Email: kashifabdulbasit@gmail.com</h1>
        <h1>skills: Python, Node.js(frontend,backend CMS), ML, SQL</h1>
        <h1>Education: Undergraduate(6th Semester)</h1>
       </div>
       <a href="/Abdul Basit cv1.pdf" target="_blank" rel="noopener noreferrer">
       <Button className='bg-[#ff4b5c] my-5 px-6 py-5'>Resume</Button>
       </a>
       </div>
       
       </div>
       <div className='bg-[#25273E] min-h-screen   py-10 px-20 text-white  '>
        
        <h1 className='text-[#ff4b5c] font-bold text-md'>What I Do</h1>
        <h1 className=' font-stretch-200% font-bold text-4xl  '>My Projects</h1>
        <div className="w-[4%] h-[2px] bg-[#ff4b5c] my-5" />
        <div className='grid grid-cols-3 gap-10 '>
        {repo.map((repos) => (
  <div key={repos.id} >
    <a href={repos.html_url} target="_blank" rel="noopener noreferrer" className='border-[#ff4b5c] border-2 px-5 py-5 block'>
      <ImLink/>
      <h1 className='font-bold  text-lg '>{repos.name}</h1>
   
      <p className='mt-3'>
  {repos.description
  ? repos.description.length > 100
    ? repos.description.slice(0, 100) + '...'
    : repos.description
  : 'No description available.'}
</p>
   
    </a>
  </div>
))}
  </div>

       </div>
       </div>
        
    
  )
}

export default MyCard