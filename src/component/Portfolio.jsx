import React from "react";
// import stylePort from '../css/portfolio.module.css';
import "../css/portfolio.css";

export default function Portfolio() {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="flip-box my-3 mx-2">
          <div className="flip-box-inner">
            <div className="flip-box-front py-3 flip-img-chat">
              <h2>Chat Support</h2>
            </div>
            <div className="flip-box-back py-4 d-flex flex-column justify-content-between">
              <div className="mt-3">
                <h2 className="fw-bold">Chat Support</h2>
                <hr className="border-2 my-2"/>
                <p className="mt-2 fw-bold">
                  Node.js | Express.js | MySql | Socket.io | JavaScript
                </p>
              </div>
              <div>
                <a
                  href="https://chat-support-999.herokuapp.com/"
                  target="_blank"
                >
                  <button type="button" class="btn btn-primary mx-1">
                    Try it
                  </button>
                </a>
                <a
                  href="https://github.com/jouriena11/chat-support"
                  target="_blank"
                >
                  <button type="button" class="btn btn-secondary mx-1">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-box my-3 mx-2">
          <div className="flip-box-inner">
            <div className="flip-box-front py-3 flip-img-movie-search">
              <h2>Chat Support</h2>
            </div>
            <div className="flip-box-back py-4 d-flex flex-column justify-content-between">
              <div className="mt-3">
                <h2 className="fw-bold">Movie Search Engine</h2>
                <hr className="border-2 my-2"/>
                <p className="mt-2 fw-bold">
                HTML | CSS | Bootstrap | JavaScript | jQuery | APIs
                </p>
              </div>
              <div>
                <a
                  href="https://e73707.github.io/Movie-search-engine/"
                  target="_blank"
                >
                  <button type="button" class="btn btn-primary mx-1">
                    Try it
                  </button>
                </a>
                <a
                  href="https://github.com/E73707/Movie-search-engine"
                  target="_blank"
                >
                  <button type="button" class="btn btn-secondary mx-1">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
