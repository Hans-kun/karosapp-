import { useEffect, useState } from "react";
import aboutme from "./../assets/A B O U T M E.svg";
// import img from "./../assets/99662a32bdbbf6e2c395981eab774fe6.jpeg";
import CountUp from "react-countup";
import divider from "./../assets/Vector 4.svg";
import { useAdminStore } from "../stores/home";
import vector from "./../assets/Vector 3.svg";
import { fadeIn, fadeIn2, fadeInImage } from "../utils/variants";
import { motion } from "framer-motion";

function About() {
  const { getAdmin, admin } = useAdminStore();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded === true) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getAdmin().then((_) => setLoaded(true));
  }, [admin, getAdmin, loaded]);

  return (
    <div className='flex w-full min-h-screen' id='about'>
      <motion.img
        src={aboutme}
        variants={fadeIn2(1, 0)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        alt=''
        className='hidden lg:inline-block sidewords'
      />
      <div className='flex flex-col gap-[100px] py-[100px] px-[30px] md:pl-[100px] md:pr-11 lg:py-0 lg:px-0'>
        <motion.div
          variants={fadeIn("left", 0.5, 1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='title'
        >
          Get To Know Me
          <span className='underline'>
            <img src={vector} alt='' />
          </span>
        </motion.div>
        {/* {admin !== undefined ? ( */}
        <div className='flex flex-col gap-[100px] items-center md:items-start'>
          <motion.img
            variants={fadeInImage()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.7 }}
            src={admin?.image}
            alt=''
            className='w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full border-2 border-blue'
          />
          <motion.div
            variants={fadeIn("left", 2, 1)}
            initial='hidden'
            whileInView='show2'
            viewport={{ once: true }}
            className='w-full gap-y-5 flex flex-col break-words md:w-[600px] xl:w-[1000px] text-center md:text-left'
          >
            <h2 className='text-white font-semibold text-mid h -[72px]'>
              I'm <span className='text-blue'>{admin?.name}</span>, a{" "}
              {admin?.profession}
            </h2>
            <p className='text-ash break-words'>{admin?.about}</p>
          </motion.div>
          <div>
            <div className='w-full text-white flex flex-col gap-y-[50px] md:flex-row md:gap-x-[80px] xl:gap-x-[250px] '>
              {/* experience */}
              <motion.div
                variants={fadeIn("right", 2.3, 1)}
                initial='hidden'
                whileInView='show2'
                viewport={{ once: true }}
                className=' flex-col justify-center items-center gap-5 inline-flex'
              >
                <div className='text-[50px] font-medium'>
                  <CountUp
                    start={0}
                    end={admin?.yearsOfExperience as number}
                    delay={2.8}
                    duration={5}
                  />
                  +
                </div>
                <div className='text-[10px] md:text-xl text-normal'>
                  Work Experience
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn2(1, 2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className=' rotate-90 self-center md:rotate-0'
              >
                <img src={divider} alt='' />
              </motion.div>
              {/* courses and cert */}
              <motion.div
                variants={fadeIn("left", 2.5, 1)}
                initial='hidden'
                whileInView='show2'
                viewport={{ once: true }}
                className='flex-col justify-center items-center gap-5 inline-flex'
              >
                <div className='text-[50px] font-medium'>
                  <CountUp
                    start={0}
                    end={admin?.totalCoursesAndCertificates as number}
                    duration={5}
                    delay={2.8}
                  />
                  +
                </div>
                <div className='text-[10px] md:text-xl text-normal'>
                  Courses And Certificates
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/*  ) : ( 
          // <div className='flex flex-col gap-[100px]'>
          //   <img
          //     src={img}
          //     alt=''
          //     className='w-[400px] h-[400px] rounded-full border-2 border-blue'
          //   />
          //   <div>
          //     <h2 className='text-white mb-5 w-[798px] font-semibold text-mid h-[72px]'>
          //       I'm <span className='text-blue'>Oghenekaro Omogbiya Akusu</span>
          //       , a Cybersecurity Analyst
          //     </h2>
          //     <p className='text-ash w-[1000px]'>
          //       A proactive Cybersecurity Analyst with expertise in network
          //       fortification, firewalls, Linux, and security information
          //       management, including Splunk. My skills encompass penetration
          //       testing, incident response, and cloud security in AWS, Microsoft
          //       Azure, and Google Cloud. I excel in threat intelligence,
          //       compliance audits, intrusion detection, and implementing
          //       encryption techniques. <br />I possess a proven track record in
          //       analyzing network traffic to identify vulnerabilities and
          //       devising strategic risk mitigation plans. My commitment to
          //       cybersecurity is resolute, aimed at shaping a future marked by
          //       digital security and resilience.
          //     </p>
          //   </div>
          //   <div>
          //     <div className='text-white flex gap-x-[250px] '>
          //       {/* experience 
          //       <div className='w-[242px] h-[105px] flex-col justify-center items-center gap-5 inline-flex'>
          //         <div className='w-12 h-[61px] flex-col justify-center items-center flex'>
          //           <div className='text-[50px] font-medium'>
          //             <CountUp start={0} end={5} duration={5} />+
          //           </div>
          //         </div>
          //         <div className='text-xl text-normal'>Work Experience</div>
          //       </div>
          //       <div className='self-center'>
          //         <img src={divider} alt='' />
          //       </div>
          //       {/* courses and cert 
          //       <div className='w-[252px] h-[105px] flex-col justify-center items-center gap-5 inline-flex'>
          //         <div className='text-[50px] font-medium'>
          //           <CountUp start={0} end={5} duration={5} />+
          //         </div>
          //         <div className='text-xl text-normal'>
          //           Courses And Certificates
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </div>
         )}
         */}
      </div>
    </div>
  );
}

export default About;
