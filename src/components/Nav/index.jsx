import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="flex fixed z-50 bg-white h-20 w-[100vw] p-5 justify-between align-baseline">
        <Link to="/">
            <h1 className='flex relative border border-black w-32 h-10 text-center justify-center items-center'>logo</h1>
        </Link>
      
      <div className="flex flex-row">
        <ul className="flex gap-10">
          <li className="relative" onClick={toggleDropdown}>
            <span className="cursor-pointer font-medium">Charters</span>
            {showDropdown && (
              <ul className="absolute top-full left-0 w-fit bg-white shadow-lg p-4 z-50">
                <li><Link to="/charters" onClick={hideDropdown} className="block py-2 px-4  font-medium">All Charters</Link></li>
                <li><Link to="/charters/inshore-backcountry" onClick={hideDropdown} className="block py-2 px-4  font-medium">Backcountry &amp; Inshore</Link></li>
                <li><Link to="/charters/offshore" onClick={hideDropdown} className="block py-2 px-4 font-medium">Reef &amp; Offshore</Link></li>
                <li><Link to="/charters/eco-enviro-tours" onClick={hideDropdown} className="block py-2 px-4 font-medium">Eco &amp; Enviro Tours</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/guides" onClick={hideDropdown} className="font-medium">Guides</Link>
          </li>
          <li>
            <Link to="/visit-islamorada" onClick={hideDropdown} className="font-medium">Visit Islamorada</Link>
          </li>
          <li>
            <Link to="/frequently-asked-questions" onClick={hideDropdown} className="font-medium">FAQs</Link>
          </li>
          <li>
            <Link to="/contact" onClick={hideDropdown} className="font-medium">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
