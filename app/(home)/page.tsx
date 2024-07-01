import { FlipWords } from '@/components/ui/flip-words';
import { Search } from 'lucide-react';
import Navbar from './_components/navbar';


const Home = () => {

    const words = ["Conversations", "Leaders", "Products", "News"];

    return (
        <main className='flex w-screen flex-col items-center border-2 border-green-800'>
            <Navbar />
            <section className='bg-gradient-to-bl from-slate-100 to-blue-100 flex flex-col items-center justify-center gap-y-6 w-[70%] rounded-2xl py-11'>
                <div className='flex flex-col items-center'>
                    <p className='text-5xl font-bold'>Discover Global PropTech</p>
                    <FlipWords className='text-5xl font-bold text-[#005EFF]' words={words} />
                </div>
                <div className='flex w-1/2 gap-2 bg-white items-center py-4 px-3 rounded-3xl shadow-lg'>
                    <Search size={15} color='#6B7280' className='cursor-pointer'/>
                    <input placeholder='What are you looking for?' className='w-full text-sm outline-none'  />
                </div>
                <div className='flex gap-x-10'>
                    <div className='flex flex-col'>
                        <span className='text-3xl font-semibold text-[#005EFF]'>874+</span>
                        <span className='font-medium text-gray-500'>Products</span>
                    </div>
                    <div className='border-[1px] border-gray-300'/>
                    <div className='flex flex-col'>
                        <span className='text-3xl font-semibold text-[#005EFF]'>5074+</span>
                        <span className='font-medium text-gray-500'>Members</span>
                    </div>
                    <div className='border-[1px] border-gray-300'/>
                    <div className='flex flex-col'>
                        <span className='text-3xl font-semibold text-[#005EFF]'>347.1K</span>
                        <span className='font-medium text-gray-500'>Views</span>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;

