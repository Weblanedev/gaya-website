import { ArrowCircleUp } from "@/app/assets";
import { cn } from "@/app/utils/helper"
import Image from "next/image"
type CardProps ={
    title: string;
    subTitle: string;
    img:string;
    extra?:{
        amount?: string;
        createdAt?: string;
        change?:string;

    };
}


const Card = ({ title, subTitle, img, extra }: CardProps) => {
    const check = JSON.stringify(extra) !== '{}';

    return (

        <div className="flex flex-col gap-4 bg-white rounded-2xl p-6">
            <div className="flex flex-col gap-4">

                <h4 className="text-gray-800 text-xl lg:text-2xl font-semibold">{title}</h4>
                <p className={cn("text-blue-200 text-sm lg:text-base", title?.includes('Purpose') && 'w-full xl:w-[501px]')}>{subTitle}</p>
            </div>

            {check &&
                <div>
                        <div className="flex items-baseline gap-1" 
                        >
                            <p className="text-gray-500 text-2xl font-medium">{  extra?.amount}</p>
                            <p className="text-gray-500 text-xs ml-1">
                                { extra?.createdAt}
                            </p>
                             {check &&

                                <ArrowCircleUp />
                            }
                            <p className="text-xs text-success">{extra?.change}</p>

                        </div>
                </div>
            }
            <Image
                src={img}
                width={100}
                height={100}
                className="w-full"
                alt={title.toString()}
            />
        </div>
    )
}
export default Card