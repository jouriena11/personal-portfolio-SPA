import React from "react";

export default function Resume() {
  return (
    <div className="mx-5 my-4 text-left">
      <div className="d-flex justify-content-between">
        <h2 className="fw-bold">Resume</h2>
        <a href="/full-stack-developer_John-Teeraprasert.pdf">
          <button className="btn btn-info fw-bold text-white">Download</button>
        </a>
      </div>
      <hr className="w-100 my-3 border-2" />
      <div className="my-4">
        <h4 className="fw-bold">Professional Summary</h4>
        <hr className="w-25 mx-0 float-left my-3 border-1" />
        <p className="text-justify">
          As an experienced small business co-owner with extensive exposure to
          and hands-on involvement in cross-functional management and
          collaborations, I recognize the critical role that digital
          transformation plays in driving sustainable growth in today's
          ever-evolving business landscape. In light of the increasing pressures
          of inflation and rising labor costs, I am committed to taking a
          proactive approach to business operations by continuously seeking out
          opportunities to innovate and optimize processes. That is why I have
          made the decision to embark on a journey of self-improvement through
          enrollment in a rigorous full-stack coding bootcamp. I am eager to
          leverage my diverse skill set and passion for innovation to help drive
          transformative change and support the success of businesses in the
          digital age.
        </p>
      </div>
      <div>
        <div className="mt-4">
          <div className="row">
            <div className="col-12 col-lg-3">
              <h4 className="fw-bold">Skills</h4>
              <hr className="w-75 mx-0 float-left my-3 border-1" />
              <ul>
                <li>HTML</li>
                <li>CSS / Bootstrap</li>
                <li>JavaScript / jQuery</li>
                <li>MongoDB / Mongoose</li>
                <li>Express.js</li>
                <li>React</li>
                <li>Node.js</li>
                <li>MySQL / Sequelize</li>
                <li>Agile Development</li>
                <li>Client-side APIs</li>
              </ul>
            </div>
            <div className="col-12 col-lg-5">
              <h4 className="fw-bold">Education & Certification</h4>
              <hr className="w-75 mx-0 float-left my-3 border-1" />
              <ul>
                <li className="mt-2">
                  <b>The Coding Bootcamp</b>
                  <br />
                  University of Sydney x Trilogy Education Services 
                  <br />
                  (11/2022 - 05/2023)
                </li>
                <li className="mt-2">
                  <b>MSc Finance</b>
                  <br />
                  London School of Economics, London, United Kingdom
                  <br />
                  (08/2009 - 06/2010)
                </li>
                <li className="mt-2">
                  <b>BA Communication Arts (Communication Management)</b>
                  <br />
                  Chulalongkorn University, Thailand 
                  <br />
                  (04/2004 - 03/2008)
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-4">
              <h4 className="fw-bold">Areas of Interest</h4>
              <hr className="w-75 mx-0 float-left my-3 border-1" />
              <ul className="mb-0">
                <li>Full Stack Development</li>
                <li>Backend Development</li>
                <li>Frontend Development</li>
                <li>Project Management</li>
                <li>Product Management</li>
                <li>Digital Transformation</li>
                <li>Enterprise Resource Planning (ERP)</li>
                <li>Cloud Solutions</li>
                <li>Business Development</li>
                <li>Business Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="fw-bold">Work Experience</h4>
        <hr className="w-75 mx-0 float-left my-3 border-1" />
        <h5 className="fw-bold">Klas & Sylph (Thailand) Co., Ltd</h5>
        <div className="mx-4">
          <h6>
            <b>Chief Operating Officer</b> (02/2015 - 09/2022)
          </h6>
          <ul>
            <li>
              Procured and managed end-to-end hardware and software solutions
              for both footwear and F&B operations. This involved identifying
              business requirements and constraints, sourcing and purchasing,
              implementing system migrations, devising adjustments and
              workarounds, testing systems and reviewing, and managing and
              training users.
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="mx-4">
          <h6>
            <b>Business Development & Growth Manager</b> (03/2012 - 09/2020)
          </h6>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="mx-4">
          <h6>
            <b>Operations & Production Manager</b> (08/2010 - 09/2022)
          </h6>
          <ul>
            <li>
              Introduced a just-in-time (JIT) production process by partially
              producing product components, leading to a 60% reduction in
              inventory risk and 50% reduction in production lead time.
            </li>
            <li>
              Proposed material substitutions and adoptions that offered
              cost-quality benefits, reduced minimum order quantities (MOQ), and
              improved ease of use in footwear production.
            </li>
            <li>
              Optimized warehousing space management by implementing a
              movable-shelving approach, resulting in a 50% reduction in storage
              space requirement and a 75% reduction in warehouse rent.
            </li>
            <li>
              Expanded the supplier base to mitigate rising inflation and
              shortages, leading to higher-quality ingredient substitutions with
              comparable or lower costs.
            </li>
            <li>
              Managed production schedules and workflows to ensure timely
              delivery of products.
            </li>
          </ul>
        </div>
        <div className="mx-4">
          <h6>
            <b>Financial Accounting Manager</b> (12/2017 - 09/2022)
          </h6>
          <ul>
            <li>
              Coordinated with external accountants to ensure accurate data
              entry for accounting, revenue recognition, and expense
              recognition.
            </li>
            <li>
              Monitored internal bookkeeping activities and performed regular
              financial forecasting and analysis.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
