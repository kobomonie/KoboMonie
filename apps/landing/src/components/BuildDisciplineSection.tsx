import SectionWrapper from './SectionWrapper';
import { motion } from 'motion/react';

interface FeatureProps {
  title: string;
  description: string;
  index: number;
}

const Feature = ({ title, description, index }: FeatureProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className='flex gap-4 items-start text-center lg:text-right'
  >
    <div>
      <h3 className="font-['ClashDisplay',sans-serif] font-bold text-[#1f2937] text-base lg:text-lg leading-normal mb-1">
        {title}
      </h3>
      <p className="font-['Avenir',sans-serif] text-[#4b5563] text-sm lg:text-base leading-6">
        {description}
      </p>
    </div>
  </motion.div>
);

const FEATURES = [
  {
    title: 'Consistency Without Stress',
    description:
      'Automatic contributions help you save regularly without having to remember or force yourself',
  },
  {
    title: 'Accountability That Works',
    description:
      'Saving with others keeps you committed, not through pressure, but shared responsibility',
  },
  {
    title: 'Purpose-Driven Saving',
    description:
      'Save toward clear goals with timelines, so your money always has direction and meaning.',
  },
  {
    title: 'Smarter Money Habits',
    description:
      'Clear tracking and visibility help you understand your spending patterns and improve over time',
  },
];

export default function BuildDisciplineSection() {
  return (
    <SectionWrapper className='bg-[#f0fdf7] w-full py-12 lg:py-16 px-6 sm:px-12 lg:px-24 xl:px-32 mt-[40px] overflow-hidden'>
      <div className='mx-auto max-w-7xl'>
        {/* Header */}
        <div className='mb-10 text-center lg:mb-14'>
          <h2 className="font-['ClashDisplay',sans-serif] font-bold text-[#1f2937] text-2xl lg:text-4xl leading-tight mb-3">
            Build Your Financial Discipline with KoboMonie
          </h2>
          <p className="font-['Avenir',sans-serif] text-[#4b5563] text-base lg:text-xl leading-7">
            Stay consistent, accountable, and intentional with your savings
          </p>
        </div>

        {/* Desktop Layout - with SVG */}
        <div className='hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center'>
          {/* Left Column */}
          <div className='space-y-12'>
            <Feature {...FEATURES[0]} index={0} />
            <Feature {...FEATURES[2]} index={2} />
          </div>

          {/* Center - SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex justify-center'
          >
            <img
              src='/discipline.svg'
              alt='KoboMonie connections'
              className='w-full max-w-[400px] h-auto'
            />
          </motion.div>

          {/* Right Column */}
          <div className='space-y-12'>
            <Feature {...FEATURES[1]} index={1} />
            <Feature {...FEATURES[3]} index={3} />
          </div>
        </div>

        {/* Mobile Layout - Stacked (no SVG) */}
        <div className='grid grid-cols-1 gap-6 lg:hidden sm:grid-cols-2 sm:gap-8'>
          {FEATURES.map((feature, index) => (
            <Feature key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
