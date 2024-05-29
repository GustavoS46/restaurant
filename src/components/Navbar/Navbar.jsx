import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";

const Navlinks = [
  {
    id: 1,
    name: "SERVICES",
    link: "/#services",
  },
  {
    id: 2,
    name: "DIFFERENTIAL",
    link: "/#differential",
  },
  {
    id: 3,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 4,
    name: "CONTACT",
    link: "/#footer ",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Vegetables",
    link: "/#",
  },
  {
    id: 2,
    name: "Fruits",
    link: "/#",
  },
  {
    id: 3,
    name: "Grains",
    link: "/#",
  },
];

const Navbar = ({ HandlePopup }) => {
  return (
    <>
      <div data-aos="fade" className="bg-white shadow-md">
        <div className="container flex justify-between py-4 sm:py-3">
          <div className="font-semibold text-3xl">Logo</div>
          <div>
            <ul className="sm:flex items-center gap-5 font-inter">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="hidden sm:inline-block hover:text-primary text-md font-inter"
                  >
                    {name}
                  </a>
                </li>
              ))}

              <li className="hidden sm:block cursor-pointer group">
                <a
                  href="/#"
                  className="inline-block hover:text-primary text-md font-inter"
                >
                  <div className="flex items-center gap-[2px] py-2">
                    Dropdow
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </div>
                </a>

                <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2 rounded-md">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          href="/#"
                          className="inline-block w-full rounded-md p-2 text-md hover:bg-primary/20"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <button
                  onClick={HandlePopup}
                  className="flex justify-center items-center gap-2 bg-secondary text-md rounded-full h-[40px] text-white md:px-5 py-2 hover:sacale-105 duration-300"
                >
                  <FaUser />
                  My Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
