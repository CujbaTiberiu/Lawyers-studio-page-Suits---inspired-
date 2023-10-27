import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);

  const isInView = useInView(ref);
  console.log(isInView);

  const slideInAnimation = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: (seconds) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: seconds,
      },
    }),
    hover: {
      transition: {
        duration: 1,
        skew: 0.5,
      },
    },
  };

  return (
    <div className="h-screen flex">
      <div className="w-[100%] about ">
        <div
          ref={ref}
          className="w-full h-full rounded-lg  flex flex-col justify-around"
        >
          <motion.div
            variants={slideInAnimation}
            initial="initial"
            whileInView="animate"
            custom={0.2}
            whileFocus="hover"
            className="p-8 md:p-4 cursor-pointer"
            ref={ref}
          >
            <p className="backdrop-blur-lg w-44 md:w-96 text-gray-600 md:text-2xl text-center border-e-8 border-sky-600 border-b-8 shadow-2xl">
              No legal problem is too big or too small for our team of legal
              experts. We are here for you at every stage of your legal journey.
            </p>
          </motion.div>
          <motion.div
            variants={slideInAnimation}
            initial="initial"
            whileInView="animate"
            custom={0.4}
            ref={ref}
            className="flex justify-center items-center cursor-pointer"
          >
            <p className="backdrop-blur-lg w-44 md:w-96 text-gray-600 md:text-3xl text-center border-e-8 border-sky-600 border-b-8 shadow-2xl">
              Success begins with a strong defense. Our law firm provides the
              defense you need.
            </p>
          </motion.div>
          <motion.div
            variants={slideInAnimation}
            initial="initial"
            whileInView="animate"
            custom={0.6}
            ref={ref}
            className="flex justify-end pe-6 md:pe-0 md:p-4 cursor-pointer"
          >
            <p className="backdrop-blur-lg w-44 md:w-96 text-gray-600 md:text-3xl text-center border-e-8 border-sky-600 border-b-8 shadow-2xl">
              Justice is a fundamental right. Our law firm is here to defend
              your rights with determination and passion.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
