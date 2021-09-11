import React from "react";

const Sidebar = ({ setActive, active }) => {
  return (
    <>
      <div className="bg-white my-2 py-2 px-2 box-shadow border-radius">
        <div className="d-flex align-items-center cursor-pointer">
          <div className="pe-3">
            <img
              src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg"
              className="rounded-circle"
              style={{ height: "60px", width: "60px" }}
              alt="test"
            />
          </div>
          <div>
            <h6>Hi Reader,</h6>
            <p>Here's your News!</p>
          </div>
        </div>
      </div>

      <div className="bg-white my-4 py-2 px-2 box-shadow border-radius">
        <h5 className="text-center">View Toggle</h5>
        <div className="text-center">
          <div
            className={`d-inline-block w-50 py-3 px-1 cursor-pointer ${
              active === 'card' && "active"
            }`}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="th"
              class="svg-inline--fa fa-th fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ height: "40px", width: "40px" }}
              onClick={() => setActive('card')}
            >
              <path
                fill="currentColor"
                d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
              ></path>
            </svg>
          </div>
          <div
            className={`d-inline-block w-50 py-3 px-1 cursor-pointer ${
              active === 'list' && "active"
            }`}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="list-ul"
              class="svg-inline--fa fa-list-ul fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ height: "40px", width: "40px" }}
              onClick={() => setActive('list')}
            >
              <path
                fill="currentColor"
                d="M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white my-4 py-2 px-2 box-shadow border-radius text-center">
        <h5 className="pb-2">Have a Feedback</h5>
        <button className="btn btn-design mb-2">We're Listening!</button>
      </div>
    </>
  );
};

export default Sidebar;
