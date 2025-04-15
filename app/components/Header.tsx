'use client'
import Image from 'next/image';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#FCFCFC] shadow-md">
      <div className="w-full mx-auto px-6 lg:px-16">
        <div className="flex justify-between items-center h-16">
          <div className="block md:hidden text-[#282828]">
              <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >{isMenuOpen ? <CloseIcon/> : <MenuIcon/>}
              </button>
          </div>
          <div className="flex items-center">
            <Image src='/images/ABRLogo.png' height={18} width={108} alt='logo'/>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-[15px] text-[#282828]">
            <p className=" ">Home</p>
            <p className="flex gap-1">Company <span className='mt-0.5'><Image src='/images/Group1.png' height={10} width={18} alt='contact icon'/></span></p>
            <p className="">Resources</p>
            <p className="">Contact us</p>
            <p className="">Advertise</p>
            <div className=" flex relative items-center text-white pl-8">
              <Image src='/images/Group1492.png' height={10} width={15} alt='contact icon' className='absolute ml-4'/>
              <input className='bg-gray-500 rounded-[32px] h-[42px] w-[182px] placeholder:pl-10 placeholder:text-white placeholder:text-[13px]' placeholder='search'/>
            </div>
          </nav>
          
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col pb-4 max-w-64 font-medium text-[15px] gap-6 min-h-screen text-[#282828] z-10">
            <p className=" ">Home</p>
            <p className="flex gap-1">Company</p>
            <p className="">Resources</p>
            <p className="">Contact us</p>
            <p className="">Advertise</p>
          </div>
        )}
      </div>
    </header>
  );
}