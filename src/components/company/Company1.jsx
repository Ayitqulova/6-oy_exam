export default function Company() {

    return(
        <section className="w-[80%] m-auto py-23 ">
                <div class=" relative flex flex-col gap-[20px]">
                    <span className="size-[16px] bg-[#FFD3AF] "></span>
                    <p className="font-medium text-[14px] leading-[143%] uppercase " >Company</p>
                    <h1 class=" w-[50%] text-5xl font-semibold leading-[58px]">Award-winning Company seen and used by millions around the world.</h1>
                    <p className=" w-[50%] font-normal text-[16px] leading-[151%] opacity-[0.87] " >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. </p>
                    <img className=" absolute top-0 right-0 "  src="public/images/Shapes (8).png" alt="" />
                </div>

                <div class="flex gap-[11px] pt-20 ">
                <img src="./images/Image 1.png" alt="image" />
                <img src="./images/Image 2.png" alt="image"  />
                <img src="./images/Image 3.png" alt="image" />
            </div>

        
        </section>
    )
}