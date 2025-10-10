import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-10">
      <div className="flex-1">
        <a className="text-2xl font-bold text-red-600">🍽 Bistro Bliss</a>
      </div>

      <div className="flex-1 flex justify-center">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/menu'}>Menu</Link></li>
          <li><Link to={'/pages'}>Pages</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>

        </ul>
      </div>

      <div className="flex-none">
      <button className="btn btn-error text-white"><Link to={'/login'}>Log-in</Link></button>

      </div>
    </div>
  );
};

export default Navbar;
