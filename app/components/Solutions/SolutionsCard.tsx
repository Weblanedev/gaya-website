"use client";

import { cn } from "@/app/utils/helper";
import { CardPropsType } from "@/app/utils/types";



export const SolutionsCard = ({ title, children, description, className, className2, pr }: CardPropsType) => {
    return (
        <div className={cn("rounded-[20px]  xl:w-full justify-between bg-card-des", className)}>

            <div className={cn("flex flex-col gap-2", className2)}>
                <h6 className={cn("text-[24px] text-gray-800 font-bold leading-[28.8px]")}>
                    {title}
                </h6>
                <p className={cn("font-normal text-gray-400 leading-[27px] text-lg", pr)}>
                    {description}
                </p>
            </div>
            <div>
                {children}
            </div>
        </div>
    );


};
