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
        <div className="flex items-center gap-3 p-3 w-[50%]">
            <Image src={logo} width={160} height={40} alt='company' className="rounded cursor-pointer"/>
            <div className="w-[60%]">
                <p>{company}</p>
                <p className="truncate">{description}</p>
                <div className="flex items-center gap-x-1">
                    <MapPin size={17} />
                    <span>{location}</span>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center border border-gray-400 w-12 h-14 rounded-md">
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