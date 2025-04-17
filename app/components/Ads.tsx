import Image from 'next/image'
import React from 'react'

const Ads = () => {
  return (
    <div className="px-20 flex justify-center items-center bg-white w-full">
    <div className=' flex-col px-auto w-[1150px] py-6'>
     <div className="flex items-center justify-end">
        <div className="text-[#5A5A5A] text-[11px]">ADVERTISEMENT</div>
    </div>
    <div className="w-full">
        <Image src='/images/FBN-ADVERT-2.png' width={1300} height={200} alt='ads'/>
    </div>
    </div> 
    </div>
  )
}

export default Ads
