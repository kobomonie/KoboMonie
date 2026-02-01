import { motion } from 'motion/react';

interface TrustCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const TrustCard = ({ icon, title, description, index }: TrustCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className='flex flex-col items-center text-center'
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className='bg-[rgba(16,185,129,0.2)] rounded-full w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center mb-4 lg:mb-6'
    >
      {icon}
    </motion.div>
    <h3 className="font-['Avenir:Medium',sans-serif] font-bold text-white text-base lg:text-xl leading-7 mb-2 lg:mb-4">
      {title}
    </h3>
    <p className="font-['Avenir:Roman',sans-serif] text-[#d1d5db] text-sm lg:text-base leading-6 max-w-[280px]">
      {description}
    </p>
  </motion.div>
);

// SVG Icons
const TrackingIcon = () => (
  <svg
    width='24'
    height='30'
    viewBox='0 0 24 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='w-5 h-6 lg:w-6 lg:h-7'
  >
    <path
      d='M12 2L2 7V13.5C2 20.35 6.26 26.74 12 28.5C17.74 26.74 22 20.35 22 13.5V7L12 2ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z'
      fill='#10B981'
    />
  </svg>
);

const TransparencyIcon = () => (
  <svg
    width='32'
    height='30'
    viewBox='0 0 32 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='w-6 h-6 lg:w-8 lg:h-7'
  >
    <path
      d='M4 4H28V8H4V4ZM4 12H28V16H4V12ZM4 20H20V24H4V20ZM24 20L28 24L24 28V20Z'
      fill='#10B981'
    />
  </svg>
);

const NoChargesIcon = () => (
  <svg
    width='26'
    height='30'
    viewBox='0 0 26 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='w-5 h-6 lg:w-6 lg:h-7'
  >
    <path
      d='M13 2C7.48 2 3 6.48 3 12C3 17.52 7.48 22 13 22C18.52 22 23 17.52 23 12C23 6.48 18.52 2 13 2ZM14 17H12V15H14V17ZM14 13H12V7H14V13Z'
      fill='#10B981'
    />
    <path
      d='M2 26L24 4'
      stroke='#10B981'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
);

const FraudResistantIcon = () => (
  <svg
    width='28'
    height='30'
    viewBox='0 0 28 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='w-5 h-6 lg:w-7 lg:h-7'
  >
    <path
      d='M14 2L4 6V14C4 21.1 8.26 27.66 14 29.5C19.74 27.66 24 21.1 24 14V6L14 2ZM14 14.99H22C21.22 20.3 18.1 25.03 14 26.93V15H6V7.3L14 4.19V14.99Z'
      fill='#10B981'
    />
  </svg>
);

const TRUST_FEATURES = [
  {
    icon: <TrackingIcon />,
    title: 'Automated Tracking',
    description:
      'Every contribution and payout is tracked automatically in real time',
  },
  {
    icon: <TransparencyIcon />,
    title: 'Transparent Savings Rules',
    description:
      "You always know how much you're saving, when you'll collect, and how everything works",
  },
  {
    icon: <NoChargesIcon />,
    title: 'No Hidden Charges',
    description: 'No surprise deductions. No unclear fees',
  },
  {
    icon: <FraudResistantIcon />,
    title: 'Fraud Resistant System',
    description:
      'KoboMonie is designed so no one can collect money and disappear',
  },
];

export default function WhyTrustSection() {
  return (
    <section className='bg-[#0e3f40] w-full py-12 lg:py-16 px-6 sm:px-12 lg:px-24 xl:px-32 mt-[40px]'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-10 lg:mb-16'
        >
          <h2 className="font-['Avenir_LT_Std:85_Heavy',sans-serif] font-bold text-white text-2xl lg:text-4xl leading-tight mb-3">
            Why Trust KoboMonie
          </h2>
          <p className="font-['Avenir:Medium',sans-serif] text-[#d1d5db] text-sm lg:text-base">
            Trust isn't a promise, it's designed into how the system works.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8'>
          {TRUST_FEATURES.map((feature, index) => (
            <TrustCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
