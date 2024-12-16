import React, { useEffect, useState } from "react";

export default function Github() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/raunakjr")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center m-6 bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">GitHub Profile</h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <img
          className="rounded-full shadow-lg border-4 border-gray-300 hover:scale-105 transition-transform duration-300 ease-in-out"
          src={data.avatar_url}
          alt="GitHub Avatar"
          width={150}
        />
        <div className="text-left max-w-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            About Me
          </h2>
          <p className="text-gray-700 mb-4">
            I’m Raunak Mishra, a passionate developer with expertise in React
            and JavaScript. Currently, I’m exploring backend technologies to
            grow as a full-stack developer. I enjoy building intuitive,
            user-centric web applications.
          </p>
          <p className="text-gray-700 mb-4">
            Check out my GitHub projects and contributions:
          </p>
          <a
            className="text-blue-600 underline hover:text-blue-400"
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my GitHub Profile
          </a>
          <p className="mt-4 text-gray-900 font-medium text-lg">
            Followers: {data.followers || "Loading..."}
          </p>
          <p className="mt-2 text-gray-900 font-medium text-lg">
            Public Repos: {data.public_repos || "Loading..."}
          </p>
        </div>
      </div>
      <div className="mt-8">
        <a
          className="text-indigo-600 font-semibold hover:underline"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about React
        </a>
      </div>
    </div>
  );
}
