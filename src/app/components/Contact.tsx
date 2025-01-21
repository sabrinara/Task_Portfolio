import Title from "./shared/Title";


const Contact = () => {
    return (
        <div className="mt-10 mb-10 md:mb-16 md:mx-20 md:h-[337px]" id="contact">
            <Title
                title="Lets Design Together"
                subTitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
            ></Title>


            <div className="flex items-center mt-12 mb-24 justify-center font-normal mx-10">
                <input className="w-1/2 text-sm py-3 px-4 md:py-5 md:px-6 rounded-md border border-[#AFAFAF]" type="email" name="" placeholder="Enter Your Email" id="" />
                <button className="py-3 px-4 md:py-5 rounded-md whitespace-nowrap bg-[#FD6F00] ml-4 text-white">Contact Me </button>
            </div>
        </div>
    );
};

export default Contact;