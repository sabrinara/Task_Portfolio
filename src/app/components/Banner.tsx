import Image from "next/image";
import Ban from "../../../public/asserts/banner.png";
import SocialIcon from "./shared/SocialIcon";

const Banner = () => {
    return (
        <div className="my-8 md:mx-9 md:h-[675px]" id="top">
            <div className="flex flex-col md:flex-row justify-center items-center mx-10 md:gap-16">
                <div className="w-full md:w-1/2 ">
                    <h1 className="font-medium text-[24px] mb-1">Hi I am</h1>
                    <h1 className="font-bold text-[32px] mb-4 text-[#FD6F00]">Muhammad Umair{" "}</h1>
                    <h1 className="text-6xl lg:text-[100px] font-bold mb-4">UI & UX <br />
                        <span className="lg:ml-40">Designer</span>
                    </h1>
                    <p className="font-extralight text-sm md:text-[21px] mb-2 leading-8">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>


                </div>
                <div className="w-full md:w-1/2 relative flex flex-col">
                    <div>
                        <Image src={Ban} alt="" className="w-fit md:h-[90vh]" />
                        <div className="bg-[#FD6F0099] absolute md:ml-auto py-4 lg:py-9 w-[15vh] md:w-[35vh] top-[6vh] md:top-[12vh] lg:top-[13vh] px-0 lg:px-10 right-[19vh] lg:right-[45vh]  translate-x-1/2 "></div>
                    </div>
                    <div className="mt-4 md:mr-14">
                        <SocialIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;