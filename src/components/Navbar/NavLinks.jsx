import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          <div className=" text-left md:cursor-pointer group mt-1 ml-5" >
            <h1
              className=" flex  justify-between items-center md:pr-0 pr-5 group hover:text-red-400  text-xl"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              {/* {
                heading == link.name ? <FaAngleUp /> : <FaAngleDown />
              } */}
              <span className="text-xl md:hidden inline">
                {
                  heading == link.name ? <FaAngleUp /> : <FaAngleDown />
                }
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2 ">
                <FaAngleDown />
              </span>
            </h1>
            {link.submenu && (
              <div >
                <div className="absolute top-15 hidden group-hover:md:block hover:md:block z-10">
                  <div className="py-0">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1  rotate-45"
                    ></div>
                  </div>
                  <div className="bg-[#161D24] p-4 flex rounded-xl -mr-20 ">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        {/* <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1> */}
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-md text-white my-2">
                            <Link
                              to={slink.link}
                              className="hover:text-red-400"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }

                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center "
                  >
                    {slinks.Head}
                    

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                    {
                      subHeading == slinks.Head ? <FaAngleUp /> : <FaAngleDown />
                    }
                    </span>
                  </h1>
                  <div
                    className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};


export default NavLinks;
