"use client";

import React from "react";

const LocationInfo = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-bold mb-4">찾아오는 길</h2>
      <p className="text-gray-800">강원도 동해시 한양 수자인 아파트</p>
      <div className="mt-4">
        <a
          href="https://map.kakao.com/link/search/강원도 동해시 한양 수자인 아파트"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition"
        >
          지도에서 찾기 →
        </a>
      </div>
    </div>
  );
};

export default LocationInfo;
