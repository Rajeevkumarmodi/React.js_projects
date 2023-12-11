import React, { useState } from "react";
import blogData from "../../Data/blogData";
import { useParams } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import Hero from "../../components/hero/Hero";

function SingleBlog() {
  const id = useParams().id;
  const [singleBlogData, setSingleBlogData] = useState(blogData[id - 1]);
  if (!singleBlogData) {
    return (
      <div className="py-10 text-center flex items-center justify-center h-[calc(60vh-50px)]">
        <p className=" text-5xl">Blog Not Found 😒</p>
      </div>
    );
  }
  return (
    <div>
      <Hero content={"Single Blog Page"} />
      <div className="px-[50px] py-4">
        <div className="flex justify-center">
          <img
            className="md:w-[60%] w-[90%] "
            src={singleBlogData.image}
            alt=""
          />
        </div>
        <div>
          <h2 className="font-bold text-2xl py-3 text-blue-400">
            {singleBlogData.title}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <IoMdContact className="text-4xl" />
          <p className="font-bold text-lg">{singleBlogData.author}</p>
        </div>
        <div className="flex items-center gap-2 py-1">
          <p className="">Published :-</p>
          <p className="">{singleBlogData.published_date}</p>
        </div>
        <div className="text-gray-500 py-2 pb-10">
          {singleBlogData.content}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          laudantium dolores soluta necessitatibus vero voluptatibus nobis
          voluptates numquam atque. Similique quia provident non. Ex earum sed
          aliquam quod. Error, exercitationem? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Assumenda laudantium dolores soluta
          necessitatibus vero voluptatibus nobis voluptates numquam atque.{" "}
          <br /> <br />
          Similique quia provident non. Ex earum sed aliquam quod. Error,
          exercitationem? Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Assumenda laudantium dolores soluta necessitatibus vero
          voluptatibus nobis voluptates numquam atque. Similique quia provident
          non. Ex earum sed aliquam quod. Error, exercitationem?
          {singleBlogData.content} <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, labore
          error quae suscipit ullam explicabo animi dolores! Necessitatibus at
          quae architecto nesciunt suscipit dicta magnam reiciendis odit laborum
          animi facilis porro illum, minima velit aperiam quod laudantium
          impedit voluptate, sequi tenetur ad neque commodi deserunt
          consectetur. Itaque, corporis? Quae aut in labore molestias quibusdam
          deserunt dolores placeat delectus iure, cum fuga quo tempora quos est,
          velit repellendus harum. Provident ipsa ea eos accusantium incidunt
          nulla tempora optio, corporis blanditiis pariatur, corrupti id
          delectus. Quae recusandae laborum doloribus! Magni quisquam dolore ea
          architecto omnis quam nemo, vero voluptatibus, perferendis fugit
          culpa!
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
