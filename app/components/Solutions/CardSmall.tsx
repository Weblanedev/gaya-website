/* eslint-disable  @typescript-eslint/no-explicit-any */
import Image from "next/image";
import {  WhatWeDoCardSmallPropsType } from "../../utils/types";

export const CardSmall = ({ data }: any) => {
    return (
        <div className="flex flex-col gap-8">
            {data?.map((item: WhatWeDoCardSmallPropsType, index: number) => <div className="grid grid-cols-1 gap-8 lg:hidden" key={index}>
                <div className="bg-white rounded-[32px] flex justify-center items-center
                p-3
                "
                // h-[342px]
                // lg:h-[593px]
                >

                    <Image
                        src={item?.image}
                        alt=""
                        className="w-full h-full"
                        // className={cn("w-full h-full", open === index ? 'block' : 'hidden')}

                        width={100}
                        height={100}
                    // width={287}
                    // height={186}
                    />

                </div>
                <div className="flex flex-col gap-2"
                >
                    <p className='text-xl font-[600] ' data-aos='fade-up' data-aos-duration='1000'>
                        {item?.title?.name}
                    </p>
                    <div className="flex flex-col gap-3 text-left ">
                        <p className="text-blue-300 text-sm">{item?.content?.subTitle}</p>

                      
                    </div>

                </div>

            </div>
            )}
        </div>
    );
};
