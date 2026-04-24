export default function Footer() {

    return(
        <section className="bg-[#ffe6d2]" >
            <div className=" w-[80%] h-[80px]  m-auto flex justify-between " >
           <div className="flex gap-5 items-center">
             <img src="/images/Logo (1).svg" alt="" />
            <p className="font-medium text-[16px] leading-[150%] " >©2021 Finsweet</p>
           </div>

            <div className="grid grid-cols-4 gap-5 items-center px-[50px] ">
                <img className="size-[16px] " src="/images/Negative.png" alt="" />
                <img className="size-[16px] " src="/images/Vector.png" alt="" />
                <img className="size-[16px] " src="/images/Insta.png" alt="" />
                <img className="size-[16px] " src="/images/Link.png" alt="" />
                
            </div>
            </div>
        </section>
    )
}
