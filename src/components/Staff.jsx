import RossImg from "../assets/ross.jpg";
import SpecterImg from "../assets/harvey-specter.png";
import SamanthaWheeleImg from "../assets/sam.png";
import LouisLittImg from "../assets/louis.png";
import DonnaPaulsenImg from "../assets/dona.png";
import AlexWilliamsImg from "../assets/Alex.png";
import KatrineBennettImg from "../assets/kat.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import move from "lodash-move";

const staffData = [
  {
    id: 0,
    name: "Mike Ross",
    role: "Senior Associate",
    quote: "Lost causes are the only ones worth fighting for.",
    image: RossImg,
  },
  {
    id: 1,
    name: "Harvey Specter",
    role: "Senior Manager",
    quote: "Anyone can do my job, but no one can be me.",
    image: SpecterImg,
  },
  {
    id: 2,
    name: "Samantha Wheeler",
    role: "Senior Associate",
    quote:
      "It’s every lawyer’s dream to help shape the law, not just react to it.",
    image: SamanthaWheeleImg,
  },
  {
    id: 3,
    name: "Alex Williams",
    role: "Senior Associate",
    quote: "Lawyers are the foot soldiers of our Constitution",
    image: AlexWilliamsImg,
  },
  {
    id: 4,
    name: "Louis Litt",
    role: "Senior Associate",
    quote: "Hard work beats talent when talent doesn’t work hard.",
    image: LouisLittImg,
  },
  {
    id: 5,
    name: "Donna Paulsen",
    role: "Senior Associate",
    quote:
      "If I see a problem, I like to think if there’s a better way to do it",
    image: DonnaPaulsenImg,
  },
  {
    id: 6,
    name: "Katrina Bennett",
    role: "Senior Associate",
    quote: "The way of success is the way of continuous pursuit of knowledge.",
    image: KatrineBennettImg,
  },
];

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

const Staff = () => {
  let interval;
  const [cards, setCards] = useState(staffData);

  useEffect(() => {
    // sets the interval
    startFlipping();
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      // flips through cards by moving the last card to the top in an interval of 5 seconds
      setCards((prevCards) => move(prevCards, prevCards.length - 1, 0));
    }, 5000);

    return () => clearInterval(interval);
  };

  return (
    <div className="h-screen flex bg-black justify-center">
      <div className="w-56 sm:w-full flex justify-center items-center relative mt-36 md:mt-32 xl:mt-40 2xl:mt-56">
        {cards.map((card, index) => {
          return (
            <motion.div
              key={card.id}
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                zIndex: staffData.length - index, //  decrease z-index for the cards that are behind
              }}
              className="flex flex-col sm:flex-row absolute backdrop-blur-lg rounded-lg shadow-xl shadow-cyan-600"
            >
              <div className="sm:w-96 h-auto rounded-lg">
                <img
                  src={card.image}
                  alt="staff img"
                  className="rounded-lg h-[100%]"
                />
              </div>
              <div className="flex justify-center items-center p-8 text-white">
                <div className="flex flex-col justify-around items-center">
                  <div className="flex flex-col justify-start text-center p-2 md:p-8">
                    <h1 className="md:text-4xl">{card.name}</h1>
                    <p className="text-xs md:text-base">{card.role}</p>
                  </div>
                  <p className="text-sm md:text-base">
                    &ldquo; {card.quote} &rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Staff;
