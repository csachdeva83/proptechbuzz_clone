import { FlipWords } from '@/components/ui/flip-words';
import { Search } from 'lucide-react';
import BigEstate from '../../public/big_estate.png';
import CoffeClozers from '../../public/coffee_clozers.png';
import Optiml from '../../public/optiml.png';
import REdistribute from '../../public/redistribute.png';
import Navbar from './_components/navbar';
import SpotlightCard from './_components/spotlight-card';


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
            <section className='w-[70%]'>
                <p className='text-3xl mb-4'>Product Spotlight</p>
                <div className='flex flex-wrap'>
                    <SpotlightCard
                        company='REdistribute'
                        like={14}
                        description='Direct Access, Unparalleled Insights -- Specializing in Direct Source Licensing of premium MLS Real Estate Data to organizations in the real estate industry'
                        location='North America'
                        logo={REdistribute}
                    />
                    <SpotlightCard
                        company='Coffee Clozers'
                        like={18}
                        description='Find Cash-Flowing Real Estate Fast'
                        location='North America'
                        logo={CoffeClozers}
                    />
                    <SpotlightCard
                        company='Optimal'
                        like={12}
                        description='Cost-efficient decarbonization & investment strategies and renovation action plans for Assets and Portfolios that adhere to sustainability goals and meet business requirements (SaaS, AI-powered and data-driven)'
                        location='Europe'
                        logo={Optiml}
                    />
                    <SpotlightCard
                        company='Big Estate'
                        like={20}
                        description='Automating your leads generation, management & nurturing through the power of AI.'
                        location='India'
                        logo={BigEstate}
                    />
                </div>

            </section>
        </main>
    )
}

export default Home;

