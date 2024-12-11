import Image from "next/image";
import { Logo } from "../assets";
import Button from "./common/Button";


const Hero = () => {
    return (
        <header
            className="h-fit bg-foreground
            "
  
        >
<div className="h-[900px] md:h-[1200px] lg:h-[700px] 2xl:h-[800px]
            hidden lg:block
            ">

            <Image
            src="/images/hero-pattern.png"
            // src="/images/hero-pattern2.png"
            width={100}
            height={100}
            className="
            w-full 
            h-full
            
            "
            // h-[880px] md:h-[700px]  
            alt=""
            />
            </div>
            <div className="h-[800px] md:h-[1080px] 
            lg:hidden block
            ">

            <Image
            src="/images/hero-pattern-mobile.png"
            width={100}
            height={100}
            className="
            w-full 
            h-full 
            "
            // h-[900px] md:h-[1200px] lg:h-[700px]
            // h-[880px] md:h-[700px]  
            alt=""
            />
            </div>
            <div className="container mx-auto pt-7 px-7 absolute top-0 left-0 right-0">
                   <div className=" 
            h-fit flex flex-col gap-20">
                <div className="flex justify-between items-center 
                    rounded-[20px] w-full
                    "
             
                >
                    <Logo />
                    <Button text="Contact Us" />
                </div>
                <div className="
                grid lg:grid-cols-2
                gap-14 ">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-3 lg:gap-6">

                                <h1 className=" text-white font-bold
                        text-[30px] leading-[33px] lg:text-[58px] lg:leading-[61.6px]">Banking Designed <span className="text-sky-blue-100">
                                        for Your Life
                                    </span>
                                </h1>
                                <p className="lg:w-[477px] text-base text-gray-blue-50">Experience a modern approach to banking that empowers your financial decisions with convenience, innovation, and trust.</p>
                            </div>
                            <div>

                                <Button text="Download App (Coming soon)"
                                    style="bg-gray-blue-50 text-sky-blue-400 border-[1px] border-sky-blue-100 "
                                />
                            </div>
                        </div>
                        <div
                        >
                            
                            <Image src="/images/hero.png" alt="hero"
                                width={100} height={100}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                    </div>
            </div>

        </header>
    )
}

export default Hero