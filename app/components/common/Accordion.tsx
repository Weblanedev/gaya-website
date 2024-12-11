/* eslint-disable  @typescript-eslint/no-explicit-any */

"use client"
import { cn } from "@/app/utils/helper";
// import Image from "next/image";



const Accordion = ({ title, content, index, open, onOpen }: any) => {

    const { name, number } = title
    const { subTitle } = content

    const handleToggle = () => onOpen && onOpen(index)

    const activeColor = open ? 'bg-primary' : 'bg-gray-0'
    const active = open ? 'flex flex-col' : 'hidden'

    return (
        <div className="flex gap-4 w-full">
            <div className={cn("flex justify-center items-center bg-primary w-[48px] h-[48px] rounded-full", activeColor)}>
                <p
                    className="
                        text-[20px] font-medium leading-8 text-white
                        "
                >

                    {number}
                </p>
            </div>
            <div className='flex flex-col border-b-[1px] border-b-gray-0 w-[90%]
         ' data-aos='fade-up'

            >
                <div className='flex gap-4 items-center cursor-pointer overflow-hidden'
                    onClick={() => handleToggle()}
                >

                    <p className='text-[15px] lg:text-[24px] leading-[24px] lg:leading-[40px] font-medium text-gray-cool' data-aos='fade-up' data-aos-duration='1000' >
                        {name}
                    </p>


                </div>

                <div className={cn("pb-4 pr-16  gap-3 text-left ", active)}>

                    <p className="text-blue-300 text-base">{subTitle}</p>
                
                </div>
            </div>
        </div>
    );
};

export default Accordion;