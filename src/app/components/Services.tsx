import Title from "./shared/Title";

import AD from "../../../public/asserts/service/app.png"
import GR from "../../../public/asserts/service/graphic.png"
import UI from "../../../public/asserts/service/ui.png"
import WB from "../../../public/asserts/service/web.png"
import Image from "next/image";

const Services = () => {
    const serviceData = [
        {
            id: 1,
            title: "UI/UX",
            des:" Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
            image: UI,
        },
        {
            id: 2,
            title: "Web Design",
            des:" Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
            image: WB,
        },
        {
            id: 3,
            title: "App Design",
            des:" Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
            image: AD,
        },
        {
            id: 4,
            title: "Graphic Design ",
            des:" Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
            image: GR,
        },
    ]
    return (
        <div className="mt-10 mb-10 md:mb-16 md:mx-24 md:h-[584px]" id="services">

            <Title
                title="Services"
                subTitle=" Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
            lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
            pharetra"
            ></Title>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-6 mx-10 md:mx-0">
                {
                    serviceData.map((service) => (
                        <div className="rounded-xl px-8 py-10 text-black bg-white shadow-lg" key={service.id}>
                        <Image src={service.image} alt="" />
                        <h4 className="mt-5 mb-3 text-2xl font-semibold">{service.title}</h4>
                        <p className="font-normal text-sm">
                           {service.des}
                        </p>
                    </div>
                    ))}
          
               
            </div>
        </div>
    );
};

export default Services;