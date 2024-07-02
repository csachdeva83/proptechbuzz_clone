import { ArrowRight, ChevronRight } from 'lucide-react';
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className='flex w-full lg:gap-x-5 xl:gap-x-10 h-14 items-center justify-center sticky top-0 z-30 bg-white bg-opacity-60 backdrop-blur-lg backdrop-filter lg:text-sm xl:text-base'>
            <Image
                alt='PropTechBuzz'
                src='./proptechbuzz_logo.svg'
                className='xl:w-[172px] xl:h-[25px] lg:w-[167px] lg:h-[20px] cursor-pointer'
                height={860}
                width={125} 
            />
            <ul className='flex gap-4'>
                <li className='cursor-pointer'>Leaders Hive</li>
                <li className='flex gap-1 items-center cursor-pointer'>
                    News
                    <ChevronRight size={15} className='rotate-90'/> 
                </li>
                <li className='flex gap-1 items-center cursor-pointer'>
                    Categories
                    <ChevronRight size={15} className='rotate-90'/> 
                </li>
                <li className='flex gap-1 items-center cursor-pointer'>
                    Communities
                    <ChevronRight size={15} className='rotate-90'/> 
                </li>
                <li className='flex gap-1 items-center cursor-pointer'>
                    About Us
                    <ChevronRight size={15} className='rotate-90'/> 
                </li>
                <li className='flex gap-1 items-center cursor-pointer'>
                    Advertise
                    <ChevronRight size={15} className='rotate-90'/> 
                </li>
            </ul>
            <button className='flex gap-2 items-center bg-[#FFA804] px-6 py-2 font-medium rounded'>
                Submit Your Product
                <ArrowRight size={15}/>
            </button>
            <button className='focus:ring-offset-slate-50&quot;, inline-flex animate-shimmer items-center justify-center rounded bg-[linear-gradient(110deg,#005EFF,45%,rgba(0,190,255,0.7),55%,#005EFF)] bg-[length:200%_100%] font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 px-6 py-2'>Sign Up</button>
        </nav>
    )
}

export default Navbar;