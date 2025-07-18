"use client";

import { useState } from "react";
import Logo from "../logo";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full border-t-4 border-primary transition-all duration-500 ease-in-out before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:bg-primary before:transition-all before:duration-500 before:ease-in-out ${
        sticky ? "before:h-full" : "before:h-0"
      }`}
    >
      <div className="container">
        <nav
          className={`relative flex item-center justify-between ${
            sticky ? "py-5" : "py-7"
          }`}
        >
          <div className="flex items-center">
            <Logo sticky={sticky} />
          </div>
          <div className="flex items-center gap-7">
            <div className="flex item-center gap-3">Theme</div>

            <div className="relative flex align-middle">menu</div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
