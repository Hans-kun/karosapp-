// import Navbar from "../components/Navbar";
import { TypeAnimation } from "react-type-animation";
// import { TfiAngleDoubleDown } from "react-icons/tfi";
import arrow from "../assets/Vector.svg";
import { useAdminStore } from "../stores/home";
// import { once } from "../utils";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { bounceArrow } from "../utils/variants";
// import { once } from "lodash";
// import { debounce } from "lodash";

// type Props = {
//   children: JSX.Element | JSX.Element[];
// };
const Home: React.FC = () => {
  const { getAdmin, admin } = useAdminStore();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded === true) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getAdmin().then((_) => setLoaded(true));
  }, [admin, getAdmin, loaded]);

  return (
    <div className='bg-bg-img bg-no-repeat bg-cover conatiner w-full' id='home'>
      <div className='flex flex-col h-screen justify-center items-center'>
        {admin !== undefined ? (
          <div className='text-white md:top-[331px] flex flex-col gap-[30px] items-center'>
            <div className='w-[209px] md:w-[700px] flex flex-col gap-5 items-center text-center'>
              <span className='font-semibold text-2xl md:text-3xl '>
                Hello!
              </span>
              <TypeAnimation
                sequence={[
                  `I'm ${admin?.name}`,
                  2000,
                  `I'm a ${admin?.profession}`,
                  2000,
                ]}
                wrapper='span'
                className='font-semibold text-2xl md:text-3xl'
                speed={30}
                repeat={Infinity}
              />
              <span className='mb-[50px]'>You can call me Cyber Wraith</span>
            </div>
            <div className='flex flex-col md:flex-row gap-[20px] md:gap-[50px] text-smm'>
              <button className='button bg-blue hover:bg-indigo-500'>
                <a
                  href={admin?.resume}
                  download='Resume-PDF-document'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Download My Resume
                </a>
              </button>
              <button
                className='button border-2 border-blue text-blue hover:bg-blue hover:text-white'
                disabled={admin?.blogUrl === undefined ? true : false}
              >
                <a href={admin?.blogUrl}> Explore My Blog</a>
              </button>
            </div>
          </div>
        ) : (
          <div className='text-white flex flex-col gap-[30px] items-center'>
            <span className='font-semibold text-3xl'>Hello!</span>
            <TypeAnimation
              sequence={[
                "I'm OgeneKaro Akusu",
                2000,
                "I'm a CyberSecurity Analyst",
                2000,
              ]}
              wrapper='span'
              className='font-semibold text-3xl'
              speed={50}
              repeat={Infinity}
            />
            <span className='mb-[50px]'>You can call me Cyber Wraith</span>
            <div className='flex gap-[50px] text-smm'>
              <button className='button'>Explore My Blog</button>
            </div>
          </div>
        )}
        <Link to={"about"} smooth={true} duration={500}>
          <motion.div
            variants={bounceArrow()}
            initial='hidden'
            animate='show'
            // initial={{ y: -30, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            // transition={{
            //   type: "spring",
            //   stiffness: 100,
            //   repeat: Infinity,
            //   delay: 1,
            //   duration: 3.5,
            //   ease: [0.25, 0.25, 0.25, 0.75],
            // }}
            // viewport={{ once: false }}
            className='absolute bottom-5 anima te-bounce flex-col flex-end'
          >
            <img src={arrow} alt='arrow' className='text-white w-6' />
            <img src={arrow} alt='arrow' className='text-white w-6' />
            <img src={arrow} alt='arrow' className='text-white w-6' />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
