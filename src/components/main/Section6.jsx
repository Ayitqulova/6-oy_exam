export default function Section6(){

    return(
        <section className="bg-[#ECF8F9]">
            <div className="w-[80%] m-auto py-32 ">
                <span className=" w-[16px] h-[16px] bg-[#666DFF] mb-[19px] text-[#666DFF] ">hjk</span>
                <h1 className="font-semibold text-5xl leading-[121px] mb-12 ">Read our latest blogs & news</h1>

                <div className="flex gap-10">

                    <div className=" flex  w-[50%] bg-white">
                        <img src="public/images/Image (2).png" alt="" />

                        <div className="flex flex-col p-7 ">

                            <span className="font-medium text-[14px] leading-[143px] opacity-[0.6] -mt-[60px] ">Jan 19, 2021</span>
                            <h1 className=" w-[264px] font-bold text-2xl leading-[150%] text-[#232536] -mt-[50px] mb-[25px] " >Today’s best design trends for digital products</h1>
                            <span class=" flex gap-2 items-center font-normal text-[16px] leading-[28px] text-[#444CFC]">Read more <img class="items-center" src="./images/Icon (1).png" alt="" /></span>

                        </div>
                    </div>

                    <div className=" flex  w-[50%] bg-white">
                        <img src="public/images/Image (3).png" alt="" />

                        <div className="flex flex-col p-7 ">

                            <span className="font-medium text-[14px] leading-[143px] opacity-[0.6] -mt-[60px] ">Jan 19, 2021</span>
                            <h1 className=" w-[264px] font-bold text-2xl leading-[150%] text-[#232536] -mt-[50px] mb-[25px] " >A practical guide to building a brand strategy</h1>
                            <span class=" flex gap-2 items-center font-normal text-[16px] leading-[28px] text-[#444CFC]">Read more <img class="items-center" src="./images/Icon (1).png" alt="" /></span>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}