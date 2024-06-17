import { motion } from 'framer-motion';

const AnimatedComponent = ({ children, animation }) => (
  <motion.div {...animation}>
    {children}
  </motion.div>
);

export default AnimatedComponent;
