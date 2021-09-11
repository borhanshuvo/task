import React, { useContext, useEffect, useState } from "react";

import "./Home.css";
import { PostData } from "../../App";
import Post from "../Post/Post";
import Sidebar from "../Sidebar/Sidebar";
import CardView from "../CardView/CardView";
import ListView from "../ListView/ListView";

const Home = () => {
  const [allData, setAllData] = useContext(PostData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [active, setActive] = useState("list");

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
            <Sidebar setActive={setActive} active={active} />
          </>
        </div>
        <div className="col-md-9 row">
          {currentPosts.map((data) => (
            <>
              {active === "list" ? (
                <ListView data={data} handelClick={handelClick} />
              ) : (
                <CardView data={data} handelClick={handelClick} />
              )}
            </>
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
