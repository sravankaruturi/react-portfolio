
import { PortfolioComponent } from "./PortfolioComponent";

function PortfolioGrid({ title, data }) {
    return (
        <div id={title} className="grid 
            mx-5 my-5
            md:grid-cols-3 md:gap-4 
            xl:grid-cols-5 xl:gap-6
            sm:grid-cols-1">

            {
                data.map((element, index) => {
                    return (
                        <PortfolioComponent src={element.src} title={element.title} key={index} />
                    )
                })
            }

        </div>
    );
}

export default PortfolioGrid;