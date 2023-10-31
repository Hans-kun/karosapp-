import { useEffect, useState } from "react";
import contactus from "./../assets/C O N T A C T.svg";
import linkedin from "./../assets/linkedin.svg";
import github from "./../assets/mdi_github.svg";
import youtube from "./../assets/youtube-fill.svg";
import { useAdminStore } from "../stores/home";
import vector from "./../assets/Vector 3.svg";
import { motion } from "framer-motion";
import { fadeIn, fadeIn2 } from "../utils/variants";

type ContactProps = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { getAdmin, admin } = useAdminStore();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded === true) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getAdmin().then((_) => setLoaded(true));
  }, [admin, getAdmin, loaded]);

  const [contactMess, setContactMess] = useState<ContactProps>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setContactMess({
      ...contactMess,
      [field]: value,
    });
  };

  return (
    <div className='w-full min-h-screen text-white flex'>
      <motion.img
        variants={fadeIn2(1, 0)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        src={contactus}
        alt=''
        className='hidden lg:inline-block p-[50px] mr-[50px]'
      />
      <div className='xl:flex py-[100px] px-[30px] md:px-[100px] lg:py-0 lg:px-0'>
        <div className='lg:mt-[200px] xl:mt-[355px]'>
          <motion.div
            variants={fadeIn("left", 0.5, 1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            id='contact'
            className='h-11 text-white font-semibold text-smalls md:text-mids xl:text-header mb-[50px] lg:mb-[24px]'
          >
            Get In Touch
            <span className='underline'>
              <img src={vector} alt='' />
            </span>
          </motion.div>
          <motion.p
            variants={fadeIn("up", 0.8, 1)}
            initial='hidden'
            whileInView='show3'
            viewport={{ once: true }}
            className='text-xl font-medium'
          >
            If you want to chat about a project — Send an message
          </motion.p>
          <motion.form
            variants={fadeIn("left", 1.3, 1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            onSubmit={() => {}}
            // action=''
            // method='post'
            className='flex flex-col gap-y-5 rounded-[5px] mt-[50px] text-black'
          >
            <div className='flex flex-col gap-5 md:flex-row md:justify-between'>
              <input
                type='text'
                id='firstname'
                onChange={(e) => handleChange("name", e.target.value)}
                defaultValue={contactMess.name}
                required
                placeholder='Name'
                className='w-[250px] rounded-[5px] px-5 py-[12.5px]'
              />
              <input
                type='email'
                id='email'
                onChange={(e) => handleChange("email", e.target.value)}
                defaultValue={contactMess.email}
                required
                placeholder='Email'
                className='w-[250px] rounded-[5px] px-5 py-[12.5px]'
              />
            </div>
            <textarea
              id='message'
              onChange={(e) => handleChange("message", e.target.value)}
              defaultValue={contactMess.message}
              required
              placeholder='Your Message'
              className='w-[250px] md:w-[550px] h-[150px] rounded-[5px] px-5 py-[7.5px] self-start break-words'
            />
            <a
              className='w-[200px] px-[73.5px] py-[11.5px] rounded-[5px] bg-blue text-sm font-medium hover:bg-indigo-600'
              href={`mailto:ebukaodini@gmail.com?subject=A message from your website!&body=${
                "Name: " +
                contactMess.name +
                "%0D%0AEmail: " +
                contactMess.email +
                "%0D%0A%0D%0A" +
                contactMess.message +
                "%0D%0A%0D%0A"
              }`}
            >
              Submit
            </a>
            {/* <button
              type='submit'
              className='w-[200px] px-[73.5px] py-[11.5px] rounded-[5px] bg-blue text-sm font-medium hover:bg-indigo-600'
            >
              Submit
            </button> */}
          </motion.form>
        </div>
        <motion.div
          variants={fadeIn("left", 1.3, 1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='mt-[100px] xl:mt-[497px] xl:ml-[100px] flex flex-col gap-[50px]'
        >
          <div className='flex flex-col'>
            <h2 className='text-xl font-medium mb-5'>CONTACT DETAILS</h2>
            <p className='text-sm font-normal mb-[10px]'>{admin?.phoneNo}</p>
            <p className='text-sm font-normal'>{admin?.email}</p>
          </div>
          <div className='flex flex-col gap-5'>
            <h2>FOLLOW ME</h2>
            <div className='flex gap-x-[50px]'>
              <a href={admin?.linkedInUrl}>
                <img src={linkedin} alt='' />
              </a>
              <a href={admin?.gitUrl}>
                <img src={github} alt='' />
              </a>
              <a href={admin?.youtubeUrl}>
                <img src={youtube} alt='' />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
