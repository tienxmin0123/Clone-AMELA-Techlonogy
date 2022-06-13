import Head from "next/head";

//import components
import Solution from "../templates/components/solution";
import Banner from "../templates/components/banner";
import AdvanceMedia from "../templates/components/advance-media";
import Section from "../templates/components/section";
import Edu from "../templates/components/edu"
import Job from "../templates/components/job"
import News from "../templates/components/news"



// import Data
import { dataSolution } from "../api-data/components/data-solution";
import { dataTechnology } from "../api-data/components/data-technology";
import { dataBanner } from "../api-data/components/data-banner";
import { dataAdvanceMedia } from "../api-data/components/data-advance-media";
import { dataEdu } from "../api-data/components/data-edu";
import { dataJob } from "../api-data/components/data-job";
import { dataNews } from "../api-data/components/data-news";
import { dataProject } from "../api-data/components/project";


export default function Home() {
  return (
    <main className="main">
      <div className="app">
        <Head>
          <title>{`${"Name Page"} - AMELA Technology`}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="main">
          <Banner data = {dataBanner} />
          <AdvanceMedia data = {dataAdvanceMedia} />
          <Solution data={dataSolution} />
          <Solution data={dataTechnology} />
          <Edu data = {dataEdu} />
          <Job data = {dataJob} />
          <Section data={dataProject} />
          <News data = {dataNews} />
        </div>
      </div>
    </main>
  );
}
