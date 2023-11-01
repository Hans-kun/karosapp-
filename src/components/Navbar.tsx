import { useState } from "react";
import Logo from "./../assets/Clip path group.svg";
import Menu from "./../assets/Menu.svg";
import close from "./../assets/close-circle.svg";
import { Link } from "react-scroll";
import { useAdminStore } from "../stores/home";
// import Contact from "../pages/Contact";
import { fadeIn } from "../utils/variants";
import { motion } from "framer-motion";

const Navbar = () => {
  const { admin } = useAdminStore();
  const [colorChange, setColorChange] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [selectedPage, setSelectedPage] = useState("home");
  // const [open, setOpen] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY >= 100) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);
  // const isAboveMediumScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <nav className=''>
      {/* {isAboveMediumScreen ? ( */}
      <div
        className={`hidden lg:flex lg:justify-between h-[100px] w-full justify-between fixed top-0 px-[104px] py-[25px] z-10 ${
          colorChange ? " bg-black" : ""
        }`}
      >
        <img src={Logo} alt='logo' />

        <ul className={`flex justify-end gap-[50px] text-white items-center`}>
          <Link
            to={"home"}
            smooth={true}
            duration={500}
            onClick={() => {
              setSelectedPage("home");
            }}
            className={`${
              selectedPage == "home" ? "text-blue" : "text-white"
            }  hover:text-blue hover:cursor-pointer`}
          >
            <li>Home</li>
          </Link>
          <Link
            to={"about"}
            smooth={true}
            duration={500}
            className={`${
              selectedPage == "about" ? "text-blue" : "text-white"
            }  hover:text-blue hover:cursor-pointer`}
            onClick={() => {
              setSelectedPage("about");
            }}
          >
            <li>About</li>
          </Link>
          <Link
            to={"contact"}
            smooth={true}
            duration={500}
            className={`${
              selectedPage == "contact" ? "text-blue" : "text-white"
            }  hover:text-blue hover:cursor-pointer`}
            onClick={() => {
              setSelectedPage("contact");
            }}
          >
            <li>Contact</li>
          </Link>
          <a
            href={admin?.blogUrl}
            className=' hover:text-blue hover:cursor-pointer'
          >
            <li>Blog</li>
          </a>
        </ul>
      </div>
      {/* ) : ( */}
      {/* <div className='fixed top-0'> */}
      <div
        className={`lg:hidden flex justify-between fixed top-0 left-0 right-0 align-center px-[30px] md:px-[50px] py-[10px] ${
          colorChange ? " bg-black" : ""
        }`}
      >
        <img src={Logo} alt='logo' />

        <img src={Menu} alt='menu' onClick={() => setToggle(!toggle)} />
      </div>
      {/* </div> */}
      {!toggle && (
        <motion.div
          variants={fadeIn("left", 0, 1)}
          initial='hidden'
          whileInView='show4'
          className='lg:hidden fixed top-0 bottom-0 start-0 end-0 bg-black z-10'
        >
          <div className='lg:hidden flex justify-between align-center px-[30px] md:px-[50px] py-[10px]'>
            <img src={Logo} alt='logo' />

            <img src={close} alt='menu' onClick={() => setToggle(!toggle)} />
          </div>

          <ul className='flex flex-col justify-end gap-[50px] text-white items-end hover:cursor-pointer px-[30px] py-6'>
            <Link
              to={"home"}
              smooth={true}
              duration={500}
              onClick={() => setToggle(!toggle)}
              className={`${
                selectedPage == "contact" ? "text-blue" : "text-white"
              }  hover:text-blue hover:cursor-pointer`}
            >
              <li>Home</li>
            </Link>
            <Link
              to={"about"}
              smooth={true}
              duration={500}
              onClick={() => setToggle(!toggle)}
              className={`${
                selectedPage == "contact" ? "text-blue" : "text-white"
              }  hover:text-blue hover:cursor-pointer`}
            >
              <li>About</li>
            </Link>
            <Link
              to={"contact"}
              smooth={true}
              duration={500}
              onClick={() => setToggle(!toggle)}
              className={`${
                selectedPage == "contact" ? "text-blue" : "text-white"
              }  hover:text-blue hover:cursor-pointer`}
            >
              <li>Contact</li>
            </Link>
            <a
              href={admin?.blogUrl}
              onClick={() => setToggle(!toggle)}
              className=' hover:text-blue hover:cursor-pointer'
            >
              <li>Blog</li>
            </a>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
