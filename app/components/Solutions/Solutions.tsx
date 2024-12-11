import { CardLarge } from './CardLarge';
import { CardSmall } from './CardSmall';

const Solutions = () => {

    return (
        <section className="py-20  px-3">
            <div className='container mx-auto overflow-hidden'>
                <div className='flex flex-col  gap-16'>
                    <div className='xl:w-[680px]
                    flex justify-center items-center
                    mx-auto
                    '
                    >
                        <h3 className="text-center text-gray-blue-800 font-bold  text-2xl lg:text-[48px] lg:leading-[67.2px]">Features You&apos;ll Love</h3>

                    </div>
                    <CardLarge
                    data={
                        [
                          
                            {
                                title: {
                                    number:"01",
                                    name: "Earn as You Spend"
                                },
                                content: {
                                    subTitle: 'Enjoy cashback and rewards on your everyday transactions.',
                                    
                                },
                                image: "/images/earn.png"
                            },
                            {
                                title: {
                                    number:"02",
                                    name: "Easy Onboarding"
                                },
                                content: {
                                    subTitle: 'Sign up in minutes and access financial freedom with just your phone.',
                                    
                                },
                                image: "/images/onboard.png"
                            },
                            {
                                title: {
                                    number:"03",
                                    name: "Safe and Secure"
                                },
                                content: {
                                    subTitle: 'Protect your transactions with advanced encryption and fraud detection technology.',
                                    
                                },
                                image: "/images/safe.png"
                            },
                        ]
                    }
                    />
                    <CardSmall
                    data={
                        [
                          
                            {
                                title: {
                                    number:"01",
                                    name: "Earn as You Spend"
                                },
                                content: {
                                    subTitle: 'Enjoy cashback and rewards on your everyday transactions.',
                                    
                                },
                                image: "/images/earn.png"
                            },
                            {
                                title: {
                                    number:"02",
                                    name: "Easy Onboarding"
                                },
                                content: {
                                    subTitle: 'Sign up in minutes and access financial freedom with just your phone.',
                                    
                                },
                                image: "/images/onboard.png"
                            },
                            {
                                title: {
                                    number:"03",
                                    name: "Safe and Secure"
                                },
                                content: {
                                    subTitle: 'Protect your transactions with advanced encryption and fraud detection technology.',
                                    
                                },
                                image: "/images/safe.png"
                            },
                        ]
                    }
                    />
                
                </div>
            </div>
        </section >
    )
}

export default Solutions
