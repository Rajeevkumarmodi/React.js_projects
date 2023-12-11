import React, { useEffect, useState } from "react";
import HomePageHero from "../../components/homePageHero/HomePageHero";
import Categories from "../../components/categories/Categories";
import BlogCard from "../../components/BlogCard/BlogCard";
import blogData from "../../Data/blogData";
import Pagination from "../../components/Pagination/Pagination";
function HomePage() {
  const [totalPage, setTotalPage] = useState(
    Array(Math.ceil(blogData.length / 12)).fill(null)
  );
  const [activePageNo, setActivePageNo] = useState(0);
  let allBlogData = blogData;
  const [selected, setSelected] = useState("All");
  const [paginatedData, setPaginatedData] = useState(blogData.slice(0, 12));

  useEffect(() => {
    if (selected === "All") {
      allBlogData = blogData;
    } else {
      allBlogData = blogData.filter((blog) => blog.category == selected);
      console.log(allBlogData);
      setTotalPage(Array(Math.ceil(allBlogData.length / 12)).fill(null));
    }
  }, [selected]);

  useEffect(() => {
    setPaginatedData(
      allBlogData.slice(activePageNo * 12, activePageNo * 12 + 12)
    );
  }, [activePageNo, selected]);
  return (
    <div className="flex flex-col items-center ">
      <HomePageHero />
      <Categories selected={selected} setSelected={setSelected} />
      <div className="px-[50px] flex gap-8 flex-wrap justify-center">
        {paginatedData &&
          paginatedData.map((item) => {
            return (
              <BlogCard
                key={item.id}
                image={item.image}
                title={item.title}
                author={item.author}
                date={item.published_date}
                id={item.id}
              />
            );
          })}
      </div>
      <Pagination
        totalPage={totalPage}
        activePageNo={activePageNo}
        setActivePageNo={setActivePageNo}
      />
    </div>
  );
}

export default HomePage;
