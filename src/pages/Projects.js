import React from "react";
import "../../src/app.css";

function Projects() {
  return (
    <div className="mt-4">
      <div id="popular" className="text-sm md:text-lg">
        <div className="flex">
          <span className="text-2xl mx-auto md:text-4xl">Popular Keywords</span>
        </div>
        <div className="mt-10 grid justify-between w-10/12 mx-auto md:flex">
          <div className="leading-2 md:leading-7">
            <p className="-ml-4 text-md md:text-xl">
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
            <div className="mt-10 -ml-4 text-md md:text-xl">Skills used</div>
            <div className="mt-4">
              <p>Languages: &nbsp;Javascript, Python</p>
              <p className="flex">
                JS packages: &nbsp;
                <p>
                  Puppeteer, rss-parser, <br className="md:hidden" />
                  node-fetch, dot-env, Date(), Firebase
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
            className=" hover:text-purple-500 mt-10 md:mt-0 mx-auto"
          >
            Check out the site!
          </a>
        </div>
      </div>
    </div>
  );
}
export default Projects;
