import Image from "next/image";
import SocialIcon from "./shared/SocialIcon";
import Navlogo from "../../../public/asserts/Subtract.png";

const Footer = () => {
    return (
        <div className="flex flex-col gap-6 mt-10">
            <div className="flex justify-center items-center ">
                <Image
                    src={Navlogo}
                    alt="mumair"
                    className="w-[34px] md:w-[67px] h-[34px] md:h-[67px] cursor-pointer mr-1 md:mr-4"
                />
                <h1 className="text-xl md:text-3xl">
                    <span className="font-medium text-2xl md:text-5xl">M</span>umair
                </h1>
            </div>

            <div className="my-4 md:my-6" >
                <ul className="flex justify-center items-center gap-10">
                    <li>
                        <a href="#top">Home</a>
                    </li>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>


            <div className="mb-6">
                <SocialIcon />
            </div>
            <div>
                <h1 className="py-4 bg-[#545454] text-center font-light text-white ">© 2025 <span className="text-[#FD6F00]">Mumair</span> All Rights Reserved , Inc.</h1>

            </div>
        </div>
    );
};

export default Footer;