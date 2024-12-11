/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client"

import { cn } from "@/app/utils/helper";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { imgsType, WhatWeDoCardSmallPropsType } from "../../utils/types";
import Accordion from "../common/Accordion";

export const CardLarge = ({ data }: any) => {

    const [open, setOpen] = useState<number>()
    const toggle = (id: SetStateAction<number | undefined>) => setOpen(id)
    useEffect(() => {
        setOpen(0)
    }, [])

    const img = data?.map((i: imgsType) => i?.image)

    return (
        <div className="hidden lg:grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-9 justify-center">
                {data?.map((item: WhatWeDoCardSmallPropsType, index: number) =>
                    <Accordion
                        key={index}
                        index={index}
                        title={item?.title}
                        content={item?.content}
                        onOpen={toggle}
                        open={open === index}
                    />



                )
                }
            </div>
            <div className="
            bg-white
            rounded-[32px] 
            flex justify-center items-center
            p-3
            "
            // h-[342px] lg:h-[593px]
            >
                {img?.map((item: string | StaticImport, index: number) =>
                    <Image
                        key={index}
                        src={item}
                        alt=""
                        className={cn("w-full h-full", open === index ? 'block' : 'hidden')}

                        width={100}
                        height={100}
                        data-aos="fade-up"

                    />
                )}
            </div>
        </div >
    )
}
