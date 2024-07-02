import FlairConnect from '@/public/flair_connect.jpg';
import Founder1 from '@/public/founder1.jpg';
import Founder2 from '@/public/founder2.jpg';
import { ArrowUp, Bookmark, MapPin } from "lucide-react";
import Image from "next/image";

const LaunchCard = () => {
    return (
        <div className='w-full flex items-center justify-start gap-x-3'>
            <div className='space-y-5 border border-gray-300 rounded-xl px-5 py-6 w-[75%]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-3'>
                            <Image
                                src={FlairConnect}
                                alt="Flair Connect"
                                width={80}
                                height={80}
                                className='border border-gray-300 rounded-lg' 
                            />
                            <div>
                                <span className='font-bold text-xl'>Flair Connect</span>
                                <p className='text-sm text-gray-500'>Automate rent & specials in Google Ads & GBP.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <div className='bg-black w-fit p-2 rounded-lg'>
                                <ArrowUp size={20} strokeWidth={3} color='white' />
                            </div>
                            <span className='font-medium'>15</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-2'>
                            <span className='flex items-center gap-x-1 border border-gray-400 w-fit px-2 py-1 text-sm text-gray-800 rounded-full truncate'>
                                <Bookmark className='text-gray-500 fill-gray-500' size={13}/>
                                Real Estate Data & Insights
                            </span>
                            <span className='flex items-center gap-x-1 border border-gray-400 w-fit px-2 py-1 text-sm text-gray-800 rounded-full truncate'>
                                <Bookmark className='text-gray-500 fill-gray-500' size={13}/>
                                Marketing & Advertising
                            </span>
                        </div>
                        <span className='flex items-center gap-x-1'>
                            <MapPin size={13} color='#005EFF'/>
                            North America
                        </span>
                    </div>
            </div>
            <div className='bg-gradient-to-tr from-cyan-50 to-indigo-100 h-full rounded-xl'>
                <div className='flex items-center gap-x-2 px-3 py-5'>
                    <Image src={Founder1} alt='Founder1' width={30} height={30} className='border-2 border-[#FFD700] rounded-full w-10 h-10 object-cover'/>
                    <div>
                        <p className='font-semibold'>Sudhanshu Kejriwal</p>
                        <p className='text-sm text-gray-600'>Co-Founder / Managing Diredtor</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-2  px-3 py-5'>
                    <Image src={Founder2} alt='Founder2' width={30} height={30} className='border-2 border-[#FFD700] rounded-full w-10 h-10 object-cover'/>
                    <div>
                        <p className='font-semibold'>Kartik Krishna</p>
                        <p className='text-sm text-gray-600'>Director / Co-Founder</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LaunchCard;