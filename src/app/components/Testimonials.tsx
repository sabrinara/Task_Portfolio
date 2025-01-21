import Image from 'next/image';
import Title from './shared/Title';
import Tes from "../../../public/asserts/test-1.png";
import Tes2 from "../../../public/asserts/test-2.png";
import Tes3 from "../../../public/asserts/test-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";


const Testimonials = ({ isDark }) => {
  const testimonialData = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      image: Tes,
      name: "Name 1",
      position: "CTO",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      image: Tes2,
      name: "Name 2",
      position: "Team Leader",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      image: Tes3,
      name: "Name 3",
      position: "CEO",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      image: Tes3,
      name: "Name 3",
      position: "Manager",
    },
  ];




  return (
    <div className='my-10 md:my-20' id='testimonials'>
        <Title title="Testimonials" subTitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium" />
<div className="relative max-w-full overflow-hidden">
      <div className='hidden md:block'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background-color: #fd6f00; width: 28px; height: 10px; border-radius: 10%; "></span>`;
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="overflow-auto relative right-0 lg:right-[100vh] w-full lg:w-[156rem] rounded-xl"
      >
        {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className='mb-10 pl-10 rounded-xl'>
                  {/* <p>{activeIndex} {tesLength} {index}</p> */}
              <div
                className={`flex justify-center items-center rounded-xl p-10 bg-[#F8F8F8] shadow-2xl text-black `}
              >
              
                <div className="w-1/3">
                  <Image
                    src={testimonial.image}
                    className="w-44 h-44 rounded-full ml-4"
                     alt="tes image"
                  />
                </div>

                <div className="w-2/3 mr-4">
                  <p className="text-[#fd6f00] text-3xl">“</p>
                  <p className="-mt-4 text-sm">
                    {testimonial.text}{" "}
                    <span className="text-[#fd6f00] text-3xl absolute ml-2 mt-1">
                      “
                    </span>
                  </p>
                  <h5 className="font-medium text-lg mt-3 ">{testimonial.name}</h5>
                  <p className="text-base ">{testimonial.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      </div>

      <div className="block lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
     
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
                return `<span class="${className}" style="background-color: #fd6f00; width: 28px; height: 10px; border-radius: 10%; margin-top:200px"></span>`;
              },
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="mySwiper overflow-auto relative right-0 lg:right-[100vh] w-full lg:w-[190%]"
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div
                className={`rounded-xl py-10 gap-3 px-9 bg-[#F8F8F8] text-black flex flex-col justify-center items-center`}
              >
                <div>
                  <Image
                    src={testimonial.image}
                    className="w-40 h-40 rounded-full"
                    alt="tes image"
                  />
                </div>

                <div className="flex flex-col justify-center items-center">
                  <p className="text-[#fd6f00] text-3xl">“</p>
                  <p className="ml-3 -mt-4 text-sm">
                    {testimonial.text}{" "}
                    <span className="text-[#fd6f00] text-3xl absolute ml-2 mt-1">
                      “
                    </span>
                  </p>
                  <h5 className="font-medium text-lg mt-3 ml-3">
                    {testimonial.name}
                  </h5>
                  <p className="text-base ml-3">{testimonial.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
    
  );
};

export default Testimonials;
