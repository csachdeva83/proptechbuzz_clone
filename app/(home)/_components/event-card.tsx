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
        <div className='border border-gray-400 w-[32%] rounded-2xl space-y-5'>
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
            <div className='flex items-center justify-between p-3 border-t border-gray-300'>
                <div className='flex items-center gap-x-3'>
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
                    <p className='text-sm'>
                        <span className='text-[#005EFF]'>{peopleJoined}+</span> <span className='text-gray-500'>people going</span>
                    </p>
                </div>
                <button className='border border-gray-500 p-2 rounded-lg text-gray-500'>View Details</button>
            </div>
        </div>
    )
}

export default EventCard;