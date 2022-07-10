import React from "react";

function NextAndPreviousBttn({
  page,
  getNextPage,
  getPreviousPage,
  findPage,
  data,
}: any) {
  return (
    <div className="text-center space-x-4 flex justify-center px-2 sm:px-0">
      <button
        onClick={getPreviousPage}
        disabled={page === 1}
        style={{
          cursor: page === 1 ? "not-allowed" : "pointer",
        }}
        className="border-2 text-white bg-[#953ffa] border-[#953ffa] p-1 rounded-md"
      >
        Previous Page
      </button>

      <p className="text-center">
        <span className="text-white">Showing Page </span>
        <span className="text-[#953ffa]">{findPage().current} </span>
        <span className="text-white">
          out of {data && data.characters.info.pages}
        </span>
      </p>
      <button
        onClick={getNextPage}
        className="border-2 text-white bg-[#953ffa] border-[#953ffa] p-1 rounded-md"
        disabled={page === data && data.characters.info.pages}
      >
        Next Page
      </button>
    </div>
  );
}

export default NextAndPreviousBttn;
