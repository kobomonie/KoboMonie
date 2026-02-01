import { motion } from 'motion/react';
import { Landmark, Bot, Users, Shield } from 'lucide-react';

interface WhyCardProps {
  icon: React.ElementType;
  iconBg: string;
  title: string;
  description: string;
  gradient: string;
  index: number;
}

const WhyCard = ({
  icon: Icon,
  iconBg,
  title,
  description,
  gradient,
  index,
}: WhyCardProps) => (
  <motion.div
    initial='rest'
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover='hover'
    variants={{
      rest: {
        opacity: 0,
        y: 30,
        backgroundColor: 'rgba(0,0,0,0)',
        backgroundImage: gradient,
      },
      hover: {
        y: -5,
        backgroundColor: '#0e3f40',
        backgroundImage: 'none',
        opacity: 1,
      },
    }}
    className='group flex flex-col items-center text-center lg:items-start lg:text-left p-6 lg:p-8 rounded-2xl h-full'
    style={{ backgroundImage: gradient }}
  >
    <motion.div
      variants={{
        rest: { backgroundColor: iconBg, color: '#ffffff' },
        hover: { backgroundColor: '#ffffff', color: iconBg },
      }}
      className='rounded-xl w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mb-4 lg:mb-6'
    >
      <Icon className='w-5 h-5 lg:w-6 lg:h-6' />
    </motion.div>
    <h3 className="font-['Avenir_LT_Std:85_Heavy',sans-serif] font-bold leading-7 text-[#1f2937] group-hover:text-white transition-colors duration-300 text-base lg:text-xl mb-2 lg:mb-4">
      {title}
    </h3>
    <p className="font-['Avenir:Roman',sans-serif] leading-6 lg:leading-[26px] text-[#4b5563] group-hover:text-[#d1d5db] transition-colors duration-300 text-sm lg:text-base">
      {description}
    </p>
  </motion.div>
);

const WHY_CARDS = [
  {
    icon: Landmark,
    iconBg: '#10b981',
    title: 'Built on African Tradition',
    description:
      'We digitalize Ajo/Esusu rotational savings to preserve trust while removing the stress of managing contributions manually.',
    gradient:
      'linear-gradient(127deg, rgba(240, 253, 244, 1) 0%, rgba(236, 253, 245, 1) 71%)',
  },
  {
    icon: Bot,
    iconBg: '#3b82f6',
    title: 'Automated & Transparent',
    description:
      'No chasing contributors, no confusion. KoboMonie handles contributions, turns, payouts, and reminders automatically.',
    gradient:
      'linear-gradient(127deg, rgba(239, 246, 255, 1) 0%, rgba(236, 254, 255, 1) 71%)',
  },
  {
    icon: Users,
    iconBg: '#a855f7',
    title: 'Save Together, Grow Together',
    description:
      'Join trusted circles, build financial discipline, and access bulk cash easily without loans or interest.',
    gradient:
      'linear-gradient(127deg, rgba(250, 245, 255, 1) 0%, rgba(253, 242, 248, 1) 71%)',
  },
  {
    icon: Shield,
    iconBg: '#f97316',
    title: 'Secure & Easy to Use',
    description:
      'Your money is protected with advanced digital security and a simple interface anyone can use.',
    gradient:
      'linear-gradient(127deg, rgba(255, 247, 237, 1) 0%, rgba(254, 242, 242, 1) 71%)',
  },
];

export default function WhyKoboMonie() {
  return (
    <section
      id='why-kobomonie'
      className='bg-white w-full px-6 sm:px-12 lg:px-24 xl:px-32 py-12 lg:py-20 mt-[40px]'
    >
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-8 lg:mb-16'
        >
          <h2 className="font-['Avenir_LT_Std:85_Heavy',sans-serif] font-bold leading-tight text-[#1f2937] text-2xl lg:text-[50px] mb-3">
            Why KoboMonie Exists
          </h2>
          <p className="font-['Avenir:Roman',sans-serif] leading-7 text-[#4b5563] text-base lg:text-xl">
            Experience the modern way to save together
          </p>
        </motion.div>

        {/* Cards Grid - Stack on mobile, 4 cols on desktop */}
        <div className='flex flex-col lg:grid lg:grid-cols-4 gap-4 lg:gap-8'>
          {WHY_CARDS.map((card, index) => (
            <WhyCard key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
