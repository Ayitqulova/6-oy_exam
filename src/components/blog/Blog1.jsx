import { Link } from "react-router-dom"
export default function Blog1() {

    return(
        <section className="w-[80%] m-auto py-15 ">
            <div className=" relative flex gap-[141px]">
                <div className=" w-[50%] flex flex-col gap-6 ">
                <p className="w-[18px] h-[18px] bg-[#FFD3AF]" ></p>
                <p className="font-medium text-[14px] leading-[142%] uppercase opacity-[0.87] tracking-[0.21em] ">TREnding</p>
                <h1 className="font-semibold text-5xl leading-[121%] text-[#232536]">Breaking the code How did we build our Figma plugin </h1>
                <p className="font-normal text-[16px] leading-[150%] text-[#232536] opacity-[0.87]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.</p>
                <div className="flex gap-3 items-center">
                  <Link to="/blog/bloginner" className="font-medium text-[16px] leading-[150%] opacity-[0.87] text-[#444cfc]" >Read More</Link>
                    <svg className="-mb-[5px]" width="25" height="8" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.3536 4.03544C24.5488 3.84018 24.5488 3.5236 24.3536 3.32833L21.1716 0.146353C20.9763 -0.0489095 20.6597 -0.0489095 20.4645 0.146353C20.2692 0.341615 20.2692 0.658197 20.4645 0.853459L23.2929 3.68189L20.4645 6.51031C20.2692 6.70558 20.2692 7.02216 20.4645 7.21742C20.6597 7.41268 20.9763 7.41268 21.1716 7.21742L24.3536 4.03544ZM0 3.68188L-4.37114e-08 4.18188L24 4.18189L24 3.68189L24 3.18189L4.37114e-08 3.18188L0 3.68188Z" fill="black" />
                    </svg>
                </div>

                <div className="flex gap-4">
                <img src="/images/Image (11).png" alt="Boy's picture" />
                <p className="font-normal text-[16px] leading-[150%] text-[#232536] opacity-[0.87]  ">Andrew Jonson</p>
                <p className="w-[16px] h-0 rotate-90 mt-3 border border-solid border-[rgba(0,0,0,0.2)] "></p>
                <p className="font-normal text-[16px] leading-[150%] text-[#232536] opacity-[0.6]  ">Posted on 27th January 2021</p>
                </div>
                <img src="/images/Image (12).png" alt="" />
            </div>

            <div className=" absolute  right-0 w-[515px] h-[620px] bg-[#FFDFC6]  p-[65px] flex flex-col gap-[48px] ">
                <img className=" w-[48px]  relative -top-16.5 left-100" src="/images/Shapes (10).png" alt="" />

               <div className="-mt-[75px]">
                 <h1 className="text-semibold text-[24px] leading-[150%] text-[#232536]" >Great design expectations prejudice in digital products in Next Year</h1>
               <div className="flex gap-4 items-center">
                 <img src="/images/Image (11).png" alt="Boy's picture" />
                 <div className="flex flex-col gap-1 text-start">
                <p className="font-normal text-[16px] leading-[150%] text-[#232536] opacity-[0.87]  ">Andrew Jonson</p>
                <p className="font-normal text-[16px] leading-[150%] text-[#232536] opacity-[0.6]  ">Posted on 27th January 2021</p>
                </div>
               </div>
               </div>


               <div>
                 <h1 className="text-semibold text-[24px] leading-[150%] text-[#232536]" >Great design expectations prejudice in digital products in Next Year</h1>
               <div className="flex gap-4 items-center">
                 <img src="/images/Image (15).png" alt="Boy's picture" />
                 <div className="flex flex-col gap-1 text-start">
                <p className="font-normal text-[16px] leading-[150%] text-[#232536] opacity-[0.87]  ">Mathew Jasele</p>
                <p className="font-normal text-[16px] leading-[150%] text-[#232536] opacity-[0.6]  ">Posted on 27th January 2021</p>
                </div>
               </div>
               </div>


               <div>
                 <h1 className="text-semibold text-[24px] leading-[150%] text-[#232536]" >Great design expectations prejudice in digital products in Next Year</h1>
               <div className="flex gap-4 items-center">
                 <img src="/images/Image (16).png" alt="Boy's picture" />
                 <div className="flex flex-col gap-1 text-start">
                <p className="font-normal text-[16px] leading-[150%] text-[#232536] opacity-[0.87]  ">Hussen Abakas</p>
                <p className="font-normal text-[16px] leading-[150%] text-[#232536] opacity-[0.6]  ">Posted on 27th January 2021</p>
                </div>
               </div>
               </div>


               
               
            </div>
            </div>
        </section>
    )
}