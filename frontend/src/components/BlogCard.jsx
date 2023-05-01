import React from "react";

export default function BlogCard({ blog }) {
  return (
    <>
      <div class="card">
        <img src={`${process.env.REACT_APP_URL}/${blog.img}`} alt="" className="img-fluid card-img-top" />
        <div class="card-body">
          <h3>{blog.title}</h3>
        </div>
      </div>
    </>
  );
}
