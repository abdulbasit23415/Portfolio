import React from 'react';
import {
  Button as HeroButton,
  Link as HeroLink, // Correct alias
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownTrigger,
} from "@heroui/react";

import AchmeLogo from './AchmeLogo';
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import Image from 'next/image';

function App() {
  return (
    <div className='text-white'>
     
        <Image width={1000} height={1000} alt={""} priority={false} src="/pimage3.jpg" className='w-[100%] h-[600px]' />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="flex flex-col items-center">
            <Image width={1000} height={1000} alt={""} priority={false} src="/myimage2.jpeg" className='w-[150px] h-[150px] border-gray-900 rounded-full' />
            <h1 className="font-bold text-[#ff4b5c] text-3xl mt-4">ABDUL BASIT</h1>
            <p className=" text-white  mt-4">Python developer with expertise in Node.js for both frontend and backend development.</p>
          </div>
        </div>
      
      <Navbar shouldHideOnScroll className='absolute top-0 left-0 text-White '>
        <NavbarBrand>
          <AchmeLogo />
          <h1 className="font-bold text-white"><span className='text-[#ff4b5c] text-2xl '>A</span>BDULBASIT</h1>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-10 mx-96">
          <NavbarItem>
            <HeroLink color="foreground" href="https://github.com/abdulbasit23415" className='font-bold'>
              <FaGithub />
              GitHub
            </HeroLink>
          </NavbarItem>
          <NavbarItem>
            <HeroLink color="foreground" href="https://www.linkedin.com/in/abdulbasit-kashif0003/" className='font-bold'>
              <IoLogoLinkedin />
              linkedin
            </HeroLink>
          </NavbarItem>
          <NavbarItem isActive>
            <HeroLink aria-current="page" href="#" className='font-bold'>
            </HeroLink>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}

export default App;
