import React from 'react'

export default function ProjectCard({title, content, bgImgClass, GitHubLink, deployApp}) {
  return (
    <div className="flip-box my-3 mx-2">
          <div className="flip-box-inner">
            <div className={`flip-box-front py-3 d-flex align-items-center ${bgImgClass}`}>
              <h2 className="py-3 my-5 flip-title-front w-100">{title}</h2>
            </div>
            <div className="flip-box-back py-4 d-flex flex-column justify-content-between">
              <div className="mt-3">
                <h2 className="fw-bold">{title}</h2>
                <hr className="border-2 my-2" />
                <p className="mt-2 fw-bold">
                  {content}
                </p>
              </div>
              <div>
                <a
                  href={GitHubLink}
                  target="_blank"
                >
                  <button type="button" className="btn btn-primary mx-1">
                    Try it
                  </button>
                </a>
                <a
                  href={deployApp}
                  target="_blank"
                >
                  <button type="button" className="btn btn-secondary mx-1">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
  )
}



