
const RepoCard = ({ liveDemo, name, description, topics, htmlUrl, language, }) => {

  return (
    <>
      {/* <!-- Card 1 --> */}
      <div className={`transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 ${language === "JavaScript" ? "bg-yellow-500" : language === "SCSS" ? "bg-purple-600" : language === "HTML" ? "bg-red-600" : language === "CSS" ? "bg-pink-500" : language === "Vue" ? "bg-green-500" : language === "Ruby" ? "bg-red-900" : language === "Python" ? "bg-yellow-400" : language === "Java" ? "bg-orange-900" : language === "Shell" ? "bg-green-500" : "bg-blue-500"} text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0`}>

        {/* <!-- Dot Follwing the Left Vertical Line --> */}
        <div className={`w-5 h-5 bg-white absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0`} />
        {/* <!-- Line that connecting the box with the vertical line --> */}
        <div className={`w-10 h-1 bg-white  absolute -left-10 z-0`} />
        {/* <!-- Content that showing in the box --> */}
        <div className="flex-auto">
          <h1 className="text-xl font-bold">
            {name}
            <span className="badge text-blue-500 bg-white border-2 border-blue-500 ml-1">
              {language ? language : "Readme"}
            </span>
          </h1>
          <h3 className="my-2">{description}</h3>
          <h4>
            {topics.map((topic) => (
              <span key={topic} className="mr-2 badge-xs badge p-2">
                {topic}
              </span>
            ))}
          </h4>
        </div>

        <a href={`${htmlUrl}`} className="text-center text-black border-2 border-black  capitalize hover:text-white btn-md btn-ghost btn">
          View Repo
        </a>
        {liveDemo && <a href={`${liveDemo}`} className="text-center text-black border-2 border-black capitalize hover:text-white btn-md btn-ghost btn md:ml-3">
          Live Demo
        </a>}
      </div>
    </>
  );
};

export default RepoCard;
