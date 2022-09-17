import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isVisible?: any;
  children: JSX.Element | JSX.Element[];
  className?: string;
  transition?: any;
  enterDuration?: number;
  exitDuration?: number;
}

const ModalAnimation = ({
  isVisible,
  children,
  className,
  transition,
  enterDuration,
  exitDuration,
}: Props) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="modal"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: enterDuration },
          }}
          exit={{ opacity: 0, y: 20, transition: { duration: exitDuration } }}
          transition={transition}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalAnimation;
