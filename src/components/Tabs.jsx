import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/router";
import { useTabContext } from "@/Context/TabContext";

function SearchInput({ searchQuery, handleSearch }) {
  return (
    <div className="flex items-center gap-8 h-14 px-3 rounded-lg border border-gray-300 bg-white mb-8 mr-[200px]">
      <svg
        className="w-6 h-6 text-gray-400"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20 20l-4.585-4.585M10 17a7 7 0 100-14 7 7 0 000 14z"></path>
      </svg>
      <input
        type="text"
        placeholder="Search schemes, job opportunities, or scholarships"
        className="flex-1 px-2 text-sm bg-transparent focus:outline-none w-64"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}

export default function Tabs({setComponent}) {
  const router = useRouter();
  const { tab } = router.query;
  const {activeTab, setActiveTab, searchQuery, setSearchQuery} = useTabContext();

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
      setComponent(tab);
    }
  }, [tab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setComponent(tab);
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query); // Update searchQuery state via context
  };

  const getButtonClass = (tabName) => {
    return `flex-grow text-center font-sm p-[12px] rounded-t-[8px] text-semibold text-[14px] cursor-pointer font-sans ${
      activeTab === tabName
        ? "bg-[#EEEEFF] border-b-[3px] border-[#3431BB]"
        : "hover:bg-[#EEEEFF] hover:border-b-[3px] hover:border-[#3431BB]"
    }`;
  };

  return (
    <div className="mb-4">
      <Suspense fallback={<div>Loading search...</div>}>
        <SearchInput searchQuery={searchQuery} handleSearch={handleSearch} />
      </Suspense>

      <div className="flex justify-center items-center gap-[15px]">
        <button
          className={getButtonClass("Schemes")}
          onClick={() => handleTabClick("Schemes")}
        >
          Schemes
        </button>
        <button
          className={getButtonClass("Job Openings")}
          onClick={() => handleTabClick("Job Openings")}
        >
          Job Openings
        </button>
        <button
          className={getButtonClass("Scholarships")}
          onClick={() => handleTabClick("Scholarships")}
        >
          Scholarships
        </button>
        <button
          className={getButtonClass("Saved")}
          onClick={() => handleTabClick("Saved")}
        >
          Saved
        </button>
      </div>
      <hr />
    </div>
  );
}
