import React from "react";

const ListView = ({ data, handelClick }) => {
  return (
    <>
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
              <p className="text-capitalize">{data.body.slice(0,110)} ...</p>
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
              <div className="modal-body text-capitalize">{data.body}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListView;
