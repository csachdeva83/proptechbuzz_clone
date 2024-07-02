import { ArrowUp, Bookmark, MapPin } from "lucide-react";
import Image from "next/image";

interface ILaunchProps {
    logo: any,
    company: string,
    description: string,
    likes: number,
    location: string,
    features: string[],
    founder1: {
        fullName: string,
        designation: string,
        img: any
    },
    founder2?: {
        fullName: string,
        designation: string,
        img: any
    }
}

const LaunchCard = ({logo, company, description, likes, location, features, founder1, founder2}: ILaunchProps) => {
    return (
        <div className='w-full flex items-center justify-start gap-x-3'>
            <div className='space-y-5 border border-gray-300 rounded-xl px-5 py-6 w-full lg:w-[75%]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-3'>
                            <Image
                                src={logo}
                                alt="logo"
                                width={80}
                                height={80}
                                className='border border-gray-300 rounded-lg' 
                            />
                            <div>
                                <span className='font-bold text-xl'>{company}</span>
                                <p className='text-sm text-gray-500'>{description}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <div className='bg-black w-fit p-2 rounded-lg'>
                                <ArrowUp size={20} strokeWidth={3} color='white' />
                            </div>
                            <span className='font-medium'>{likes}</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-2'>
                            {features.map((feature:string) => {
                                return (
                                    <span className='flex items-center gap-x-1 border border-gray-400 w-fit px-2 py-1 text-sm text-gray-800 rounded-full truncate'>
                                        <Bookmark className='text-gray-500 fill-gray-500' size={13}/>
                                        {feature}
                                    </span>
                                )
                            })}
                        </div>
                        <span className='flex items-center gap-x-1'>
                            <MapPin size={13} color='#005EFF'/>
                            {location}
                        </span>
                    </div>
            </div>
            <div className='bg-gradient-to-tr from-cyan-50 to-indigo-100 h-full rounded-xl w-1/4 hidden lg:flex flex-col items-start justify-center'>
                <div className='flex items-center gap-x-2 px-3 py-5 w-full'>
                    <Image src={founder1.img} alt='Founder1' width={30} height={30} className='border-2 border-[#FFD700] rounded-full w-10 h-10 object-cover'/>
                    <div className="w-full">
                        <p className='lg:text-sm xl:text-base font-semibold'>{founder1.fullName}</p>
                        <p className='lg:text-xs xl:text-sm text-gray-600 truncate'>{founder1.designation}</p>
                    </div>
                </div>
                {
                    founder2 && (
                        <div className='flex items-center gap-x-2 px-3 py-5 w-full'>
                            <Image src={founder2.img} alt='Founder2' width={30} height={30} className='border-2 border-[#FFD700] rounded-full w-10 h-10 object-cover'/>
                            <div className="w-full">
                                <p className='lg:text-sm xl:text-base font-semibold'>{founder2.fullName}</p>
                                <p className='lg:text-xs xl:text-sm text-gray-600 truncate'>{founder2.designation}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default LaunchCard;