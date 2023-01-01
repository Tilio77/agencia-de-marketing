function ServiceCard({ data, index }) {
	return (
		<div 
		onMouseEnter={() => {
      const title_element = document.getElementById(index);
      title_element.classList.add("text-yellow-button")
    }} 
    onMouseLeave={() => {
      const title_element = document.getElementById(index);
      title_element.classList.remove("text-yellow-button");
    }}
		className="w-full relative p-8 h-96 lg:h-[200pm] bg-white hover:-translate-y-1 transition duration-300 ease-in-ou">
			<div className="w-full">
				<img src={data.img} className="w-10 h-10" />
				<h2 className="text-xl font-semibold text-gray-900 pt-8">{data.title}</h2>
				<p className="text-base font-regular text-gray-500 pt-4">{data.title}</p>
				<div className="absolute bottom-0 left-0">
					<h2 id={index} className="items-end text-xl font-semibold pt-8">Learn more</h2>
				</div>
			</div>
		</div>
	);
}

export default ServiceCard;