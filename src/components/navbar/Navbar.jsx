import React, { useState, useContext } from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Avatar,
    Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AiOutlineShareAlt, AiOutlineSearch } from 'react-icons/ai'
import myContext from "../../context/data/myContext";
import SearchDialog from "../searchDialog/SearchDialog";
import ShareDialogBox from "../shareDialogBox/ShareDialogBox";

export default function Nav() {
    const [openNav, setOpenNav] = useState(false);
    const context = useContext(myContext);
    const { mode, toggleMode } = context;

    // All NavList 
    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal hover:text-blue-500 transition duration-300"
                style={{ color: mode === 'dark' ? 'white' : 'white' }}
            >
                <Link to={'/'} className="flex items-center">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal hover:text-blue-500 transition duration-300"
                style={{ color: mode === 'dark' ? 'white' : 'white' }}
            >
                <Link to={'/allblogs'} className="flex items-center">
                    Blogs
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal hover:text-blue-500 transition duration-300"
                style={{ color: mode === 'dark' ? 'white' : 'white' }}
            >
                <Link to={'/adminlogin'} className="flex items-center">
                    Admin Login
                </Link>
            </Typography>
        </ul>
    );

    return (
        <>
            {/* Navbar  */}
            <Navbar
                className="sticky inset-0 z-20 h-max max-w-full border-none rounded-none py-2 px-4 lg:px-8 lg:py-2"
                style={{
                    background: mode === 'dark' ? 'linear-gradient(135deg, rgba(30, 41, 59, 1) 0%, rgba(39, 56, 91, 1) 100%)' : 'linear-gradient(135deg, rgba(48, 51, 107, 1) 0%, rgba(66, 78, 176, 1) 100%)'
                }}>
                {/* Desktop View  */}
                <div className="flex items-center justify-between text-blue-gray-900">

                    {/* Home Page Link  */}
                    <Link to={'/'}>
                        <Typography
                            as="a"
                            className="mr-4 cursor-pointer py-1.5 text-xl font-bold flex gap-2 items-center text-white transition duration-300 hover:text-blue-400"
                        >
                            {/* Logo Image  */}
                            <img
                                className='w-10 h-10 rounded-full border-2 border-white'
                                src='https://cdn-icons-png.flaticon.com/128/3685/3685253.png'
                                alt="Creator"
                            />
                            {/* Logo Text  */}
                            <span>
                                Creator
                            </span>
                        </Typography>
                    </Link>

                    {/* All Items  */}
                    <div className="flex items-center gap-4">

                        {/* Navlist  */}
                        <div className="hidden lg:block">
                            {navList}
                        </div>

                        {/* Search Icon */}
                        <div>
                            <SearchDialog />
                        </div>

                        {/* Share Icon */}
                        <div className="hidden lg:block">
                            <ShareDialogBox />
                        </div>

                        {/* Admin Profile Pic */}
                        <div>
                            <Link to={'/dashboard'}>
                                <div className="">
                                    <Avatar
                                        key={1}
                                        src={'https://cdn-icons-png.flaticon.com/128/3135/3135715.png'}
                                        alt="avatar"
                                        withBorder={true}
                                        className="p-0.5 text-red-500 w-10 h-10 transform transition duration-300 hover:scale-105"
                                        style={{
                                            border: mode === 'dark' ? '2px solid rgb(226, 232, 240)' : '2px solid rgb(30, 41, 59)'
                                        }}
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Dark And Light Button */}
                        <div>
                            {mode === 'light' ?
                                <IconButton onClick={toggleMode} className="lg:inline-block rounded-full p-1 bg-gray-200 hover:bg-gray-300 text-gray-700 transition duration-300 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                </IconButton>
                                :
                                <IconButton onClick={toggleMode} className="lg:inline-block rounded-full p-1 bg-gray-200 hover:bg-gray-300 text-gray-700 transition duration-300 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                    </svg>
                                </IconButton>
                            }
                        </div>

                        {/* Mobile Toggle  */}
                        <div>
                            <IconButton
                                className="ml-auto h-10 w-10 text-inherit rounded-lg lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                                style={{
                                    background: mode === 'light' ? '#ced6e0' : '#57606f', color: mode === 'dark' ? 'white' : 'black'
                                }}
                            >
                                {openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </IconButton>
                        </div>

                    </div>
                </div>

                {/* Mobile View */}
                <Collapse open={openNav}>
                    {navList}
                </Collapse>
            </Navbar>
        </>
    );
}
