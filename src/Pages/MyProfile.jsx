import React, { useEffect, useState } from "react";
import axios from "axios";

// ICONS
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

//COMPONENTS
import Loader from "../Components/Loader";
import RepoCard from "../Components/RepoCard";

const MyProfile = () => {
  //STATES
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState([]);
  const [bgColors] = useState([
    "blue",
    "green",
    "pink",
    "yellow",
    "purple",
    "blue",
    "green",
    "pink",
    "yellow",
    "purple",
    "blue",
    "green",
    "pink",
    "yellow",
    "purple",
    "blue",
    "green",
    "pink",
    "yellow",
    "purple",
    "blue",
    "green",
    "pink",
    "yellow",
    "purple",
    "blue",
    "green",
    "pink",
    "yellow",
    "purple",
  ]);

  //EFFECTS
  useEffect(() => {
    const apiCall = setTimeout(() => {
      axios
        .get("https://api.github.com/users/emrekaraa")
        .then((res) => setData(res.data));
      axios
        .get("https://api.github.com/users/emrekaraa/repos")
        .then((res) => setRepos(res.data));
    }, 2000);

    return () => clearTimeout(apiCall);
  }, []);

  return (
    <>
      {/* CONTAINER */}
      <div className="items-center flex flex-col mb-5 px-5 h-auto">
        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold my-5 text-center">
          My GitHub Profile
        </h1>
        {/* LOADER ANIMATION DATA CONTROL  */}
        {data.length != 0 ? (
          <>
            {/* PROFILE CARD */}
            <div className="card lg:card-side card-bordered border-white flex md:px-5 py-5 w-full md:w-5/12">
              {/* PROFILE AVATAR */}
              <div className="avatar flex items-center justify-center">
                <div className="mb-8 rounded-full w-40 h-40 ">
                  <img src={data.avatar_url} />
                </div>
              </div>

              {/* CARD BODY */}
              <div className="card-body flex items-center p-0 sm:p-5">
                <h1 className="card-title text-3xl">{data.name}</h1>
                <div className="badges my-1 flex w-full justify-evenly flex-wrap">
                  <div className="badge badge-primary cursor-pointer ">
                    <a href="https://github.com/emrekaraa?tab=repositories">
                      <b>Repos: {data.public_repos}</b>
                    </a>
                  </div>
                  <div className="badge badge-secondary cursor-pointer ">
                    <a href="https://github.com/emrekaraa?tab=followers">
                      <b>Followers {data.followers}</b>
                    </a>
                  </div>
                  <div className="badge badge-accent cursor-pointer">
                    <a href="https://github.com/emrekaraa?tab=following">
                      <b>Following {data.following}</b>
                    </a>
                  </div>
                </div>
                <div className="location mt-3 flex items-center">
                  <GoLocation />
                  <p className="ml-2 text-xl">{data.location}</p>
                </div>
                <div className="blog flex items-center ">
                  <BsLinkedin />
                  <a className="ml-2" href={`${data.blog}`}>
                    {data.blog}
                  </a>
                </div>
                <div className="card-actions">
                  <a href={`${data.html_url}`} className="btn btn-outline ">
                    <BsGithub className="mr-2 text-lg" />
                    View Profile
                  </a>
                </div>
              </div>
            </div>

            {/* REPOSITORIES  */}
            <div className="w-12/12 h-2/5 mt-10  ">
              <h1 className="text-3xl text-center font-bold ">Repositories</h1>
              <p className="text-center font-bold text-2xl">({repos.length})</p>
              <div className="border-l-2 mt-10">
                {repos.map((repo, i) => (
                  <RepoCard
                    key={repo.id}
                    color={bgColors[i]}
                    liveDemo={repo.homepage}
                    name={repo.name}
                    description={repo.description}
                    topics={repo.topics}
                    htmlUrl={repo.html_url}
                  />
                ))}
                {/* <RepoCard bgColor={"bg-blue"} />
                <RepoCard bgColor={"bg-green"} />
                <RepoCard bgColor={"bg-yellow"} />
                <RepoCard bgColor={"bg-purple"} />
                <RepoCard bgColor={"bg-pink"} /> */}
              </div>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default MyProfile;
