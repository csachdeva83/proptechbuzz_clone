import Image from "next/image";


interface StoryProps {
    title: string;
    storyImage: any;
}

const StoryCard = ({title, storyImage}: StoryProps) => {

    return (
        <div className='border border-gray-400 w-full md:w-[32%] pb-2 rounded-2xl space-y-5 relative'>
            <Image
                src={storyImage}
                width={1080}
                height={1080}
                alt='story'
                className='w-full h-36 object-cover rounded-t-2xl cursor-pointer'
            />
            <p className='font-bold px-3'>{title}</p>
        </div>
    )
}

export default StoryCard;