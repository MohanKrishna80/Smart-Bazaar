import * as React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="bg-purple-600 w-full fixed z-10 shadow-md">
      <div className="flex items-center justify-between px-4 md:px-6 h-16 text-white">
        <div className="flex items-center gap-3 flex-1">
          <div className="bg-black text-gray-200 px-3 py-1 rounded font-bold">
            LOGO
          </div>

          <div className="flex md:hidden flex-1 bg-white rounded-lg">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 w-full text-black outline-none rounded-l-lg"
            />
            <i className="fa-solid fa-magnifying-glass text-xl text-gray-500 p-2 sm:pr-4"></i>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-lg w-full ml-6">
          <li>
            <Link
              to="/"
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/account" className="hover:underline">
              Account
            </Link>
          </li>
          <li>
            <Link to="/cart/1" className="hover:underline">
              Cart
            </Link>
          </li>

          <li className="ml-4 flex-1 bg-white rounded-lg">
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Search Products, Electronics and More"
                className="px-3 py-1 w-full text-black outline-none rounded-l-lg"
              />
              <i className="fa-solid fa-magnifying-glass text-xl text-gray-500 p-2 pr-7 "></i>
            </div>
          </li>

          <li>
            <Link to="/signUp" className="hover:underline">
              SignUp
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </li>
          <li>
            <Link to="/settings" className="hover:underline">
              Settings
            </Link>
          </li>
        </ul>

        <button
          className="block md:hidden text-2xl ml-3"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-purple-700 text-white px-6 py-4 flex flex-col space-y-3">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/account" onClick={() => setMenuOpen(false)}>
            Account
          </Link>
          <Link to="/cart/1" onClick={() => setMenuOpen(false)}>
            Cart
          </Link>
          <Link to="/signUp" onClick={() => setMenuOpen(false)}>
            SignUp
          </Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
          <Link to="/settings" onClick={() => setMenuOpen(false)}>
            Settings
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
