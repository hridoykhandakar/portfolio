import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
const Nav = ({ handleDark }) => {
  const [dark, setDark] = useState(true);
  const handleClick = () => {
    setDark(!dark);
    handleDark(dark);
  };
  return (
    <nav className="backdrop-blur-xl bg-white/30 py-4 dark:bg-black/30 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="w-full px-10 md:px-20 lg:px-40 flex flex-wrap items-center justify-between mx-auto">
        <a href="">
          <h1 className="text-xl font-burtons dark:text-white ">khandakar</h1>
        </a>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={handleClick}
              className="cursor-pointer text-2xl dark:text-white"
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
