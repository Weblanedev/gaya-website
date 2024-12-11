
import {  Sparkle, Sparkle2 } from "@/app/assets"
import Card from "./Card"


const WhatWeDo = () => {
    return (
        <section className="bg-background  py-[80px] px-3 xl:px-0">
            <div className="container mx-auto ">
                <div className="flex justify-center items-center gap-[8px]">
                    <Sparkle />
                    <h2 className="text-gray-blue-800 font-semibold
                    text-[32px] leading-[35.2px]
                    lg:text-[48px] lg:leading-[67.2px] px-4 lg:px-0"
                        data-aos="fade-up"
                    >What we offer</h2>
                    <Sparkle2 />

                </div>

                <div className="flex flex-col gap-8 lg:gap-4 mt-10">

                    <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8 lg:gap-4">
                        <Card
                            title="Instant Transfers"
                            subTitle="Send money to anyone, anywhere, anytime, with no hidden charges. It’s fast, secure, and accessible from your fingertips."
                            img="/images/instant-transfers.png"
                                 extra={{}}
                        />
                        <Card
                            title="Smart Spending Analytics"
                            subTitle="Stay in control of your finances with detailed spending insights. Identify patterns, manage budgets, and plan ahead."
                            img="/images/spending.png"
                                 extra={{}}
                        />
                        <Card
                            title="Bill Payments"
                            subTitle="Pay your bills on the go. Gaya simplifies utility, subscription, and other payments, ensuring nothing interrupts your day-to-day activities."
                            img="/images/bill.png"
                                 extra={{}}
                        />

                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-4">
                        <Card
                            title="Loan Services"
                            subTitle="Access flexible microloans when you need them the most. Our quick and easy loan services are designed to support your financial goals, whether for emergencies or planned expenses."
                            img="/images/loan.png"
                            extra={{}}
                        />
                        <Card
                            title="Save with Purpose"
                            subTitle="Build a better financial future with our high-yield savings features. Set goals, track progress, and achieve more while earning competitive interest rates."
                            img="/images/save.png"
                            extra={{
                                amount: "₦16,000",
                                createdAt: 'Today',
                                change: "10% (₦1,600)"
                            }}
                        />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default WhatWeDo


