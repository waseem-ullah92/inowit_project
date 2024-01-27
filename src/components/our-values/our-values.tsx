import React, { useState } from "react";
import style from "../../styles/our-values.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

// ======================== MOCK ========================
import OURVALUESDATA from "./our-values-data";

// ======================= Packages =======================
import { v4 as uuidV4 } from "uuid";
import Image from "next/image";
import ServiceSubHeading from "../services/service-subheading";
import ServiceParagraph from "../common/service-paragraph";

const OurValuesComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    if (activeIndex < OURVALUESDATA.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <React.Fragment>

      <div className="container my-5">
        <ServiceSubHeading propClasses="text-center primary-color font-oswald mt-2 mb-4" text="Our Values" />
        <ServiceParagraph isCenter text="Our values define us at Inowit. We don't just talk about them we live them every day. We carefully selected values that embody our beliefs, business approach, and team qualities: Fun, Exceptional, Curious, Generating Ripples, Outcomes and Transparency. These values are the bedrock of Inowit Marketing." />
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-7 col-sm-10">
          <div className={`${style.mainSlider} text-black text-center flex items-center justify-center`}>
            <button onClick={prevSlide} className={`${style.prevBtn} me-3`}>
              <BsArrowLeft />
            </button>
            <div className={`${style.sliderContent}`}>
              <h1 className="mb-4">{OURVALUESDATA[activeIndex].heading}</h1>
              <p>{OURVALUESDATA[activeIndex].desc}</p>
            </div>
            <button onClick={nextSlide} className={`${style.nextBtn} ms-3`}>
              <BsArrowRight />
            </button>
          </div>
          <div className={`${style.sliderImages} text-center d-flex justify-content-center my-5`}>
            {OURVALUESDATA.map((item: any, index: any) => (
              <div
                key={uuidV4()}
                className={`${index === activeIndex ? "active-indicator" : "opacity-[0.5]"} text-black d-flex justify-content-center `}
              >
                <Image className={style.vlaueImg} src={item?.img} alt="image not found" width={40} height={40} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OurValuesComponent;
