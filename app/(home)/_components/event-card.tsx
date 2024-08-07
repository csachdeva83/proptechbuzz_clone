import Person1 from '@/public/person-1.jpg';
import Person2 from '@/public/person-2.jpg';
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";


interface EventProps {
    title: string;
    date: string;
    location: string;
    peopleJoined: number;
    eventImage: any;
}

const EventCard = ({title, date, location, peopleJoined, eventImage}: EventProps) => {

    return (
        <div className='flex flex-col justify-between border border-gray-400 w-full md:w-[32%] lg:h-auto xl:h-96 rounded-2xl space-y-5'>
            <div className='space-y-2'>
                <Image
                    src={eventImage}
                    width={1080}
                    height={1080}
                    alt='event'
                    className='w-full h-36 object-cover rounded-t-2xl cursor-pointer'
                />
                <div className='px-3 space-y-3'>
                    <p className='font-bold'>{title}</p>
                    <div className='flex items-center gap-x-2'>
                        <Calendar size={17} color='#005EFF'/>
                        <span className='text-gray-500 text-sm'>{date}</span>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <MapPin size={17} color='#005EFF'/>
                        <span className='text-gray-500 text-sm'>{location}</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row md:flex-col lg:flex-row gap-y-3 lg:gap-y-0 items-center justify-between p-3 border-t border-gray-300 w-full'>
                <div className='flex items-center gap-x-2 xl:gap-x-3'>
                    <div className='flex relative -space-x-4'>
                        <Image 
                            src={Person1}
                            width={70}
                            height={70}
                            alt="person1"
                            className='h-9 w-9 min-w-[36px] rounded-full border-2 border-white object-cover'
                        />
                        <Image 
                            src={Person2}
                            width={70}
                            height={70}
                            alt="person2"
                            className='h-9 w-9 min-w-[36px] rounded-full border-2 border-white object-cover'
                        />
                    </div>
                    <p className='text-center text-xs xl:text-sm'>
                        <span className='text-[#005EFF] text-sm '>{peopleJoined}+</span> <span className='text-gray-500'>people going</span>
                    </p>
                </div>
                <button className='w-fit md:w-full lg:w-fit border border-gray-500 p-2 rounded-lg text-gray-500 text-sm lg:text-xs xl:text-base'>View Details</button>
            </div>
        </div>
    )
}

export default EventCard;