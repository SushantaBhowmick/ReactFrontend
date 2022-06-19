import { useLocation, useNavigate } from "react-router-dom";
import React, { useRef } from "react";

const Search = () => {
  const searchRef = useRef();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="rightnav">
      <input
        ref={searchRef}
        type="text"
        name="search"
        id="search"
        placeholder="search"
      />
      <button
        className="btn"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          navigate(`${pathname}?search=${searchRef?.current?.value}`);
        }}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default Search;
