import { useEffect, useState } from "react";
import edu from "./../assets/E D U C A T I O N.svg";
import vector from "./../assets/Vector 3.svg";
import { useEducationStore } from "../stores/education";
import { motion } from "framer-motion";
import { fadeIn, fadeIn2 } from "../utils/variants";

const Education = () => {
  const { getEduList, eduList, getCcList, ccList } = useEducationStore();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded === true) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Promise.all([getEduList(), getCcList()]).then((_) => setLoaded(true));
  }, [getCcList, getEduList, loaded]);

  return (
    <div className='min-h-screen flex text-white'>
      <motion.img
        variants={fadeIn2(1, 0)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        src={edu}
        alt=''
        className='hidden lg:inline-block p-[50px] my-[233px] mr-[50px]'
      />
      <div className='w-full py-[100px] px-[30px] md:pl-[100px] xl:py-0 lg:px-0'>
        {/* title */}
        <motion.div
          variants={fadeIn("left", 0.5, 1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='h-11 text-white font-semibold text-smalls md:text-mids xl:text-header mt-[100px] mb-[54px]'
        >
          My Education & Work Experience
          <span className='underline'>
            <img src={vector} alt='' />
          </span>
        </motion.div>
        {/* education details */}
        <motion.div
          variants={fadeIn("left", 1.5, 1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='flex flex-col xl:flex-row gap-[50px]'
        >
          {eduList.map((edu, index) => (
            <div
              className='w-[300px] md:w-[500px] border-2 border-blue rounded-[10px] p-5 h-auto'
              key={index}
            >
              <div className='flex flex-col gap-y-5'>
                <span className='w-[110px] bg-blue px-[10px] py-[5px] rounded-[5px] text-[10px] font-semibold text-center'>
                  {edu?.startYear === edu?.endYear
                    ? edu?.endYear
                    : `${edu?.startYear} - ${edu?.endYear}`}
                </span>
                <h1 className='font-medium text-xl'>{edu?.course}</h1>
                <span className='text-blue text-base font-medium'>
                  <a href={edu?.schoolLink}>{edu?.school}</a>
                </span>
                <p>{edu?.description}.</p>
              </div>
            </div>
          ))}
        </motion.div>
        <div className='mt-[100px]'>
          {/* courses nd cert title */}
          <motion.div
            variants={fadeIn("left", 2, 1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='h-11 text-white font-semibold text-smalls md:text-mids xl:text-header text- mb-[54px]'
          >
            My Courses And Certifications
            <span className='underline'>
              <img src={vector} alt='' />
            </span>
          </motion.div>
          {/* courses nd cert details */}
          <motion.div
            variants={fadeIn("left", 2.5, 1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col xl:flex-row gap-[50px] mt-3 md:mt-0'
          >
            {ccList.map((cc, index) => (
              <div
                className='w-[300px] md:w-[500px] border-2 border-blue rounded-[10px] p-5'
                key={index}
              >
                <div className='flex flex-col gap-y-5'>
                  <span className='w-[110px] bg-blue px-[10px] py-[5px] rounded-[5px] text-[10px] font-semibold text-center'>
                    {cc?.startYear === cc?.endYear
                      ? cc?.endYear
                      : `${cc?.startYear} - ${cc?.endYear}`}
                  </span>
                  <h1 className='font-medium text-xl'>{cc!.course}</h1>
                  <span className='text-blue text-base font-medium'>
                    <a href={cc?.schoolLink}>{cc?.school}</a>
                  </span>
                  <p>{cc?.description}.</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
