import React, { useEffect, useState } from "react";

export default function Leetcode() {
  const [username, setUsername] = useState("raunakmishra1243");
  const [inputUsername, setInputUsername] = useState(""); // For user input
  const [data, setData] = useState({});

  const fetchLeetCodeData = (user) => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error("Failed to fetch data:", err));
  };

  useEffect(() => {
    fetchLeetCodeData(username); // Fetch data for the default user on component mount
  }, [username]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputUsername.trim()) {
      setUsername(inputUsername.trim());
      fetchLeetCodeData(inputUsername.trim());
      setInputUsername(""); // Clear input field
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white p-6 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">LeetCode Profile Viewer</h1>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex items-center space-x-4 mb-6"
      >
        <input
          type="text"
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
          placeholder="Enter LeetCode Username"
          className="rounded-lg p-2 border-2 border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
        >
          Search
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-6">
        Showing stats for: <span className="text-blue-400">{username}</span>
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Total Questions */}
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Total Questions Solved</h2>
          <p className="text-2xl">
            {data.totalSolved} / {data.totalQuestions}
          </p>
        </div>

        {/* Easy Questions */}
        <div className="p-4 bg-green-700 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Easy Questions Solved</h2>
          <p className="text-2xl">
            {data.easySolved} / {data.totalEasy}
          </p>
        </div>

        {/* Medium Questions */}
        <div className="p-4 bg-yellow-600 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">
            Medium Questions Solved
          </h2>
          <p className="text-2xl">
            {data.mediumSolved} / {data.totalMedium}
          </p>
        </div>

        {/* Hard Questions */}
        <div className="p-4 bg-red-700 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Hard Questions Solved</h2>
          <p className="text-2xl">
            {data.hardSolved} / {data.totalHard}
          </p>
        </div>

        {/* Acceptance Rate */}
        <div className="p-4 bg-purple-700 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Acceptance Rate</h2>
          <p className="text-2xl">{data.acceptanceRate}%</p>
        </div>

        {/* Ranking */}
        <div className="p-4 bg-blue-700 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Global Ranking</h2>
          <p className="text-2xl">#{data.ranking}</p>
        </div>

        {/* Contribution Points */}
        <div className="p-4 bg-teal-700 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Contribution Points</h2>
          <p className="text-2xl">{data.contributionPoints}</p>
        </div>
      </div>
    </div>
  );
}
