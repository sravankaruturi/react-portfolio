import abcs from "../Assets/project_media/Osmo/Abcs/appstorepreview.png";
import wexp from "../Assets/project_media/Osmo/WordsExp/appstorepreview.png";
import mbuzz from "../Assets/project_media/Osmo/MathBuzz/appstorepreview.png";
import numbers from "../Assets/project_media/Osmo/Numbers/appstorepreview.png"

import adminops from "../Assets/project_media/AdminOps/ops-1.png"
import labops from "../Assets/project_media/LabOps/Labops-1.png"

import codeblank from "../Assets/project_media/CodeBlankEngine.png"
import pilot from "../Assets/project_media/PilotEngine-1.png"
import kodi from "../Assets/project_media/KodiEngine.png"

import PortfolioGrid from "./PortfolioGrid";

let unityItems = [
    { src: abcs, title: "Osmo LGK ABCs" },
    { src: wexp, title: "Osmo Words Explorers" },
    { src: mbuzz, title: "Osmo GK+ Math Buzz" },
    { src: numbers, title: "Osmo GK Numbers" },
];

let gameEngineItems = [
    { src: codeblank, title: "Code Blank Game Engine" },
    { src: pilot, title: "Pilot Game Engine" },
    { src: kodi, title: "Kodi Game Engine" }
]

let webAppItems = [
    { src: adminops, title: "Admin Ops Web Portal" },
    { src: labops, title: "Lab Ops Web Portal" }
]

function PortfolioPageBody() {

    return (
        <section mx-10>

            <div className="text-center text-slate-600 mt-10">
                <h3 className="text-3xl p-5 font-semibold"> PROJECTS </h3>
                <p className="text-xl font-medium px-5 pb-5">
                    Here are some of the projects I worked on in the past
                </p>
            </div>


            <div class="sm:hidden">
                <label for="tabs" class="sr-only">Category</label>
                <select id="tabs" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Unity</option>
                    <option>Game Engines</option>
                    <option>Web Apps</option>
                    <option>Fun</option>
                </select>
            </div>
            <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                <li class="w-full">
                    <a href="#" class="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">All</a>
                </li>
                <li class="w-full">
                    <a href="#unity" class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Unity</a>
                </li>
                <li class="w-full">
                    <a href="#gameengines" class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Game Engines</a>
                </li>
                <li class="w-full">
                    <a href="#webapps" class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Web Apps</a>
                </li>
                <li class="w-full">
                    <a href="#fun" class="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Fun</a>
                </li>
            </ul>

            <PortfolioGrid title='unity' data={unityItems}></PortfolioGrid>
            <PortfolioGrid title='gameengines' data={gameEngineItems}></PortfolioGrid>
            <PortfolioGrid title='webapps' data={webAppItems}></PortfolioGrid>
            <PortfolioGrid title='fun' data={webAppItems}></PortfolioGrid>


        </section>
    );

};

export default PortfolioPageBody;