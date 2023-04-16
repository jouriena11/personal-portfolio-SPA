import React from "react";

export default function About() {
  return (
    <section className="container-fluid">
      <div className="mx-4 my-5">
        <h2 className="fw-bold">About</h2>
        <hr className="w-100 my-3 border-2" />
        <div className="row">
          <div className="col-5 col-md-4 col-xl-3 my-2">
            <img
              src="/img/jt-profile-photo.jpg"
              width="100%"
              alt="piyawit-teeraprasert-profile-photo"
            />
          </div>
          <div className="col-xl-9 my-3 my-xl-0">
            <p className="">
              Welcome to my personal portfolio website! My name is Piyawit
              Teeraprasert, or John, in short. I'm a former small business
              co-owner who's currently reinventing my career in the tech
              industry.
              <br />
              <br />
              Over the years, I've gained extensive exposure to various business
              functions and cross-functional collaborations, which have made me
              realize the importance of digital transformation for driving
              sustainable growth in today's ever-evolving business landscape.
              With the goal of staying ahead of the curve, I've enrolled in a
              rigorous full-stack coding bootcamp to hone my skills in
              full-stack development, which serves as a solid foundation for
              subsequent self-taught education going forward. As someone who
              only recently relocates to Australia and plans to stay here for
              good, I see this as a fresh start and a chance to pursue a career
              path that allows me to focus on digital transformation, which is
              an area of great interest to me. I'm eager to leverage my diverse
              skill set and passion for innovation to contribute to meaningful
              projects that reach a broader audience and have access to more
              resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
