import { MapPin } from "lucide-react";
import Image from "next/image";

interface CardProps {
    company: string,
    description: string,
    location: string,
    like: number,
    logo: any
}

const SpotlightCard = ({company, description, location, like, logo}: CardProps) => {
    return (
        <div className="flex items-center justify-between gap-3 p-3 w-full lg:w-[49%] border border-gray-300 rounded-xl">
            <div className="flex items-center text-center sm:text-start flex-col sm:flex-row gap-x-3 w-full sm:w-[60%] gap-y-3 sm:gap-y-0">
                <Image src={logo} width={160} height={40} alt='company' className="w-60 sm:w-32 md:w-40 rounded-lg cursor-pointer"/>
                <div className="w-full space-y-1 sm:space-y-0">
                    <p className="font-semibold">{company}</p>
                    <p className="text-sm xl:text-base truncate">{description}</p>
                    <div className="flex items-center justify-center sm:justify-start gap-x-1">
                        <MapPin size={17} />
                        <span className="text-sm xl:text-base">{location}</span>
                    </div>
                </div>
            </div>
            <div className="hidden sm:flex lg:hidden flex-col items-center justify-center border border-gray-400 w-12 h-14 rounded-md">
                <Image 
                    src='./up-arrow.svg' 
                    className="cursor-pointer"
                    width={20} 
                    height={20} 
                    alt='like'
                />
                <span>{like}</span>
            </div>
        </div>
    )
}

export default SpotlightCard;