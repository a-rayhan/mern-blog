import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <div className="shadow-lg">
      <Navbar className="max-w-6xl mx-auto">
        <Link to='/' className="flex items-center gap-x-3">
          <div className="w-14 h-14 rounded-full bg-yellow-300 flex items-center justify-center">
            <HiOutlineLightBulb className="text-4xl" />
          </div>
          <h1 className="font-inter text-xl font-semibold hidden md:inline">BLOGFY</h1>
        </Link>

        <Navbar.Collapse className="hidden lg:inline">
          <Navbar.Link active={path === '/'} as={'div'}>
            <Link to="/" className="font-inter text-base">
              Home
            </Link>
          </Navbar.Link>

          <Navbar.Link active={path === '/about'} as={'div'}>
            <Link to="/about" className="font-inter text-base">
              About
            </Link>
          </Navbar.Link>

          <Navbar.Link active={path === '/projects'} as={'div'}>
            <Link to="/projects" className="font-inter text-base">
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>

        <div className="flex items-center gap-x-2 md:gap-x-5">
          <form className="relative">
            <input
              type="text"
              placeholder="Search by articles"
              className="pl-9 rounded-full placeholder:text-dark-grey font-inter font-medium hidden lg:inline border-2"
            />

            <div className="absolute top-[10px] left-2 hidden lg:inline">
              <AiOutlineSearch className="text-2xl cursor-pointer" />
            </div>
          </form>

          <div className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center hover:duration-100 cursor-pointer lg:hidden">
            <AiOutlineSearch className="text-xl" />
          </div>

          <div className="w-10 h-10 rounded-full hover:bg-gray-100 flex justify-center items-center hover:duration-100 cursor-pointer">
            <FaMoon className="text-xl" />
          </div>

          <Link to="/sign-in">
            <button className="font-inter border-2 px-5 py-1 rounded-full border-yellow-300 font-semibold text-lg bg-yellow-300 hover:bg-transparent duration-100">
              Sign In
            </button>
          </Link>

          <Navbar.Toggle className="bg-gray-100" />
        </div>

        <Navbar.Collapse className="md:hidden">
          <Navbar.Link active={path === '/'} as={'div'}>
            <Link to="/" className="font-inter text-base">
              Home
            </Link>
          </Navbar.Link>

          <Navbar.Link active={path === '/about'} as={'div'}>
            <Link to="/about" className="font-inter text-base">
              About
            </Link>
          </Navbar.Link>

          <Navbar.Link active={path === '/projects'} as={'div'}>
            <Link to="/projects" className="font-inter text-base">
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
