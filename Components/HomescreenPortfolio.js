import Image from "next/image";
import abcs from "../public/project_media/Osmo/Abcs/appstorepreview.png";
import wexp from "../public/project_media/Osmo/WordsExp/appstorepreview.png";
import mbuzz from "../public/project_media/Osmo/MathBuzz/appstorepreview.png";
import { PortfolioComponent } from "./PortfolioComponent";

function HomescreenPortfolio() {
  return (
    <section>
      <div className="text-center text-slate-600 mt-10">
        <h3 className="text-3xl p-5 font-semibold"> PROJECTS </h3>
        <p className="text-xl font-medium px-5 pb-5">
          Here are some of my projects. To see more details about the projects
          or more projects, please go to the Potfolio page.
        </p>
      </div>

      <div className="md:flex lg:flex items-center p-5 lg:justify-center">
        <PortfolioComponent src={abcs} title="Osmo LGK ABCs" />
        <PortfolioComponent src={wexp} title="Osmo Words Explorers" />
        <PortfolioComponent src={mbuzz} title="Osmo GK+ MathBuzz" />
      </div>
    </section>
  );
}

export default HomescreenPortfolio;
