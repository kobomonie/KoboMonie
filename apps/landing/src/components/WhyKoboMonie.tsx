import SectionWrapper from './SectionWrapper';
import { motion } from 'motion/react';
import { Landmark, Bot, Users, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';

interface WhyCardProps {
  icon: React.ElementType;
  iconBg: string;
  title: string;
  description: string;
  bgColor: string;
  index: number;
  isMobile: boolean;
  isActive: boolean;
  onClick: () => void;
}

const WhyCard = ({
  icon: Icon,
  iconBg,
  title,
  description,
  bgColor,
  index,
  isMobile,
  isActive,
  onClick,
}: WhyCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, backgroundColor: bgColor }}
    whileInView={{ opacity: 1, scale: 1 }}
    animate={{
      backgroundColor: isActive ? '#00664e' : bgColor,
      y: isActive ? -5 : 0,
      boxShadow: isActive ? '0 10px 30px -10px rgba(0,0,0,0.1)' : 'none',
    }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
    whileHover={{
      y: -5,
      boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
      backgroundColor: '#00664e',
    }}
    onClick={onClick}
    className='group flex flex-col items-start text-left p-6 lg:p-8 rounded-2xl h-full transition-all duration-[50] cursor-pointer'
  >
    <div
      className={`rounded-xl w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center mb-4 lg:mb-6 transition-colors duration-[50] ${isActive ? 'bg-white!' : 'group-hover:bg-white!'}`}
      style={{ backgroundColor: isActive ? 'white' : iconBg }}
    >
      <Icon
        className={`w-6 h-6 lg:w-7 lg:h-7 transition-colors duration-[50] ${isActive ? 'text-[#00664e]' : 'text-white group-hover:text-[#00664e]'}`}
      />
    </div>
    <h3
      className={`font-['ClashDisplay',sans-serif] font-bold leading-tight text-lg lg:text-xl mb-3 transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#1f2937] group-hover:text-white'}`}
    >
      {title}
    </h3>
    <p
      className={`font-['Avenir',sans-serif] leading-relaxed text-sm lg:text-[15px] transition-colors duration-300 ${isActive ? 'text-gray-100' : 'text-[#4b5563] group-hover:text-gray-100'}`}
    >
      {description}
    </p>
  </motion.div>
);

const WHY_CARDS = [
  {
    icon: Landmark,
    iconBg: '#10b981', // Green
    title: 'Built on African Tradition',
    description:
      'We digitalize Ajo/Esusu rotational savings to preserve trust while removing the stress of managing contributions manually.',
    bgColor: '#ecfdf5', // Light Green
  },
  {
    icon: Bot,
    iconBg: '#3b82f6', // Blue
    title: 'Automated & Transparent',
    description:
      'No chasing contributors, no confusion. KoboMonie handles contributions, turns, payouts, and reminders automatically.',
    bgColor: '#eff6ff', // Light Blue
  },
  {
    icon: Users,
    iconBg: '#a855f7', // Purple
    title: 'Save Together, Grow Together',
    description:
      'Join trusted circles, build financial discipline, and access bulk cash easily without loans or interest.',
    bgColor: '#faf5ff', // Light Purple
  },
  {
    icon: Shield,
    iconBg: '#f97316', // Orange
    title: 'Secure & Easy to Use',
    description:
      'Your money is protected with advanced digital security and a simple interface anyone can use.',
    bgColor: '#fff7ed', // Light Orange
  },
];

export default function WhyKoboMonie() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <SectionWrapper
      id='why-kobomonie'
      className='py-16 px-4 w-full bg-white sm:px-8 lg:px-16 xl:px-24 lg:py-24'
    >
      <div className='grid grid-cols-1 gap-12 items-start mx-auto max-w-7xl lg:grid-cols-2 lg:gap-20'>
        {/* Left Column - Text Content */}
        <div className='flex flex-col gap-8'>
          <div>
            <h2 className="font-['ClashDisplay',sans-serif] font-bold leading-tight text-[#1f2937] text-3xl lg:text-[42px] mb-6">
              Get Bulk Money When you need it Without Borrowing
            </h2>
            <p className="font-['Avenir',sans-serif] leading-relaxed text-[#4b5563] text-base lg:text-lg mb-8">
              Whether it’s for business, rent, school fees, or personal goals,
              KoboMonie helps you access meaningful money without borrowing and
              without trusting blind luck.
            </p>
          </div>

          {/* Dark Green Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: isMobile ? 0 : 0.2 }}
            className='bg-[#0f4041] text-white p-8 lg:p-10 rounded-2xl shadow-xl'
          >
            <p className="font-['Avenir',sans-serif] leading-loose text-base lg:text-lg font-medium">
              Because life needs bulk money, not debt, not excuses, not risk.
              KoboMonie is a smarter way to do ajo/esusu/adashe/akawo, designed
              to give you access to lump-sum money without loans, interest, or
              fear of fraud.
            </p>
          </motion.div>
        </div>

        {/* Right Column - Feature Cards Grid */}
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6'>
          {WHY_CARDS.map((card, index) => (
            <WhyCard
              key={index}
              {...card}
              index={index}
              isMobile={isMobile}
              isActive={activeCard === index}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
