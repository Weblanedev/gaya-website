"use client"
import { Bell, PhoneIcon, Star } from '@/app/assets';

import { BuildApiCard } from './BuildApiCard';

const Api = () => {

    return (
        <section className="py-4 px-3 ">
            <div className='container mx-auto lg:w-[600px]'>
                <div className='flex flex-col gap-16'>

                    <h3 className="text-gray-blue-800 font-semibold text-2xl lg:text-[56px] lg:leading-[67.2px] text-center ">Why Choose <span className='text-gray-blue-400'>Gaya?</span></h3>


                    <div className='flex flex-col'>

                        <BuildApiCard
                            title='Zero Hidden Charges'
                            description='Transparent pricing, so you keep more of what you earn.'
                            background='bg-sky-blue-400 rounded-tl-[40px] rounded-tr-[40px] border-[1px] border-background h-[250px]'
                            color='text-white'
                            icon={<Star />}
                            iconBg="bg-sky-blue-300"
                            color2="text-blue-50"
                        />
                        <BuildApiCard
                            title='Smart Notifications'
                            description='Real-time updates for every transaction.'
                            background='bg-blue-700 rounded-tl-[40px] rounded-tr-[40px] mt-[-40px] border-[1px] border-background h-[250px]'
                            color='text-white'
                            icon={<Bell />}
                            iconBg="bg-blue-500"
                            color2="text-blue-50"
                        />
                        <BuildApiCard

                            title='Customer-First Support'
                            description='Dedicated support teams to resolve queries 24/7.'
                            background='bg-blue-800 rounded-[40px] mt-[-40px] border-[1px] border-background h-[250px]'
                            color='text-white'
                            icon={<PhoneIcon />}
                            iconBg="bg-blue-400"
                            color2="text-blue-50"
                        />
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Api
