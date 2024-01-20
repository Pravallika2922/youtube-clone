import { useDispatch, useSelector } from "react-redux";
import {
  BREADCRUMB_ICON,
  USER_ICON,
  YT_LOGO,
  YT_SEARCH_API,
} from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import { useState, useEffect } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleClick = () => {
    dispatch(toggleMenu());
  };
  const getSearchSuggestions = async () => {
    const data = await fetch(YT_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          src={BREADCRUMB_ICON}
          alt="breadcrumb"
          className="h-12 mx-2 cursor-pointer"
          onClick={handleClick}
        />
        <img src={YT_LOGO} alt="youtube-logo" className="h-12" />
      </div>
      <div className="col-span-10">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 px-10 border border-gray-400 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />

          <button className=" border border-gray-400 rounded-r-lg px-2 bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-5 w-[45rem] rounded-lg border border-gray-100 ">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li className="py-2 hover:bg-gray-100 shadow-sm" key={index}>
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img src={USER_ICON} alt="user-icon" className="h-10" />
      </div>
    </div>
  );
};
export default Header;
