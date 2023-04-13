import Image from "next/image";

export function PortfolioComponent(props) {

  var title = props.title;
  var imgSrc = props.src;

  return (
    <div className="p:10 lg:p-10 text-center shadow-lg rounded-lg mx-auto my-10">
      <Image src={imgSrc} width={imgSrc} alt={title} />
      <h3 className="pt-3 text-teal-700 font-medium"> {title} </h3>
    </div>
  );
}
