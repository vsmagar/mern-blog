import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBlogs } from "../store/actions/blogActions";
import BlogCard from "../components/BlogCard";
export default function Home() {
  const dispatch = useDispatch();
  const { allBlogs } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);
  return (
    <>
      {/* {JSON.stringify(allBlogs)} */}
      <div className="container">
        <div className="row">
          {allBlogs.map((blog) => (
            <div key={blog.title} className="col-sm-6">
              <h1>
                <BlogCard blog={blog} />
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
