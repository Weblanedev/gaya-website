
import Link from "next/link";
import { Facebook, FooterBg, FooterBgMobile, Instagram,  LinkedIn,  Twitter } from "../assets";
import Button from "./common/Button";

const Footer = () => {
    return (
        <footer className="px-3 "
        >
           

                <div className="container mx-auto bg-foreground relative rounded-[28px] h-[502px] ">

                    <div className="flex flex-col gap-4 lg:gap-8 absolute top-0 justify-start
                        p-10 lg:p-20
                            lg:w-[705px]
                        ">
                            <h5 className=" text-white font-bold
                             text-2xl lg:text-[58px] lg:leading-[61.6px]">Empowering <span className="text-sky-blue-100">
                                    Entrepreneurs and SMEs
                                </span>
                            </h5>
                            {/* <h3 className="text-primary-0 font-extrabold text-[32px] leading-[38.4px] lg:text-[48px] lg:leading-[57.6px]">Get Started Now</h3> */}
                            <p className="text-sky-blue-25
                            text-[14px] leading-[21px]
                            lg:text-lg">From instant payments to insightful analytics, Gaya supports your growth with tools designed to scale your business.</p>
                            <div>

                                <Button text="Contact Us"
                                    style="bg-gray-blue-50 text-sky-blue-400 font-medium text-[16px] leading-[24px] border-[1px] border-[#B2CCFF] "
                                />
                            </div>
                        </div>
                    <div className="w-full
                                    h-[502px] rounded-[28px] ">

                                        <FooterBg />
                                        <FooterBgMobile />
                    </div>
           
                </div>
         
            <div className="container mx-auto pt-20 pb-8 px-7">
                <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
                    <div className="flex flex-wrap lg:flex-nowrap items-center gap-6">
                        <Link href='#' className="text-base font-medium text-gray-blue-800">Terms of service</Link>
                        <Link href='#' className="text-base font-medium text-gray-blue-800">Privacy Policy</Link>
                        <p className="text-base font-medium text-gray-blue-800">Email:{" "}<span className="underline">support@gayamicrofinance.com</span></p>
                        {/* <Logo width='130' height='32' /> */}
                        {/* <p className="text-gray-0 text-lg
                            leading-[27.32px]
                            text-center opacity-50">© {new Date().getFullYear()}  Pactis. All rights reserved. </p> */}

                    </div>
                        <div className="flex gap-6 md:justify-end mt-6 lg:mt-0">
                            <Facebook />
                            <Twitter />
                            <Instagram />
                            <LinkedIn/>
                        </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer