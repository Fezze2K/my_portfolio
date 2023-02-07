

function Card1({imagePath, imageAlt, title, description}) {
  
  return (
<div className="transition hover:duration-400 hover:scale-110 max-w-lg bg-white border-white rounded-xl shadow-2xl hover:shadow-neutral-900">
    <a href="#">
        <img className="rounded-t-xl" src={imagePath} alt={imageAlt} />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black ">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">{description}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
        </a>
    </div>
</div>
  );
}

export default Card1;
