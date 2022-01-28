import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
   return (
      <div
         className="p-10 Navbar opacity-0 lg:opacity-100
         absolute -left-96 lg:relative lg:left-0 w-96"
         style={{
            transition: "all .7s",
         }}
      >
         <ul className="">
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/employees">Employees App</Link>
            </li>

            <li>
               <Link to="/Performance">Performance</Link>
            </li>
         </ul>
      </div>
   );
}

export default Navbar;
