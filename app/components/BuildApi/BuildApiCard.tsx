"use client";
import Image from 'next/image';
import { cn } from '../../utils/helper';
import { BuildApiCardPropsType } from '../../utils/types';


export const BuildApiCard = ({ title, icon, description, background, color,iconBg,color2 }: BuildApiCardPropsType) => {
   
    return (
        <div className={cn("flex flex-col relative 'gap-[37px] items-center'", background, )}>
<Image
src='/images/bg.png'
className='h-full w-full'
width={100}
height={100}
alt='bg'
/>
            <div className="py-9 px-8 flex flex-col gap-4 absolute">
            <div className={cn('rounded-[40px] w-[40px] h-[40px] md:w-[56px] md:h-[56px] flex justify-center items-center',iconBg)}>
                {icon}
            </div>
                <h6 className={cn("text-xl lg:text-2xl  font-semibold ", color)}>
                    {title}
                </h6>
                <p className={cn("text-sm lg:text-lg", color2)}>
                    {description}
                </p>
            </div>
        </div>
        // </div>
    );


};
