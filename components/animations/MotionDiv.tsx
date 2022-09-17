import { motion } from "framer-motion";

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
  initial?: string;
  animate?: string;
  exit?: string;
  transition?: any;
}
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function MotionDiv({
  children,
  className,
  initial,
  animate,
  transition,
  exit,
}: Props) {
  return (
    <motion.div
      variants={variants} // Pass the variant object into Framer Motion
      initial={initial} // Set the initial state to variants.hidden
      animate={animate} // Animated state to variants.enter
      exit={exit} // Exit state (used later) to variants.exit
      transition={transition} // Set the transition to linear
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;
