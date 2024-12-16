import React from "react";
export default function About() {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 to-purple-100">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/465588914_3750840925131396_9165481491360633895_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=rSz0wmzOfHgQ7kNvgE4uzsS&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=AzP28vcSh0t1__ERU6_jaE8&oh=00_AYCGdVEocaSPGYV0NHc6m-V-fu9-LGyNgHcH3ncpjaQ6kg&oe=6765CA24"
              alt="About Raunak Mishra"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Meet Raunak Mishra
            </h2>
            <p className="mt-6 text-gray-700 text-lg">
              Hi, I am Raunak Mishra, a passionate developer and problem-solver
              from NIT Patna, where I graduated in 2024 with a degree in
              Electronics and Communication Engineering. I have strong
              foundational knowledge in operating systems (OS), database
              management systems (DBMS), computer networks (CN), and
              object-oriented programming (OOP).
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Currently, I am working as an Application Engineer at o9 Solutions
              in Bengaluru, where I transitioned to a full-time role after
              completing a six-month internship. My professional journey started
              in January 2024, and I specialize in creating efficient, scalable,
              and user-friendly applications.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Beyond work, I love exploring backend technologies and sharpening
              my development skills. Check out my coding journey and projects
              using the links below:
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <a
                href="https://github.com/raunakjr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                GitHub Profile
              </a>
              <a
                href="https://leetcode.com/raunakmishra1243"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 font-semibold hover:underline"
              >
                LeetCode Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
