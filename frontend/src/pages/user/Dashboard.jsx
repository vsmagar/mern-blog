import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBlog,
  getAllBlogs,
  updateBlog,
} from "../../store/actions/blogActions";

export default function Dashboard() {
  const dispatch = useDispatch();
  const [selectedBlog, setSetselectedBlog] = useState({ show: false });

  const { allBlogs, upadatedBlog, deletedBlog } = useSelector(
    (state) => state.blogs
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBlog(selectedBlog));
  };
  useEffect(() => {
    dispatch(getAllBlogs());
  }, [upadatedBlog, deletedBlog]);

  return (
    <>
      <div className="container d-flex gap-4">
        <div className="col-sm-3">
          <ul class="list-group mt-5">
            {allBlogs.map((item) => (
              <li class="list-group-item bg-warning">
                <div
                  onClick={(e) => setSetselectedBlog({ show: false, ...item })}
                  className="d-flex align-items-center gap-3"
                >
                  <img
                    src={`http://localhost:5000/${item.img}`}
                    height={100}
                    width={100}
                    className="rounded-circle"
                    alt={item.title}
                  />
                  <strong>{item.title}</strong>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-4">
          {/* {JSON.stringify(selectedBlog)} */}
          <div className="text-end mb-1">
            <button
              type="button"
              class="btn btn-warning dtn-sm"
              onClick={(e) =>
                setSetselectedBlog({ ...selectedBlog, show: true })
              }
            >
              Edit
            </button>
            <button
              type="submit"
              class="btn btn-danger "
              onClick={(e) => dispatch(deleteBlog(selectedBlog._id))}
            >
              Delete
            </button>
          </div>
          <div class="card">
            <img
              className="card-img-top img-fluid"
              src={`${process.env.REACT_APP_URL}/${selectedBlog.img}`}
              alt={selectedBlog.title}
            />
            <div class="card-body">
              <h3>{selectedBlog.title}</h3>
              <p>{selectedBlog.desc}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          {selectedBlog.show && (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={(e) =>
                  setSetselectedBlog({ ...selectedBlog, title: e.target.value })
                }
                value={selectedBlog.title}
                className="form-control"
                name=""
                id=""
              />
              <br />
              <input
                type="text"
                onChange={(e) =>
                  setSetselectedBlog({ ...selectedBlog, desc: e.target.value })
                }
                value={selectedBlog.desc}
                className="form-control"
                name=""
                id=""
              />
              <br />

              <br />
              <button type="submit" class="btn btn-info w-100">
                Update Blog
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
