import React from "react";

const CardView = ({ data, handelClick }) => {
  return (
    <>
      <div className="col-md-4 pb-4">
        <div className="card box-shadow border-radius h-100 cursor-pointer">
          <div className="text-end">
            <button
              className="btn-close bg-white p-2"
              onClick={() => handelClick(data.id)}
            ></button>
          </div>
          <div
            className="card-body h-100"
            data-bs-toggle="modal"
            data-bs-target={`#post${data.id}`}
          >
            <h6 className="text-capitalize">{data.title.slice(0,40)} ...</h6>
            <p className="text-capitalize">{data.body.slice(0,40)} ...</p>
          </div>
          <div
            className="p-3"
            data-bs-toggle="modal"
            data-bs-target={`#post${data.id}`}
          >
            <img
              src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg"
              className="img-fluid border-radius"
              alt="test"
            />
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

export default CardView;
