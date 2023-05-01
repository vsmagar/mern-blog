import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addBlog } from "../../store/actions/blogActions";
export default function Blog() {
  const dispatch = useDispatch();
  const [preview, setPreview] = useState();
  const [image, setImg] = useState();

  const formik = useFormik({
    initialValues: {
      title: "Task",
      desc: "React-Redux",
      category: "js",
    },

    validationSchema: yup.object({
      title: yup.string().required("Task is Required"),
      desc: yup.string().required("Desc is Required"),
      category: yup.string().required("Selecte the option"),
    }),
    onSubmit: (values) => {
      console.log(values);
      console.warn(image);
      const fd = new FormData();
      fd.append("title", values.title);
      fd.append("desc", values.desc);
      fd.append("category", values.category);
      fd.append("img", image);
      dispatch(addBlog(fd));
      console.log(fd.entries());
    },
  });

  const handleImageChange = (e) => {
    let img = e.target.files[0];
    let url = URL.createObjectURL(img);
    setPreview(url);
    setImg(img);
  };
  return (
    <>
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <form onSubmit={formik.handleSubmit}>
                <div className="card">
                  <div className="card-header text-center alert bg-info">
                    <strong>ADD BLOG</strong>
                  </div>
                  <div className="card-body">
                    <div>
                      <label for="title" className="form-label">
                        <strong>Title</strong>
                      </label>
                      <input
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        className={
                          formik.errors.title && formik.touched.title
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="title"
                        placeholder="Enter Title"
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        <strong>{formik.errors.title}</strong>
                      </div>
                    </div>
                    <div className="mt-2">
                      <label for="desc" className="form-label">
                        <strong>Description</strong>
                      </label>
                      <input
                        name="desc"
                        value={formik.values.desc}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        className={
                          formik.errors.desc && formik.touched.desc
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="desc"
                        placeholder="Enter Description"
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        <strong>{formik.errors.name}</strong>
                      </div>
                    </div>
                    <div className="mt-2">
                      <label for="img" className="form-label">
                        <strong>Image URL</strong>
                      </label>
                      <input
                        name="img"
                        value={formik.values.img}
                        onChange={handleImageChange}
                        onBlur={formik.handleBlur}
                        type="file"
                        className={"form-control"}
                        id="img"
                        placeholder="Choose Image"
                      />
                      {preview && <img src={preview} height="100" alt="" />}
                    </div>

                    <div className="mt-2">
                      <label for="option" className="form-label">
                        <strong>Select category</strong>
                      </label>

                      <select
                        name="option"
                        value={formik.values.option}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.option && formik.touched.option
                            ? "form-select is-invalid"
                            : "form-select"
                        }
                      >
                        <option selected>Select </option>
                        <option value="html">html</option>
                        <option value="css">css</option>
                        <option value="js">javaScript</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100 mt-3"
                    >
                      <strong>Submit Blog</strong>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      )
    </>
  );
}
