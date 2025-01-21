import React from 'react';

interface TitleProps {
  title: string;
  subTitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center mb-10 md:mb-20 mx-4 lg:mx-60 ">
      <h1 className="font-bold text-5xl mb-4 md:text-[65px] lg:mb-6">{title}</h1>
      <p className="font-extralight text-sm md:text-[21px] leading-5 md:leading-10">{subTitle}</p>
    </div>
  );
};

export default Title;
