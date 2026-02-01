import { motion } from 'motion/react';

// Icons for each feature
const ConsistencyIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
      fill='#00664E'
    />
  </svg>
);

const AccountabilityIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'
      fill='#00664E'
    />
  </svg>
);

const PurposeIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
      fill='#00664E'
    />
  </svg>
);

const HabitsIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z'
      fill='#00664E'
    />
  </svg>
);

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Feature = ({ icon, title, description, index }: FeatureProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className='flex items-start gap-4'
  >
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className='w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#F4F9FF] flex items-center justify-center shrink-0'
    >
      {icon}
    </motion.div>
    <div>
      <h3 className="font-['Avenir_LT_Std:85_Heavy',sans-serif] font-bold text-[#1f2937] text-base lg:text-lg leading-normal mb-1">
        {title}
      </h3>
      <p className="font-['Avenir:Roman',sans-serif] text-[#4b5563] text-sm lg:text-base leading-6">
        {description}
      </p>
    </div>
  </motion.div>
);

const FEATURES = [
  {
    icon: <ConsistencyIcon />,
    title: 'Consistency Without Stress',
    description:
      'Automatic contributions help you save regularly without having to remember or force yourself',
  },
  {
    icon: <AccountabilityIcon />,
    title: 'Accountability That Works',
    description:
      'Saving with others keeps you committed, not through pressure, but shared responsibility',
  },
  {
    icon: <PurposeIcon />,
    title: 'Purpose-Driven Saving',
    description:
      'Save toward clear goals with timelines, so your money always has direction and meaning.',
  },
  {
    icon: <HabitsIcon />,
    title: 'Smarter Money Habits',
    description:
      'Clear tracking and visibility help you understand your spending patterns and improve over time',
  },
];

export default function BuildDisciplineSection() {
  return (
    <section className='bg-[#f0fdf7] w-full py-12 lg:py-16 px-6 sm:px-12 lg:px-24 xl:px-32 mt-[40px] overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-10 lg:mb-14'
        >
          <h2 className="font-['Avenir_LT_Std:85_Heavy',sans-serif] font-bold text-[#1f2937] text-2xl lg:text-4xl leading-tight mb-3">
            Build Your Financial Discipline with KoboMonie
          </h2>
          <p className="font-['Avenir:Roman',sans-serif] text-[#4b5563] text-base lg:text-xl leading-7">
            Stay consistent, accountable, and intentional with your savings
          </p>
        </motion.div>

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
              src='/buildyourdiscipline.svg'
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
        <div className='lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8'>
          {FEATURES.map((feature, index) => (
            <Feature key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
