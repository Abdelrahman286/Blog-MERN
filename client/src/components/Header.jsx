import React from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  // to get the current location
  // we gonna active the links using this path
  const path = useLocation().pathname;
  return (
    <div className="border-b-2 p-2 flex justify-around">
      <Link to="/" className="border-b-4">
        <span className="">Home Page</span>
      </Link>

      <form>
        <input
          type="text"
          className="rounded-lg bg-cyan-50"
          placeholder="Search..."
        ></input>
      </form>

      <button className="bg-neutral-500">Search</button>

      <button className="p-3">Toggle Dark</button>

      <Link to="/signin">
        <button className="p-3">signin</button>
      </Link>

      <Link to="/signup">
        <button className="p-3">signup</button>
      </Link>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/projects">PROJECTS</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
