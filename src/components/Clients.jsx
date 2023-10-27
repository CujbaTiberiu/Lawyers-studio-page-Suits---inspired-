import Amazon from "../assets/clients-logo/icons8-amazon-480.svg";
import Amd from "../assets/clients-logo/icons8-amd.svg";
import AmericanEx from "../assets/clients-logo/icons8-american-express.svg";
import Coke from "../assets/clients-logo/icons8-coca-cola.svg";
import Disney from "../assets/clients-logo/icons8-disney-logo.svg";
import Google from "../assets/clients-logo/icons8-google.svg";
import Gucci from "../assets/clients-logo/icons8-gucci.svg";
import Hp from "../assets/clients-logo/icons8-hp.svg";
import Ibm from "../assets/clients-logo/icons8-ibm.svg";
import Microsoft from "../assets/clients-logo/icons8-microsoft.svg";
import Nasa from "../assets/clients-logo/icons8-nasa.svg";
import Umbrella from "../assets/clients-logo/icons8-umbrella-corporation.svg";
import { motion } from "framer-motion";

const imageEffect = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const textEffect = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 1,
    },
  },
};

const Clients = () => {
  return (
    <div className="about">
      <div className="h-screen flex justify-center items-center backdrop-sepia backdrop-blur-xl">
        <div className="w-[90%] h-[90%] shadow-2xl border-t-8 border-b-8 border-cyan-600 ">
          <motion.div
            variants={textEffect}
            initial="initial"
            whileInView="animate"
            className="text-center text-4xl md:text-7xl text-cyan-800 cursor-pointer"
          >
            Our Clients
          </motion.div>
          <div className="flex justify-around items-center py-20 sm:12 md:10 lg:py-12 xl:py-10 2xl:py-24">
            <motion.img
              variants={imageEffect}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              src={Amazon}
              alt="Amazon"
              className="w-10 md:w-16"
            />
            <motion.img
              variants={imageEffect}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              src={Google}
              alt="Amazon"
              className="w-10 md:w-16"
            />
            <motion.img
              variants={imageEffect}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              src={Microsoft}
              alt="Amazon"
              className="w-10 md:w-16"
            />
            <motion.img
              variants={imageEffect}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              src={Gucci}
              alt="Amazon"
              className="w-10 md:w-16"
            />
          </div>
          <div className="flex justify-around items-center py-20 sm:12 md:10 lg:py-12 xl:py-12 2xl:py-5">
            <motion.img
              variants={imageEffect}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              src={Amd}
              alt="Amazon"
              className="w-10 md:w-16"
            />
            <motion.img
              variants={imageEffect}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              src={Ibm}
              alt="Amazon"
              className="w-10 md:w-16"
            />
            <motion.img
              variants={imageEffect}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              src={Hp}
              alt="Amazon"
              className="w-10 md:w-16"
            />
            <motion.img
              variants={imageEffect}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              src={Disney}
              alt="Amazon"
              className="w-10 md:w-16"
            />
          </div>
          <div className="flex justify-around items-center py-20 sm:12 md:10 lg:py-12 xl:py-10 xl:py-20 2xl:py-24">
            <motion.img
              variants={imageEffect}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              src={Coke}
              alt="Amazon"
              className="w-10 md:w-16"
            />
            <motion.img
              variants={imageEffect}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              src={Nasa}
              alt="Amazon"
              className="w-10 md:w-16"
            />
            <motion.img
              variants={imageEffect}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              src={AmericanEx}
              alt="Amazon"
              className="w-10 md:w-16"
            />
            <motion.img
              variants={imageEffect}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              src={Umbrella}
              alt="Amazon"
              className="w-10 md:w-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
