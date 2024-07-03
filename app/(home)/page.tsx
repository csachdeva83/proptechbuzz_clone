import { FlipWords } from '@/components/ui/flip-words';
import Event1 from '@/public/event1.jpg';
import Event2 from '@/public/event2.jpg';
import Event3 from '@/public/event3.jpg';
import FlairConnect from '@/public/flair_connect.jpg';
import Founder1 from '@/public/founder1.jpg';
import Founder2 from '@/public/founder2.jpg';
import Story1 from '@/public/story1.jpg';
import Story2 from '@/public/story2.jpg';
import Story3 from '@/public/story3.jpg';
import { ArrowRight, MousePointerClick, Search } from 'lucide-react';
import Image from 'next/image';
import BigEstate from '../../public/big_estate.png';
import CoffeClozers from '../../public/coffee_clozers.png';
import Optiml from '../../public/optiml.png';
import REdistribute from '../../public/redistribute.png';
import EventCard from './_components/event-card';
import Footer from './_components/footer';
import LaunchCard from './_components/launch-card';
import SpotlightCard from './_components/spotlight-card';
import StoryCard from './_components/story-card';

const Home = () => {

    const words = ["Conversations", "Leaders", "Products", "News"];

    return (
        <main className='w-full max-w-full flex flex-col items-center justify-center border border-green-600'>
            {/* <Navbar /> */}
            <article className='my-10 lg:my-14 xl:my-20 w-[93%] sm:w-[90%] lg:w-[85%] xl:w-[70%] flex flex-col gap-y-10 md:gap-y-12 lg:gap-y-14 xl:gap-y-20'>
                <section className='bg-gradient-to-bl from-slate-100 to-blue-100 flex flex-col items-center justify-center gap-y-6 w-full rounded-2xl py-11'>
                    <div className='flex flex-col items-center text-center'>
                        <p className='text-3xl sm:text-4xl xl:text-5xl font-bold'>Discover Global PropTech</p>
                        <FlipWords className='text-3xl sm:text-4xl xl:text-5xl font-bold text-[#005EFF]' words={words} />
                    </div>
                    <div className='flex w-4/5 sm:w-3/5 md:w-1/2 gap-2 bg-white items-center py-3 px-2 lg:py-4 lg:px-3 rounded-3xl shadow-lg'>
                        <Search size={15} color='#6B7280' className='cursor-pointer'/>
                        <input placeholder='What are you looking for?' className='w-full text-sm outline-none'  />
                    </div>
                    <div className='flex gap-x-7 sm:gap-x-10'>
                        <div className='flex flex-col items-center'>
                            <span className='text-sm sm:text-xl lg:text-3xl font-semibold text-[#005EFF]'>874+</span>
                            <span className='text-sm sm:text-base font-medium text-gray-500'>Products</span>
                        </div>
                        <div className='border-[1px] border-gray-300'/>
                        <div className='flex flex-col items-center'>
                            <span className='text-sm sm:text-xl lg:text-3xl font-semibold text-[#005EFF]'>5074+</span>
                            <span className='text-sm sm:text-base font-medium text-gray-500'>Members</span>
                        </div>
                        <div className='border-[1px] border-gray-300'/>
                        <div className='flex flex-col items-center'>
                            <span className='text-sm sm:text-xl lg:text-3xl font-semibold text-[#005EFF]'>347.1K</span>
                            <span className='text-sm sm:text-base font-medium text-gray-500'>Views</span>
                        </div>
                    </div>
                </section>
                <section className='w-full'>
                    <p className='text-2xl font-semibold md:text-3xl mb-4'>Product Spotlight</p>
                    <div className='flex flex-wrap justify-between gap-y-3'>
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
                <section  className='w-full flex flex-col items-center gap-y-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl p-5'>
                    <p className='text-[#005EFF] font-bold text-center text-xl lg:text-lg'>HOW TO LAUNCH PRODUCTS ON PROPTECHBUZZ FOR FREE?</p>
                    <div className='flex items-center justify-between flex-col md:flex-row gap-y-3 sm:gap-y-0'>
                        <div className='flex flex-col items-center justify-center w-full md:w-[30%] h-40 gap-y-2'>
                            <div className='flex items-center justify-center h-20 w-20 md:h-15 md:w-15 lg:h-20 lg:w-20'>
                                <Image 
                                    src='./product.svg'
                                    width={90}
                                    height={90}
                                    alt='product'
                                    className='object-contain'
                                />
                            </div>
                            <span className='font-semibold text-lg md:text-sm lg:text-lg'>Submit Product with us</span>
                            <p className='text-center text-sm md:text-xs lg:text-sm text-gray-500'>Submit your product on PropTechBuzz <span className='text-[#005EFF] font-semibold'>for free</span>.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full md:w-[30%] h-40 gap-y-2'>
                            <div className='flex items-center justify-center h-20 w-20 md:h-15 md:w-15 lg:h-20 lg:w-20'>
                                <Image 
                                    src='./launch.svg'
                                    width={90}
                                    height={90}
                                    alt='product'
                                    className='object-contain'
                                />
                            </div>
                            <span className='font-semibold text-lg md:text-sm lg:text-lg'>Launch Day</span>
                            <p className='text-center text-sm md:text-xs lg:text-sm text-gray-500'>Every day we <span className='text-[#005EFF] font-semibold'>select and launch</span> 8-12 Products that have submitted with us.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full md:w-[30%] h-40 gap-y-2 mt-2 sm:mt-0'>
                            <div className='flex items-center justify-center h-20 w-20 md:h-15 md:w-15 lg:h-20 lg:w-20'>
                                <Image 
                                    src='./attention.svg'
                                    width={60}
                                    height={60}
                                    alt='product'
                                    className='md:w-[70px] md:h-[70px] object-contain'
                                />
                            </div>
                            <span className='font-semibold text-lg md:text-sm lg:text-lg'>Get Attention</span>
                            <p className='text-center text-sm md:text-xs lg:text-sm text-gray-500'>Reach <span className='text-[#005EFF] font-semibold'>100K global audience</span> weekly, with a chance to win product spotlight based on votes.</p>
                        </div>
                    </div>
                    <div className='flex items-center flex-col sm:flex-row gap-x-3 mt-4 text-sm lg:text-base gap-y-3 sm:gap-y-0'>
                        <button className='border border-gray-400 font-semibold px-6 py-2 gap-x-2 rounded w-full sm:w-fit'>Learn More about How it Works</button>
                        <button className='bg-[#005EFF] flex items-center justify-center text-white font-semibold px-6 py-2 gap-x-2 rounded w-full sm:w-fit'>
                            Submit Your Product
                            <MousePointerClick size={18} color='white'/>
                        </button>
                    </div>
                </section>
                <section className='w-full'>
                    <p className='text-2xl font-semibold lg:text-3xl mb-4'>Today PropTech Launches!</p>
                    <div className='flex flex-wrap justify-between gap-y-3'>
                        <LaunchCard 
                            logo={FlairConnect}
                            company='Flair Connect'
                            description='Automate rent & specials in Google Ads & GBP.'
                            location='North America'
                            likes={15}
                            features={[
                                'Real Estate Data & Insights',
                                'Marketing & Advertising',
                                'Real Estate Data & Insights',
                                'Marketing & Advertising',
                                'Real Estate Data & Insights',
                                'Marketing & Advertising'
                            ]}
                            founder1 = {{
                                fullName: 'Sudhanshu Kejriwal',
                                designation: 'Co-Founder',
                                img: Founder1
                            }}
                            founder2 = {{
                                fullName: 'Kartik Krishna',
                                designation: 'Director',
                                img: Founder2
                            }}
                        />
                        <LaunchCard 
                            logo={FlairConnect}
                            company='Flair Connect'
                            description='Automate rent & specials in Google Ads & GBP.'
                            location='North America'
                            likes={15}
                            features={[
                                'Real Estate Data & Insights',
                                'Marketing & Advertising'
                            ]}
                            founder1 = {{
                                fullName: 'Sudhanshu Kejriwal',
                                designation: 'Co-Founder',
                                img: Founder1
                            }}
                            founder2 = {{
                                fullName: 'Kartik Krishna',
                                designation: 'Director',
                                img: Founder2
                            }}
                        />
                        <LaunchCard 
                            logo={FlairConnect}
                            company='Flair Connect'
                            description='Automate rent & specials in Google Ads & GBP.'
                            location='North America'
                            likes={15}
                            features={[
                                'Real Estate Data & Insights',
                                'Marketing & Advertising'
                            ]}
                            founder1 = {{
                                fullName: 'Sudhanshu Kejriwal',
                                designation: 'Co-Founder',
                                img: Founder1
                            }}
                            founder2 = {{
                                fullName: 'Kartik Krishna',
                                designation: 'Director',
                                img: Founder2
                            }}
                        />
                    </div>
                </section>
                <section className='w-full'>
                    <div className='flex items-center justify-between mb-4 gap-x-3'>
                        <p className='text-2xl font-semibold md:text-3xl'>Global PropTech Events</p>
                        <p className='flex items-center gap-x-1 sm:gap-x-2 text-[#005EFF]'>
                            <span className='w-fit sm:block hidden text-sm cursor-pointer'>See more events</span>
                            <span className='w-fit text-xs sm:hidden cursor-pointer'>Explore</span>
                            <ArrowRight size={15}/>
                        </p>
                    </div>
                    <div className='flex flex-wrap justify-between gap-y-3 md:gap-y-0'>
                        <EventCard
                            title='LIVE Webinar PropTechBuzz on Real estate innovation and value creation in operationally intensive sectors' 
                            date='July 03, 2024'
                            location='Online'
                            peopleJoined={83}
                            eventImage={Event1}
                        />
                        <EventCard
                            title='Inman Connect' 
                            date='30th July - 1st August, 2024'
                            location='Las Vegas, USA'
                            peopleJoined={83}
                            eventImage={Event2}

                        />
                        <EventCard
                            title='CREtech Virtual Demo Day October 2024' 
                            date='30th July - 1st August, 2024'
                            location='Sydney, Australia'
                            peopleJoined={83}
                            eventImage={Event3}
                        />
                    </div>
                </section>
                <section className='w-full'>
                    <div className='flex items-center justify-between mb-4 gap-x-3'>
                        <p className='text-2xl font-semibold md:text-3xl'>Global PropTech Stories</p>
                        <p className='flex items-center gap-x-1 sm:gap-x-2 text-[#005EFF]'>
                            <span className='w-fit sm:block hidden text-sm cursor-pointer'>See more news</span>
                            <span className='w-fit text-xs sm:hidden cursor-pointer'>Explore</span>
                            <ArrowRight size={15}/>
                        </p>
                    </div>
                    <div className='flex flex-wrap justify-between gap-y-3 md:gap-y-0'>
                        <StoryCard
                            title='The Vision Behind Prudence’s New $80 Million Fund Totaling $230 Million' 
                            storyImage={Story1}
                        />
                        <StoryCard
                            title='Costar’s $1.6B acquisition of Matterport: How did proptech leaders perceive this news?' 
                            storyImage={Story2}

                        />
                        <StoryCard
                            title='Modern Agent, Modern Interactions: How Ask the Agent is Transforming Real Estate Client Engagement with Interactive Videos' 
                            storyImage={Story3}
                        />
                    </div>
                </section>

                {/* <section className='bg-[#005EFF] flex items-center gap-x-11 w-full h-72 rounded-2xl'>
                    <Image src={LeadindForum} alt='leading forum' width={900} height={547} className='h-full object-cover' />
                    <div className='flex items-center justify-center flex-col gap-y-5 p-20'>
                        <p className='text-white font-bold text-center text-2xl'>The leading online forum where the global proptech & real estate community engages.</p>
                        <p className='text-white text-center text-sm'>From Cambodia to Canada - one place where global proptech & real estate professionals connect, converse and collaborate.</p>
                        <div className='flex items-center gap-x-7'>
                            <div className='flex flex-col items-center'>
                                <span className='text-2xl font-semibold text-white'>779+</span>
                                <span className='text-white text-sm'>Posts</span>
                            </div>
                            <div className="w-px self-stretch bg-gray-300" />
                            <div className='flex flex-col items-center'>
                                <span className='text-2xl font-semibold text-white'>3077+</span>
                                <span className='text-white text-sm'>Members</span>
                            </div>
                            <div className="w-px self-stretch bg-gray-300" />
                            <div className='flex flex-col items-center'>
                                <span className='text-2xl font-semibold text-[#FFD700]'>483+</span>
                                <span className='text-[#FFD700] text-sm flex items-center gap-x-2'>
                                    <Image src='./vip.svg' width={15} height={15} alt='VIP' />
                                    VIP Members
                                </span>
                            </div>
                            <div className="w-px self-stretch bg-gray-300" />
                            <div className='flex flex-col items-center'>
                                <span className='text-2xl font-semibold text-white'>29.4K</span>
                                <span className='text-white text-sm'>Views</span>
                            </div>
                        </div>
                        <button className='flex items-center gap-1 px-8 py-2 bg-[#FFA804] rounded text-white font-medium'>
                            Join Discussion
                            <ChevronDown size={15} className='-rotate-90'/>
                        </button>
                    </div>
                </section> */}
            </article>
            <Footer />
        </main>
    )
}

export default Home;

