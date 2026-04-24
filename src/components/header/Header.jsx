import Navbar from "./Navbar";

export default function Header(){
    return(
        <header class="bg-[#232536]">
            <Navbar />

            <div class="w-[80%] mx-auto flex flex-col py-24">
                <div class="flex items-center justify-between">
                    <div class="flex flex-col gap-6 ">
                        <h1 class="max-w-[600px] w-full text-white text-[56px] leading-[100%] font-semibold">Transform
                            Your Idea Into Reality with Finsweet</h1>
                        <p class="max-w-[470px] text-white opacity-60">The entire Finsweet team knows what's good with
                            Webflow and you can too with 1 week and a good attitude.</p>
                        <button class=" relative max-w-55 w-full flex items-center gap-2 text-white py-5 px-8 bg-[#444CFC]">Request
                            Quote <img src="./images/Icon.png" alt="" /> <img class="absolute left-0 -top-0" src="/src/images/Shapes (1).png" alt="" /></button>

                    </div>
                    <img class="w-[563px]" src="./images/Header Image.png" alt="" />
                </div>

                <div class="flex gap-8 items-center justify-between">
                    <div class="flex flex-col">
                        <p class="text-[14px] text-white opacity-60">Our Clients</p>
                        <p class="text-[18px] font-medium text-white">We've Worked with</p>
                    </div>

                    <div class="flex py-5 g-8">
                        <img src="./images/Logo (1).png" alt="" />
                        <img src="./images/Logo (2).png" alt="" />
                        <img src="./images/Logo (3).png" alt="" />
                        <img src="./images/Logo (4).png" alt="" />
                        <img src="./images/Logo (5).png" alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}