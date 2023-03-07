import Image from "next/image";
import abcs from "../public/project_media/Osmo/Abcs/appstorepreview.png"
import wexp from "../public/project_media/Osmo/WordsExp/appstorepreview.png"
import mbuzz from "../public/project_media/Osmo/MathBuzz/appstorepreview.png"

function HomescreenPortfolio(){

    return (
        <section>
          
            <div className="text-center text-slate-600 mt-10">
                <h3 className="text-3xl p-5 font-semibold"> PROJECTS </h3>
                <p className="text-xl font-medium px-5 pb-5"> 
                    Here are some of my projects. To see more details about the projects or more 
                    projects, please go to the Potfolio page. 
                </p>
            </div>

            <div className="md:flex lg:flex items-center p-5 lg:justify-center">
                <div className="p:10 lg:p-10 text-center shadow-lg rounded-lg mx-auto my-10 w-2/3 sm:w-2/3 sm:h-auto lg:w-1/4 lg:h-auto">
                    <Image src={abcs} alt="Osmo LGK ABCs"/>
                    <h3> Osmo LGK ABCs </h3>
                </div>
                <div className="p:10 lg:p-10 text-center shadow-lg rounded-lg mx-auto my-10 w-2/3 sm:w-2/3 sm:h-auto lg:w-1/4 lg:h-auto">
                    <Image src={wexp} alt="Osmo Words Explorers" />
                    <h3> Osmo Words Explorers </h3>
                </div>
                <div className="p:10 lg:p-10 text-center shadow-lg rounded-lg mx-auto my-10 w-2/3 sm:w-2/3 sm:h-auto lg:w-1/4 lg:h-auto">
                    <Image src={mbuzz} alt="Osmo MathBuzz" />
                    <h3> Osmo GK+ MathBuzz </h3>
                </div>
            </div>
        </section>
    );

}

export default HomescreenPortfolio;