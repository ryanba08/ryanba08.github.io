import React from "react";
import "../../src/app.css";

function Projects() {
  return (
    <div className="mt-4">
      <div id="popular">
        <div className="flex text-center">
          <span className="text-4xl mx-auto">Popular Keywords</span>
        </div>
        <div className="mt-10 text-2xl flex justify-between w-10/12 mx-auto">
          <div className="leading-7 text-lg">
            <p className="-ml-4 text-xl">
              I created the backend steps used below
            </p>
            <div className="mt-4">
              <p>Step 1: &nbsp;Scrape Keyword data</p>
              <p className="ml-2">Step 2: &nbsp;Clean keyword data</p>
              <p className="ml-4">Step 3: &nbsp;Rank the clean words</p>
              <p className="ml-6">
                Step 4: &nbsp;Store the results in a database
              </p>
              <p className="ml-8">
                Step 5: &nbsp;Launch scraping app on server for automation
              </p>
            </div>
            <div className="mt-10 -ml-4 text-xl">Skills used</div>
            <div className="mt-4">
              <p>Languages: &nbsp;Javascript, Python</p>
              <p className="flex">
                JS packages: &nbsp;
                <p>
                  Puppeteer, rss-parser, node-fetch, dot-env, Date(), Firebase
                </p>
              </p>
              <p className="flex">
                Python packages: &nbsp;
                <p>Pandas, Firebase</p>
              </p>
            </div>
          </div>
          <a
            href="https://popularkeywords.com/"
            target="_blank"
            className=" hover:text-purple-500"
          >
            Check out the site!
          </a>
        </div>
      </div>
    </div>
  );
}
export default Projects;
