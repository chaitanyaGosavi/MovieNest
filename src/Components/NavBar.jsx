import React from "react";

const NavBar = ({ItemsFound, query, setQuery}) => {
    return (
        <div className="w-screen h-[10vh] bg-none p-4">
            <div className="w-[90%] h-full bg-violet-500 mx-auto rounded-xl flex gap-x-10">
                <div className="w-1/5 flex justify-evenly items-center">
                    <img className="w-8 h-8 md:w-12 md:h-12" src="Logo.png" alt="Trulli" />
                    <span className=" text-[12px] md:text-2xl lg:text-[28px] text-[#f6f5ed] SiteTitle">Movie Nest</span>
                </div>
                <div className="w-4/5 flex justify-evenly items-center text-[#fffff6] text-[12px] md:text-xl">
                    <input className="w-[40%] h-[80%] bg-[#3c3c3c86] text-center rounded-lg" type="text" value={query} placeholder="Search a Movie..." 
                    onChange={(e)=>{
                        setQuery(e.target.value)
                    }}
                    />
                    <span className="font-semibold text-[12px] md:text-lg lg:text-xl"> Found {ItemsFound} movies</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
