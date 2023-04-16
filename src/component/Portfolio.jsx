import React from "react";
// import stylePort from '../css/portfolio.module.css';
import "../css/portfolio.css";

export default function Portfolio() {
  return (
    <div className="container-fluid">
      <div className="mx-5 my-4">
        <h2 className="fw-bold">Portfolio</h2>
        <hr className="w-100 my-3 border-2" />
      </div>
      <div className="row d-flex justify-content-center">
        <div className="flip-box my-3 mx-2">
          <div className="flip-box-inner">
            <div className="flip-box-front py-3 flip-img-chat">
              <h2 className="py-3 my-5 flip-title-front">Chat Support</h2>
            </div>
            <div className="flip-box-back py-4 d-flex flex-column justify-content-between">
              <div className="mt-3">
                <h2 className="fw-bold">Chat Support</h2>
                <hr className="border-2 my-2" />
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
              <h2 className="py-3 my-5 flip-title-front">Movie Search Engine</h2>
            </div>
            <div className="flip-box-back py-4 d-flex flex-column justify-content-between">
              <div className="mt-3">
                <h2 className="fw-bold">Movie Search Engine</h2>
                <hr className="border-2 my-2" />
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
        <div className="flip-box my-3 mx-2">
          <div className="flip-box-inner">
            <div className="flip-box-front py-3 flip-img-tech-blog">
              <h2 className="py-3 my-5 flip-title-front">Tech Blog</h2>
            </div>
            <div className="flip-box-back py-4 d-flex flex-column justify-content-between">
              <div className="mt-3">
                <h2 className="fw-bold">Tech Blog</h2>
                <hr className="border-2 my-2" />
                <p className="mt-2 fw-bold">
                  HTML | CSS | Bootstrap | JavaScript | Express.js | MySQL
                </p>
              </div>
              <div>
                <a
                  href="https://tech-blog-999.herokuapp.com/"
                  target="_blank"
                >
                  <button type="button" class="btn btn-primary mx-1">
                    Try it
                  </button>
                </a>
                <a
                  href="https://github.com/jouriena11/tech-blog-mvc"
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
            <div className="flip-box-front py-3 flip-img-pwa-text-editor">
              <h2 className="py-3 my-5 flip-title-front">PWA Text Editor</h2>
            </div>
            <div className="flip-box-back py-4 d-flex flex-column justify-content-between">
              <div className="mt-3">
                <h2 className="fw-bold">PWA Text Editor</h2>
                <hr className="border-2 my-2" />
                <p className="mt-2 fw-bold">
                  JavaScript | Express.js | Webpack | CodeMirror | IndexedDB
                </p>
              </div>
              <div>
                <a
                  href="https://jt-pwa-text-editor.herokuapp.com/"
                  target="_blank"
                >
                  <button type="button" class="btn btn-primary mx-1">
                    Try it
                  </button>
                </a>
                <a
                  href="https://github.com/jouriena11/text-editor-PWA"
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
            <div className="flip-box-front py-3 flip-img-pwa-scheduler-calendar-app">
              <h2 className="py-3 my-5 flip-title-front">Scheduler Calendar App</h2>
            </div>
            <div className="flip-box-back py-4 d-flex flex-column justify-content-between">
              <div className="mt-3">
                <h2 className="fw-bold">Scheduler Calendar App</h2>
                <hr className="border-2 my-2" />
                <p className="mt-2 fw-bold">
                  JavaScript | HTML | CSS | localStorage
                </p>
              </div>
              <div>
                <a
                  href="https://jouriena11.github.io/W5-challenge-scheduler-calendar-app/"
                  target="_blank"
                >
                  <button type="button" class="btn btn-primary mx-1">
                    Try it
                  </button>
                </a>
                <a
                  href="https://github.com/jouriena11/W5-challenge-scheduler-calendar-app"
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
            <div className="flip-box-front py-3 flip-img-pwa-weather-forecast-app">
              <h2 className="py-3 my-5 flip-title-front">Weather Forecast App</h2>
            </div>
            <div className="flip-box-back py-4 d-flex flex-column justify-content-between">
              <div className="mt-3">
                <h2 className="fw-bold">Weather Forecast App</h2>
                <hr className="border-2 my-2" />
                <p className="mt-2 fw-bold">
                  JavaScript | HTML | CSS
                </p>
              </div>
              <div>
                <a
                  href="https://jouriena11.github.io/weather-forecast-by-city-dashboard/"
                  target="_blank"
                >
                  <button type="button" class="btn btn-primary mx-1">
                    Try it
                  </button>
                </a>
                <a
                  href="https://github.com/jouriena11/weather-forecast-by-city-dashboard"
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
