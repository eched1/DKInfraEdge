import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const AnimatedSection = ({ children, className = '' }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`container mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default AnimatedSection;
