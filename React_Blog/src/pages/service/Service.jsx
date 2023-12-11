import React from "react";
import Hero from "../../components/hero/Hero";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import { FaDesktop } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { TbVectorTriangle } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

function Service() {
  const content =
    "We dejoy working with discerning clients, People for whom qualuty, service, integrity & aesthrtics ";
  return (
    <div>
      <Hero content={"Servie Page"} />
      <div>
        <div className="flex flex-col items-center gap-2 py-10 text-center">
          <p className="text-orange-400 font-bold text-xl">Our Services</p>
          <h3 className="font-bold text-4xl">What we Offer</h3>
          <p>
            There are many variations of passages of Lorem ipsum available{" "}
            <br />
            but the majority have sufferef alteration is some form
          </p>
        </div>
        <div className="flex gap-10 justify-center flex-wrap py-10">
          <ServiceCard
            icon={<FaDesktop />}
            heading={"Refreshing Design"}
            content={content}
          />
          <ServiceCard
            icon={<FaCss3 />}
            heading={"Refreshing Design"}
            content={content}
          />
          <ServiceCard
            icon={<TbVectorTriangle />}
            heading={"Refreshing Design"}
            content={content}
          />
          <ServiceCard
            icon={<FaReact />}
            heading={"Refreshing Design"}
            content={content}
          />
          <ServiceCard
            icon={<FaNodeJs />}
            heading={"Refreshing Design"}
            content={content}
          />
          <ServiceCard
            icon={<AiOutlineLike />}
            heading={"Refreshing Design"}
            content={content}
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
