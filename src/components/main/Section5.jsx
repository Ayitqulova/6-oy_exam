export default function Section5(){

    return(


        <section className="bg-[#f9f9ff]">

            <div className=" flex w-[80%] m-auto py-32 ">

                <div className="flex flex-col gap-4">
                        <div className="w-[60%] flex flex-col gap-4 ">
                    <span className="w-[16px] h-[16px] bg-[#666DFF]"></span>
                    <h1 className="text-5xl font-semibold leading-[121%] text-[#232536] ">Our customers love what we do</h1>
                    <h3 className=" font-medium text-[18px] leading-[156%] text-[#232536] ">Transform your idea into reality with finsweet</h3>
                    <p className="font-normal text-[16px] leading-[121%] text-[#232536] opacity-[0.87] " >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>

                <div className="flex gap-3">
                    <img src="public/images/Image 3 (1).png" alt="" />
                    <img src="public/images/Image 2 (1).png" alt="" />
                    <img src="public/images/Image 1 (1).png" alt="" />
                </div>
                <span className="font-medium text-[16px] leading-[150%] text-[#000]">30+ Customer Reviews</span>

                </div>


                <div className=" relative flex flex-col gap-[24px] w-[40%] p-10  bg-white">
                    <img className="absolute -left-4 top-0" src="public/images/Shapes (3).png" alt="" />
                    <h2 className="font-semibold text-2xl leading-[151%] opacity-[0.87] ">Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!</h2>

                    <div className="">
                        <div className=" relative flex gap-4 ">
                            <img src="public/images/Image 3 (1).png" alt="" />

                        <div className=" relative">
                            <h2 className="font-semibold text-[16px] leading-[157%] text-[#232536] opacity-[0.87] ">Johnny Andro</h2>
                            <p className="font-medium text-[14px] leading-[143%] text-[#232536] opacity-[0.6] ">Director, Company</p>
                        </div>
                            <img className="w-[112px] h-[25px] absolute right-0 bottom-0" src="public/images/Logo (6).png" alt="" />

                        </div>
                    </div>

                    <div className="relative">
                    <span className="w-[12px] h-[12px] bg-[#232536] rounded-full border absolute -bottom-20 right-[200px]"></span>
                    <span className="w-[12px] h-[12px] bg-[#232536] opacity-[20%] rounded-full border absolute -bottom-20 right-[180px] "></span>
                    <span className="w-[12px] h-[12px] bg-[#232536] opacity-[20%] rounded-full border absolute -bottom-20 right-[160px] "></span>
                    </div>

                </div>

            </div>

        </section>
    )
}