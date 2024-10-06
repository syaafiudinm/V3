import { FaCss3, FaHtml5, FaLaravel, FaReact } from "react-icons/fa";
import { SiBootstrap, SiGit, SiMysql, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-10"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(1.0)}
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(1.0)}
        >
          <FaLaravel className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(1.0)}
        >
          <SiMysql className="text-7xl text-stone-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(1.0)}
        >
          <SiTailwindcss className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(1.0)}
        >
          <SiBootstrap className="text-7xl text-purple-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(1.0)}
        >
          <SiGit className="text-7xl text-orange-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
