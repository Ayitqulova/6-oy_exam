export default function Navbar(){
    return(
        <nav class="w-[80%] mx-auto flex items-center justify-between py-10 ">
                <img className="w-[122px]" src="/images//Logo.svg" alt="" />
                <div>
                    <ul class=" flex gap-8">
                        <li>
                            <a href="/">
                                <span class="text-white text-[16px] font-normal ">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="/service">
                                <span class="text-white opacity-60">Service</span>
                            </a>
                        </li>
                        <li>
                            <a href="/company">
                                <span class="text-white opacity-60">Company</span>
                            </a>
                        </li>
                        <li>
                            <a href="/career">
                                <span class="text-white opacity-60">Career</span>
                            </a>
                        </li>
                        <li>
                            <a href="/blog">
                                <span class="text-white opacity-60">Blog</span>
                            </a>
                        </li>
                        <li>
                            <a href="/contact us">
                                <span class="text-white opacity-60">Contact us</span>
                            </a>
                        </li>
                        <li>
                            <a href="/clone project">
                                <span class="flex gap-2 items-center text-[#FFD3AF] ">Clone project <img src="./images/Icon.png"
                                        alt="" /></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

