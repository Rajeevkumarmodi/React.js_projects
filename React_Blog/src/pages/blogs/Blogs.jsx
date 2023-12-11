import React, { useState } from "react";
import Hero from "../../components/hero/Hero";
import blogData from "../../Data/blogData";
import BlogCard from "../../components/BlogCard/BlogCard";

function Blogs() {
  const [limitedBlog, setLimitedBlog] = useState(blogData.slice(50, 59));
  return (
    <div>
      <div>
        <Hero content={"Blogs Page"} />
        <div className="flex flex-wrap gap-10 justify-center my-10">
          {limitedBlog &&
            limitedBlog.map((blog) => {
              return (
                <BlogCard
                  key={blog.id}
                  image={blog.image}
                  title={blog.title}
                  author={blog.author}
                  date={blog.published_date}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
