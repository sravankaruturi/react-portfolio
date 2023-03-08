import Image from "next/image";

export function PortfolioComponent(props) {

  var title = props.title;
  var imgSrc = props.src;

  return (
    <div className="p:10 lg:p-10 text-center shadow-lg rounded-lg mx-auto my-10 w-2/3 sm:w-2/3 sm:h-auto lg:w-1/4 lg:h-auto">
      <Image src={imgSrc} alt={title}/>
      <h3> {title} </h3>
    </div>
  );
}
