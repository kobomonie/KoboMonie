import { motion } from 'motion/react';
import { Landmark, Bot, Users, Shield } from 'lucide-react';

interface WhyCardProps {
  icon: React.ElementType;
  iconBg: string;
  title: string;
  description: string;
  bgColor: string;
  index: number;
}

const WhyCard = ({
  icon: Icon,
  iconBg,
  title,
  description,
  bgColor,
  index,
}: WhyCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, backgroundColor: bgColor }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{
      y: -5,
      boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
      backgroundColor: '#00664e',
    }}
    className='group flex flex-col items-start text-left p-6 lg:p-8 rounded-2xl h-full transition-all duration-[50]'
  >
    <div
      className='rounded-xl w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center mb-4 lg:mb-6 transition-colors duration-[50] group-hover:bg-white!'
      style={{ backgroundColor: iconBg }}
    >
      <Icon className='w-6 h-6 lg:w-7 lg:h-7 text-white group-hover:text-[#00664e] transition-colors duration-[50]' />
    </div>
    <h3 className="font-['ClashDisplay',sans-serif] font-bold leading-tight text-[#1f2937] text-lg lg:text-xl mb-3 group-hover:text-white transition-colors duration-300">
      {title}
    </h3>
    <p className="font-['Avenir',sans-serif] leading-relaxed text-[#4b5563] text-sm lg:text-[15px] group-hover:text-gray-100 transition-colors duration-300">
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
  return (
    <section
      id='why-kobomonie'
      className='bg-white w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24'
    >
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start'>
        {/* Left Column - Text Content */}
        <div className='flex flex-col gap-8'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['ClashDisplay',sans-serif] font-bold leading-tight text-[#1f2937] text-3xl lg:text-[42px] mb-6">
              Get Bulk Money When you need it Without Borrowing
            </h2>
            <p className="font-['Avenir',sans-serif] leading-relaxed text-[#4b5563] text-base lg:text-lg mb-8">
              Whether it’s for business, rent, school fees, or personal goals,
              KoboMonie helps you access meaningful money without borrowing and
              without trusting blind luck.
            </p>
          </motion.div>

          {/* Dark Green Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='bg-[#0f291e] text-white p-8 lg:p-10 rounded-2xl shadow-xl'
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
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
          {WHY_CARDS.map((card, index) => (
            <WhyCard key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
