import Head from "next/head";

//import components
import Section from "../templates/components/section";
import Solution from "../templates/components/solution";

// import Data
import { dataProject } from "../api-data/components/project";
import { dataSolution } from "../api-data/components/data-solution";

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
          <Section data={dataProject} />
          <Solution data={dataSolution} />
        </div>
      </div>
    </main>
  );
}
