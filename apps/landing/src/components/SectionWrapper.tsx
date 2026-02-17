import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function SectionWrapper({
  children,
  className = '',
  id = '',
  delay = 0,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
