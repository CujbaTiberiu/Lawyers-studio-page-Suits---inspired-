import HeroImg from "../assets/hero.jpg";
import Logo from "../assets/logo/suits-logo.svg";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "framer-motion";
import { useRef } from "react";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="parallax">
      <motion.div
        className="text-5xl font-bold text-sky-800 scroller"
        style={{ x }}
        transition={{ duration: 0.4 }}
      >
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

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
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 1,
    },
  },
};
const textsEffect = {
  initial: {
    y: "100vw",
  },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <div className="lg:h-screen">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[41%] 2xl:w-[30%] bg-custom-gradient flex lg:flex-col justify-center items-center text-white">
          <motion.img
            src={Logo}
            alt="logo"
            className="w-[30%] lg:w-[50%]"
            variants={imageEffect}
            initial="initial"
            animate="animate"
            whileHover="hover"
          />
          <div className="text-center text-2xl md:text-3xl xl:text-4xl text-yellow-500 z-10">
            <motion.p
              variants={textEffect}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.3, originX: 0 }}
            >
              PEARSON
            </motion.p>
            <motion.p
              variants={textEffect}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.3, originX: 0 }}
            >
              SPECTER
            </motion.p>
            <motion.p
              variants={textEffect}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.3, originX: 0 }}
            >
              LITT
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ damping: 5, duration: 1 }}
          className="2xl:h-[85vh]"
        >
          <img src={HeroImg} alt="all" className="2xl:h-[85vh]" />
        </motion.div>
      </div>
      <motion.div variants={textsEffect} initial="initial" animate="animate">
        <ParallaxText baseVelocity={-2}>Pearson Specter Litt</ParallaxText>
      </motion.div>
      <motion.div variants={textsEffect} initial="initial" animate="animate">
        <ParallaxText baseVelocity={2}>Lawyer Studios</ParallaxText>
      </motion.div>
    </div>
  );
};

export default Hero;
