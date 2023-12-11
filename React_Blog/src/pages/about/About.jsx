import React from "react";
import aboutImg from "../../assets/about.png";
import user1 from "../../assets/user-01.png";
import user2 from "../../assets/user-02.png";
import user3 from "../../assets/user-03.png";
import user4 from "../../assets/user-04.png";
import Hero from "../../components/hero/Hero";
import AuthorCard from "../../components/authorCard/AuthorCard";

function About() {
  return (
    <div>
      <Hero content={"About Page"} />
      <div className="px-[50px] py-[30px]">
        <div className="flex md:flex-row flex-col items-center gap-10">
          <div>
            <img className="md:w-[700px]" src={aboutImg} alt="" />
          </div>
          <div>
            <p className="text-orange-500 font-bold text-lg">Who we are</p>
            <h3 className="text-4xl font-bold">
              We provide high quality <br /> Articles & blogs
            </h3>
            <div>
              <p className="text-gray-600 py-4">
                Sed ullamcorper dui at risus viverra, nec cursus leo
                ullamcorper, Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per incepitos himenaeos congue dui nec dui
                lobortis maximus.
              </p>
              <p className="text-gray-600">
                Curabitur pretium, libero vitae pharetra thoncos, tellus urna
                auctor orci, eu dictum diam diam nec neque. Pellentesque.
              </p>
            </div>
          </div>
        </div>
        <div className="my-10">
          <h2 className="text-3xl font-bold border-b-2 border-gray-400 pb-4">
            Top Authors
          </h2>
          <div className="flex flex-wrap gap-7 items-center justify-center mt-10">
            <AuthorCard
              img={user1}
              name={"Adrio Devid"}
              position={"Director of Operations"}
              noOfArtical={12}
            />
            <AuthorCard
              img={user2}
              name={"Rayna Mario"}
              position={"Content Writer"}
              noOfArtical={8}
            />
            <AuthorCard
              img={user3}
              name={"Devid Tac"}
              position={"Head of Marketing"}
              noOfArtical={5}
            />
            <AuthorCard
              img={user4}
              name={"Marl Jacob"}
              position={"Head of Marketing"}
              noOfArtical={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
