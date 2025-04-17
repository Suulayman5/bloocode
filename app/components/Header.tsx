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
            <p className="w-[92px] h-[18px]">Home</p>
            <p className="flex gap-1 w-[92px] h-[18px]">Company <span className='mt-0.5'><Image src='/images/Group1.png' height={10} width={18} alt='contact icon'/></span></p>
            <p className="w-[92px] h-[18px]">Resources</p>
            <p className="w-[92px] h-[18px]">Contact us</p>
            <p className="w-[92px] h-[18px]">Advertise</p>
            <div className=" flex relative items-center text-white pl-8">
              <Image src='/images/Group1492.png' height={10} width={15} alt='contact icon' className='absolute ml-4'/>
              <input className='bg-gray-500 rounded-[32px] h-[42px] w-[192px] placeholder:pl-10 placeholder:text-white placeholder:text-[13px]' placeholder='search'/>
            </div>
          </nav>
          
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col pb-4 max-w-64 font-medium text-[15px] gap-6 min-h-screen text-[#282828] z-10">
            <p className=" ">Home</p>
            <p className="">Company</p>
            <p className="">Resources</p>
            <p className="">Contact us</p>
            <p className="">Advertise</p>
          </div>
        )}
      </div>
      <div className="md:bg-black bg-[url('/images/Rectangle3.png')] mx-auto min-h-[72px] w-full px-5 flex items-center">
        <div className="w-[826px]">
          <div className="md:bg-[url('/images/Rectangle3.png')] flex items-center md:w-[608px] min-h-[72px] blur-[8] ">
            <Image src='/images/Liveplaybutton.png' width={40} height={20} alt='background' className=''/>
          </div>
        </div>
          <div className="flex text-white md:w-[626px] h-[20px] gap-5">
            <div className="">|</div>
            <div className="flex gap-5 items-center">
              <div className="flex items-center gap-3 h-[19px] md:w-[136px]">
                <div className="w-4 h-4">
                  <Image src='/images/Group972.png' width={30} height={2} alt='icon' className=''/>
                </div>
                <p className='hidden md:flex text-[15px] font-medium'>Latest News</p>
              </div>
              <div className="flex gap-3 items-center h-[19px] md:w-[136px]">
                <div className="w-4 h-4">
                  <Image src='/images/microphone-alt1.png' width={30} height={2} alt='icon' className=''/>
                </div>
                <p className='text-[15px] hidden md:flex font-medium'>New Episodes</p>
              </div>
              <div className="flex gap-3 items-center h-[19px] md:w-[136px]">
                <div className="w-4 h-4">
                  <Image src='/images/Group1469.png' width={30} height={2} alt='icon' className=''/>
                </div>
                <p className='text-[15px] hidden md:flex font-medium'>Our Services</p>
              </div>
              <div className="flex gap-3 items-center h-[19px] md:w-[136px]">
                <div className="w-4 h-4">
                  <Image src='/images/Group910.png' width={30} height={2} alt='icon' className=''/>
                </div>
                <p className='text-[15px] hidden md:flex font-medium'>All Podcasts</p>
              </div>
 
            </div>
          </div>
      </div>
    </header>
  );
}