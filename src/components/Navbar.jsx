import { Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg py-3 border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex flex-shrink-0 items-center">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex space-x-12 ml-14">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              );
            })}
          </ul>
          <div className="hidden lg:flex space-x-12 justify-center items-center">
            <a href="#" className="py-2 px-3 rounded-md border">
              Sign In
            </a>
            <a
              href="#"
              className="px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-800  rounded-md"
            >
              Create Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end ">
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="z-20 fixed right-0 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden ">
            <ul className="flex flex-col justify-center items-center">
              {navItems.map((item, index) => (
                <li className="py-4" key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="py-4 flex gap-10">
              <a href="#" className="py-2 px-3 rounded-md border">
                Sign In
              </a>
              <a
                href="#"
                className="px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-800  rounded-md"
              >
                Create Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
