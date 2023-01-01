import { Link } from 'react-router-dom';

function CaseCard({ data, index }) {
  return(
    <Link
      to="/cases/id" 
      onMouseEnter={() => {
      const title_element = document.getElementById(index);
      title_element.classList.add("text-yellow-button")
      const img = document.getElementById(data.id)
      img.classList.add('object-scale-down')  
    }} 
    onMouseLeave={() => {
      const title_element = document.getElementById(index);
      title_element.classList.remove("text-yellow-button");
      const img = document.getElementById(data.id);
      img.classList.remove('object-scale-down');
    }}

    className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img id={data.id} className="h-96 w-full object-cover" src={data.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-lg font-medium text-black">
                      <a href={data.category.href} className="">
                        {data.category.name}
                      </a>
                    </p>
                    <a href={data.href} className="mt-2 block">
                      <p id={index} className="text-3xl pb-5 pt-2 transition duration-400 ease-in-out font-semibold text-gray-900">{data.title}</p>
                      <p className="mt-3 text-base leading-7 tracking-wider text-gray-500">{data.description}</p>
                    </a>
                  </div>
                </div>
              </Link>
  );
}

export default CaseCard;