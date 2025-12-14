/** @format */

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "./Data";

export const Header = () => {
  const [top, setTop] = useState("0");

  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { replace: false });

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  useEffect(() => {
    const onScrollY = () => {
      setTop(window.scrollY);
    };

    window.addEventListener("scroll", onScrollY);
    return () => window.removeEventListener("scroll", onScrollY);
  }, []);

  return (
    <section className='fixed z-99 top-0 left-0 min-w-screen pt-2'>
      <div className=' w-full h-20 flex items-center justify-between px-6'>
        <a
          href='/'
          className={`text-4xl font-extrabold transition-all duration-500
    ${top > 100 ? "opacity-0" : "opacity-100"}
    drop-shadow-[0_6px_12px_rgba(20,200,60,0.7)]
    [text-shadow:0_0_8px_rgba(132,204,22,1)]
    [-webkit-text-stroke:1px_black]
  `}>
          <span className='text-lime-400 pl-2 '>Bug</span>
          <span className='text-green-400 pr-2'>Sucks</span>
        </a>

        <div className='group  flex justify-end rounded-full overflow-hidden'>
          <div className='h-14 w-14 max-w-screen rounded-full flex border-2 border-green-500/50 backdrop-blur-sm bg-white/10 items-center overflow-hidden whitespace-nowrap origin-right transition-all duration-500 delay-1000 ease-in-out hover:w-full hover:delay-0 '>
            <img src='./bugsucks.png' className='shrink-0 h-14 w-14 p-3' />
            <nav className='flex items-center justify-evenly gap-6 mx-4 overflow-hidden'>
              {navLinks.map((link) =>
                link.type === "route" ? (
                  <button
                    key={link.name}
                    onClick={() => navigate(link.href)}
                    className="hover-underline text-lime-500 cursor-pointer font-medium hover:text-green-500 duration-200'">
                    {link.name}
                  </button>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => handleScroll(link.href)}
                    className="hover-underline text-lime-500 cursor-pointer font-medium hover:text-green-500 duration-200'">
                    {link.name}
                  </button>
                )
              )}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
