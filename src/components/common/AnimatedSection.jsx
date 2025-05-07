import { motion } from "framer-motion";

const AnimatedSection = ({ children, className = "" }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`container mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

export default AnimatedSection;
