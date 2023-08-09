import React from "react";

function PopKeywords() {
  return (
    <div id="popular" className="text-sm md:text-lg">
      <div className="flex">
        <span className="text-2xl mx-auto md:text-4xl">Popular Keywords</span>
      </div>
      <div className="mt-10 grid justify-between w-10/12 mx-auto md:flex 2xl:w-8/12">
        <div className="leading-2 md:leading-7">
          <p className="-ml-4 text-md md:text-xl md:mt-10 -mt-5">
            I created the backend steps used below
          </p>
          <div className="mt-2 md:mt-4">
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
          <div className="mt-2 -ml-4 text-md md:text-xl md:mt-10">
            Skills used
          </div>
          <div className="mt-2 md:mt-4">
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
        <div className="grid -mt-5 md:mt-10">
          <img
            src="https://raw.githubusercontent.com/ryanba08/ryanba08.github.io/main/src/assets/popKeys.png"
            alt="no image"
            className="w-80 h-60 mt-10 md:mt-0 md:h-80 2xl:w-[400px] 2xl:h-[400px]"
          ></img>
          <a
            href="https://popularkeywords.com/"
            target="_blank"
            className=" hover:text-purple-500 mt-4 md:mt-10 mx-auto"
          >
            popularkeywords.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default PopKeywords;
