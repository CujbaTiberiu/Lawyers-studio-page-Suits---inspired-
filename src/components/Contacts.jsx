import { motion } from "framer-motion";
import Map from "./Map";
import RossSpecter from "../assets/png's/hravey-mike-contact.png";
import { FaInstagram, FaTwitterSquare, FaLinkedinIn } from "react-icons/fa";
import { BsMeta } from "react-icons/bs";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: (seconds) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: seconds,
    },
  }),
};

const fadeInAnimationUp = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (seconds) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: seconds,
    },
  }),
};

const Contacts = () => {
  return (
    <div
      name="form"
      className="sm:h-screen flex sm:justify-between flex-col sm:flex-row"
    >
      <div className="sm:w-[50%] flex flex-col justify-around items-center bg-custom-gradient">
        <div className="w-[100%] h-screen flex flex-col justify-around items-center sm:p-10 2xl:p-24">
          <motion.div
            variants={fadeInAnimationUp}
            initial="initial"
            whileInView="animate"
            custom={0.4}
            className="w-[80%] text-start"
          >
            <h2 className="pt-4 text-white font-bold text-3xl border-b-4 border-yellow-500 w-44 hover:text-4xl hover:w-48 duration-500">
              Our Offices
            </h2>
            <p className="text-xl py-4 text-white">Come find us</p>
          </motion.div>
          <motion.div
            variants={fadeInAnimationUp}
            initial="initial"
            whileInView="animate"
            custom={0.5}
            className="w-[80%] py-4"
          >
            <Map />
          </motion.div>
          <div className="py-4 text-3xl flex justify-center">
            <motion.a
              variants={fadeInAnimationUp}
              initial="initial"
              whileInView="animate"
              custom={0.6}
              href="https://www.instagram.com/"
            >
              <FaInstagram className="text-white mx-4" />
            </motion.a>
            <motion.a
              variants={fadeInAnimationUp}
              initial="initial"
              whileInView="animate"
              custom={0.7}
              href="https://twitter.com/"
            >
              <FaTwitterSquare className="text-white mx-4" />
            </motion.a>
            <motion.a
              variants={fadeInAnimationUp}
              initial="initial"
              whileInView="animate"
              custom={0.8}
              href="https://www.linkedin.com/"
            >
              <FaLinkedinIn className="text-white mx-4" />
            </motion.a>
            <motion.a
              variants={fadeInAnimationUp}
              initial="initial"
              whileInView="animate"
              custom={0.9}
              href="https://www.metacritic.com/"
            >
              <BsMeta className="text-white mx-4" />
            </motion.a>
          </div>
        </div>
      </div>
      <div className="sm:w-[50%] relative">
        <motion.img
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          custom={0.4}
          src={RossSpecter}
          alt="ross-specter img"
          className="w-56 absolute top-0 right-0 -z-10"
        />
        <div className="w-full h-screen flex justify-center items-center p-4 ">
          <form
            method="POST"
            action="https://getform.io/f/c37b66e7-3ea0-4d89-b54c-d206b9ed8b5c"
            className="flex flex-col max-w-[600px] w-full"
          >
            <motion.div
              variants={fadeInAnimationUp}
              initial="initial"
              whileInView="animate"
              custom={0.4}
              className="pb-8"
            >
              <p className="my-4 text-gray-500 font-bold text-3xl border-b-4  border-sky-800 w-32 hover:text-4xl hover:w-36 duration-500">
                Contact
              </p>
              <p className="text-xl text-gray-400">
                Let us know how can we help you
              </p>
            </motion.div>
            <motion.input
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              custom={0.3}
              className="bg-sky-800 p-2 rounded-lg text-gray-400"
              type="text"
              placeholder="Name"
              name="name"
            />
            <motion.input
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              custom={0.4}
              className="my-4 p-2 bg-sky-800 rounded-lg text-gray-400"
              type="email"
              placeholder="Email"
              name="email"
            />
            <motion.textarea
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              custom={0.5}
              className="bg-sky-800 p-2 rounded-lg text-gray-400"
              name="message"
              rows="10"
              placeholder="Message"
            ></motion.textarea>
            <motion.button
              variants={fadeInAnimationUp}
              initial="initial"
              whileInView="animate"
              custom={0.6}
              className="text-white font-bold bg-gray-500 animate-pulse border-2 border-sky-800 shadow-lg shadow-sky-800 px-4 py-3 my-8 mx-auto flex items-center rounded-lg"
            >
              Write us
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};
// <div name="form" className="pt-12 lg:pt-0 xl:h-screen">
//my-18 xs:px-4 sm:py-8 md:py-6 lg:py-28
// </div>
//AIzaSyBpdCRV2YsejqJT_BwFW2KqW3k3v4-j2zw

export default Contacts;
