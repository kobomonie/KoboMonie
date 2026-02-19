import SectionWrapper from './SectionWrapper';
import { motion } from 'motion/react';
import { ClipboardCheck, HandCoins, Zap, ChartLine } from 'lucide-react';

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
      className='bg-[#dcfce7] rounded-full w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center mb-4 lg:mb-6'
    >
      {icon}
    </motion.div>
    <h3 className="font-['ClashDisplay',sans-serif] font-bold text-[#1f2937] text-base lg:text-xl leading-7 mb-2 lg:mb-4">
      {title}
    </h3>
    <p className="font-['Avenir',sans-serif] text-[#4b5563] text-sm lg:text-base leading-6 max-w-[280px]">
      {description}
    </p>
  </motion.div>
);

// SVG Icons removed in favor of Lucide React icons

const TRUST_FEATURES = [
  {
    icon: <ClipboardCheck className='w-6 h-6 lg:w-8 lg:h-8 text-[#10B981]' />,
    title: 'Automated Tracking',
    description:
      'Every contribution and payout is tracked automatically in real time',
  },
  {
    icon: <HandCoins className='w-6 h-6 lg:w-8 lg:h-8 text-[#10B981]' />,
    title: 'Transparent Savings Rules',
    description:
      "You always know how much you're saving, when you'll collect, and how everything works",
  },
  {
    icon: (
      <Zap className='w-6 h-6 lg:w-8 lg:h-8 text-[#10B981]' fill='#10B981' />
    ),
    title: 'No Hidden Charges',
    description: 'No surprise deductions. No unclear fees',
  },
  {
    icon: <ChartLine className='w-6 h-6 lg:w-8 lg:h-8 text-[#10B981]' />,
    title: 'Fraud Resistant System',
    description:
      'KoboMonie is designed so no one can collect money and disappear',
  },
];

export default function WhyTrustSection() {
  return (
    <SectionWrapper className='bg-white w-full py-12 lg:py-16 px-6 sm:px-12 lg:px-24 xl:px-32 mt-[40px]'>
      <div className='mx-auto max-w-7xl'>
        {/* Header */}
        <div className='mb-10 text-center lg:mb-16'>
          <h2 className="font-['ClashDisplay',sans-serif] font-bold text-[#1f2937] text-2xl lg:text-4xl leading-tight mb-3">
            Why Trust KoboMonie
          </h2>
          <p className="font-['Avenir',sans-serif] font-medium text-[#4b5563] text-sm lg:text-base">
            Trust isn't a promise, it's designed into how the system works.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8'>
          {TRUST_FEATURES.map((feature, index) => (
            <TrustCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
