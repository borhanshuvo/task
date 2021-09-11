import React, { useContext, useEffect, useState } from "react";

import "./Home.css";
import { PostData } from "../../App";
import Post from "../Post/Post";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  const [allData, setAllData] = useContext(PostData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allData.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handelClick = (val) => {
    const newPost = allData.filter((data) => data.id !== val);
    setAllData(newPost);
  };

  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-md-3">
          <>
            <Sidebar />
          </>
        </div>
        <div className="col-md-9">
          {currentPosts.map((data) => (
            <div className="d-flex align-items-center">
              <div className="bg-white my-2 py-2 px-2 box-shadow border-radius">
                <div
                  className="d-flex justify-content-between align-items-center cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target={`#post${data.id}`}
                >
                  <div className="pe-4">
                    <img
                      src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg"
                      className="rounded-circle"
                      style={{ height: "70px", width: "70px" }}
                      alt="test"
                    />
                  </div>
                  <div>
                    <h6 className="text-capitalize">{data.title}</h6>
                    <p className="text-capitalize">{data.body}</p>
                  </div>
                </div>
              </div>
              <div className="ps-5">
                <div className="bg-white p-2 rounded-circle box-shadow">
                  <button
                    className="btn-close bg-white"
                    onClick={() => handelClick(data.id)}
                  ></button>
                </div>
              </div>

              <div
                className="modal fade"
                id={`post${data.id}`}
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title text-capitalize"
                        id="exampleModalLabel"
                      >
                        {data.title}
                      </h5>
                    </div>
                    <div className="modal-body text-capitalize">
                      {data.body}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-center mt-4">
            <Post
              postsPerPage={postsPerPage}
              totalPosts={allData.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
