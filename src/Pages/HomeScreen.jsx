import React, { useEffect, useState } from "react";
import axios from "axios";

// ICONS
import { BsGithub } from "react-icons/bs";
import Loader from "../Components/Loader";

const HomeScreen = () => {

  const [input, setInput] = useState("");
  const [userSearch, setUserSearch] = useState([]);
  const [loading, setLoading] = useState(false)

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true)

    setTimeout(() => {
      axios.get(`https://api.github.com/search/users?q=${input}`).then(res => setUserSearch(res.data.items))
      setLoading(false)
      setInput("")
    }, 1500);

  }




  console.log(userSearch);


  return (
    <div className="text-center">
      <h1 className="text-4xl">Search GitHub Profile</h1>

      <form className="form-control my-5">
        <div className="flex justify-center space-x-3">
          <input value={input} onChange={(e) => setInput(e.target.value)} type="search" placeholder="Search" className="w-4/6  input input-primary input-bordered lg:w-2/6" />
          <button onClick={onSubmitHandler} className="btn btn-primary">Search</button>
        </div>
      </form >

      <div className="flex w-5/6 flex-wrap mx-auto">

        {loading ? <Loader /> : userSearch.map(user => {
          return <div key={user.id} className="mx-auto p-3">

            {/* PROFILE CARD */}
            <div className="card card-bordered border-white flex p-5 bg-slate-800">
              {/* PROFILE AVATAR */}
              <div className="avatar flex items-center justify-center">
                <div className="rounded-full w-28 h-28 ">
                  <img alt="avatar" src={user.avatar_url} />
                </div>
              </div>

              {/* CARD BODY */}
              <div className="card-body flex items-center p-0 sm:p-5">
                <h1 className="card-title text-2xl">{user.login}</h1>

                <div className="location flex items-center">

                  <p className="text-xl">{user.location}</p>
                </div>
                <div className="blog flex items-center ">

                  <a href={`${user.blog}`}>
                    {user.blog}
                  </a>
                </div>
                <div className="card-actions">
                  <a href={`${user.html_url}`} className="btn btn-outline ">
                    <BsGithub className="mr-2 text-lg" />
                    View Profile
                  </a>
                </div>
              </div>
            </div>


          </div>
        })


        }</div>

    </div >
  );
};

export default HomeScreen;
