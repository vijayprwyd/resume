import React from "react";
import "./workexperience.css";

export function WorkExperience() {
  return (
    <>
      <div className="box">
        <h2> Work Experience </h2>
        <hr />

        <h3 className="we">
          <b>Software Engineer</b>{" "}
        </h3>
        <span> ( 2016 August - 2021 March )</span>
        <div>Intuit Inc</div>
        <div style={{ margin: "0 0 0 2%" }}>
          <h4 className="wes">
            {" "}
            <b> UI Developer for QuickBooks Online Billing </b>{" "}
          </h4>

          <ul className="wed">
            <li>
              Configuring the billing plugins for different environments ( prod
              / dev ), setup best practices for repositories using development
              tools like prettier, es-lint, git hooks to prevent bad commits ,
              set up CI/CD pipeline in Jenkins to prevent merging bad PRs.{" "}
            </li>
            <li>
              Regularly updating documentation of our repositories, upgrading
              libraries, participate in design discussions, doing code reviews,
              controlling the branching strategy for weekly releases, deploying
              builds to production and monitoring post deployment.
            </li>
            <li>Integrating component libraries with storybooks.</li>
            <li>
              Interact with PMs, XDs and backend engineers for understanding the
              requirements, feature estimations, designing and developing pages
              for various subscription related flows ( subscription setup,
              upgrade, downgrade, switching between monthly and annual plans,
              cancel, resubscribe, add-on subscriptions etc).
            </li>
            <li>
              Follow a test driven development approach, ensuring proper unit
              test coverage, and e2e tests with Cypress ensuring zero manual
              testing effort.
            </li>
            <li>
              Ensure that the page is responsive, passes lighthouse tests for
              performance and accessibility and certified by security plugins.{" "}
            </li>
            <li>
              Take care of internationalization of contents in various locales.
            </li>
            <li>
              Developed framework for studying user interactions and logging the
              events in Amplitude, which was required for various AI driven
              frameworks and marketing team. Creating dashboards and developing
              charts with libraries like Highcharts for capruting various
              business metrics.
            </li>
            <li>
              Implemented loggers to log errors to Splunk, create alerts and
              monitor the plugins for any runtime bugs. Developed dashboards in
              Splunk for monitoring various real-time user metrics and page
              loads.
            </li>
            <li>
              Analysed performance issues and improving it with techniques like
              code splitting, lazy loading, caching, parallelization of network
              calls, preloading, pre-fetching etc. Brought down page loads from
              10 sec to less than 4 sec
            </li>
          </ul>

          <h4 className="wes">
            {" "}
            <b> BackEnd Developer for QuickBooks Online Billing </b>{" "}
          </h4>

          <ul className="wed">
            <li>
              {" "}
              Converted synchronous subscription creation flows to asynchronous
              to improve performance ( Spring Boot, JMS , AWS Aurora ) ,
              enhancing and developing Restful APIs to support new product
              requirements.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
