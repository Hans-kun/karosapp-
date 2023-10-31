import { useEffect, useState } from "react";
import skillsimg from "./../assets/S K I L L S.svg";
import { useSkillsStore } from "../stores/skills";
import vector from "./../assets/Vector 3.svg";
import { fadeIn, fadeIn2 } from "../utils/variants";
import { motion } from "framer-motion";

const Skills = () => {
  const { getSkills, skills } = useSkillsStore();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded === true) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getSkills().then((_) => setLoaded(true));
  }, [getSkills, loaded]);

  return (
    <div className='text-white min-h-screen w-full flex justify-start'>
      <div className='lg:w-1/6'>
        <motion.img
          variants={fadeIn2(1, 0)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          src={skillsimg}
          alt=''
          className='hidden lg:inline-block h-auto p-[50px] mr-[50px]'
        />
      </div>

      <div className='w-full lg:w-5/6 py-[100px] px-[30px] md:px-[100px] lg:py-0 lg:px-0'>
        <motion.div
          variants={fadeIn("left", 0.5, 1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='h-auto text-white font-semibold text-smalls md:text-mids xl:text-header lg:mt-[100px] xl:mt-[256px] mb-[50px]'
        >
          My Skills
          <span className='underline'>
            <img src={vector} alt='' />
          </span>
        </motion.div>
        <div className='text-xl font-medium'>
          <motion.ul
            variants={fadeIn2(1, 1.5)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='w-full flex flex-col lg:flex-row px-5 lg:flex-wrap list-disc marker:text-blue gap-x-10 gap-y-[50px]'
          >
            {skills.map((sk, index) => (
              <li className='lg:w-2/5 skill-hover' key={index}>
                {sk!.skill}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
