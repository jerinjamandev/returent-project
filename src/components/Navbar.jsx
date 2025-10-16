import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../provider/Authprovider";
import { FaCartShopping } from "react-icons/fa6";


const Navbar = () => {
  const { user, logout } = useContext(Authcontext)
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
        {user && <button onClick={logout} className="btn btn-error text-white">Log-out</button>
        }
        {!user && <button className="btn btn-error text-white"><Link to={'/login'}>Log-in</Link></button>
        }     </div>

      <div>
      <Link to={'/addtocart'}> 
      
       <button className="btn rounded-2xl mx-4 text-black">
          <FaCartShopping fontSize={30} />
          </button>
          </Link>
      </div>
    </div>
  );
};

export default Navbar;
