import React from "react";
import "./workexperience.css";

export function WorkExperience() {
  return (
    <div className="box">
      <h2> Work Experience </h2>
      <hr />

      <h3 className="we">
        <b>Software Engineer</b>{" "}
      </h3>
      <span> ( 2016 August - Present )</span>
      <div>Intuit Inc</div>
      <div style = {{margin: "0 0 0 2%"}}>

      <h4 className="wes">
        {" "}
        <b> UI Developer for QuickBooks Online Billing </b>{" "}
      </h4>

      <ul className="wed">
        <li>Migrated legacy Dojo stack to React and worked on billing plugins used by 2 million customers</li>
        <li>
          Configured Webpack for different environments ( prod / dev ) taking
          care of optimizations in each mode, git hooks to prevent accidental
          commits and integrated with Jenkins pipeline for auto build generation
          and deployment . Integrated the plugin with all mordern tools like
          Prettier , ESlint, polyfills, React-intl etc
        </li>
        <li>
          Developed web pages from scratch for various subscription related
          flows ( upgrade, downgrade, annual subscriptions , addon subscriptions
          etc ) which were responsive, mobile-friendly, accessible, secure, and
          highly performant{" "}
        </li>
        <li>
          Incorporated mordern React standards like Error boundaries, lazy
          loading, memonization etc to improve user experience and setup
          framework for monitoring page loads{" "}
        </li>
        <li>
          {" "}
          Tested web pages with accessibility plugins, google lighthouse, react
          profilers and on various devices apart from the unit and snapshot
          tests before launching to produciton{" "}
        </li>
        <li>
          Integrated Amplitude analytics to study user activities and flows,
          required for various AI driven frameworks and marketing team{" "}
        </li>
        <li>
          Implemented loggers to log errors to Splunk, create alerts and monitor
          the plugins for any runtime bugs
        </li>
      </ul>

      <h4 className="wes">
        {" "}
        <b> BackEnd Developer for QuickBooks Online Billing </b>{" "}
      </h4>

      <ul className="wed">
        <li>
          {" "}
          Converted synchronous subscription creation flows to asynchronous to
          improve performance ( Spring Boot, JMS , AWS Aurora ){" "}
        </li>
        <li>
          {" "}
          Decomposed several billing related APIs from monolithic system to
          micro services{" "}
        </li>
        <li> Enhanced APIs to support new product requirements </li>
      </ul>
    </div>
    </div>
  );
}
