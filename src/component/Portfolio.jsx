import React from "react";
// import stylePort from '../css/portfolio.module.css';
import "../css/portfolio.css";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <div className="container-fluid">
      <div className="mx-5 my-4">
        <h2 className="fw-bold">Portfolio</h2>
        <hr className="w-100 my-3 border-2" />
      </div>
      <div className="row d-flex justify-content-center">
        <ProjectCard
          title="Chat Support"
          content="Node.js | Express.js | MySql | Socket.io | JavaScript"
          bgImgClass="flip-img-chat"
          GitHubLink="https://chat-support-999.herokuapp.com/"
          deployApp="https://github.com/jouriena11/chat-support"
        />
        <ProjectCard
          title="Movie Search Engine"
          content="HTML | CSS | Bootstrap | JavaScript | jQuery | APIs"
          bgImgClass="flip-img-movie-search"
          GitHubLink="https://e73707.github.io/Movie-search-engine/"
          deployApp="https://github.com/E73707/Movie-search-engine"
        />
        <ProjectCard
          title="Tech Blog"
          content="HTML | CSS | Bootstrap | JavaScript | Express.js | MySQL"
          bgImgClass="flip-img-tech-blog"
          GitHubLink="https://tech-blog-999.herokuapp.com/"
          deployApp="https://github.com/jouriena11/tech-blog-mvc"
        />
        <ProjectCard
          title="PWA Text Editor"
          content="JavaScript | Express.js | Webpack | CodeMirror | IndexedDB"
          bgImgClass="flip-img-pwa-text-editor"
          GitHubLink="https://jt-pwa-text-editor.herokuapp.com/"
          deployApp="https://github.com/jouriena11/text-editor-PWA"
        />
        <ProjectCard
          title="Scheduler Calendar App"
          content="JavaScript | HTML | CSS | localStorage"
          bgImgClass="flip-img-pwa-scheduler-calendar-app"
          GitHubLink="https://jouriena11.github.io/W5-challenge-scheduler-calendar-app/"
          deployApp="https://github.com/jouriena11/W5-challenge-scheduler-calendar-app"
        />
        <ProjectCard
          title="Weather Forecast App"
          content="JavaScript | HTML | CSS"
          bgImgClass="flip-img-pwa-weather-forecast-app"
          GitHubLink="https://jouriena11.github.io/weather-forecast-by-city-dashboard/"
          deployApp="https://github.com/jouriena11/weather-forecast-by-city-dashboard"
        />
      </div>
    </div>
  );
}
