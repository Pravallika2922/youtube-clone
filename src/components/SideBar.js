import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpenFlag);
  if (!isMenuOpen) return null;
  return (
    <div className="col-span-1 shadow-lg m-2">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subsriptions</li>
      </ul>
      <h1 className="font-bold pt-5"> Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Games</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5"> Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Games</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
