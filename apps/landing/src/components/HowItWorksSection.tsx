import { motion } from 'motion/react';

interface StepCardProps {
  title: string;
  content: React.ReactNode;
  showBorder?: boolean;
  index: number;
}

const StepCard = ({
  title,
  content,
  showBorder = true,
  index,
}: StepCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`p-6 lg:p-8 h-full bg-[#f8f8f8] hover:bg-[#0e3f40] group transition-colors duration-300 ${
      showBorder ? 'lg:border-r-[3px] lg:border-[#e8ecf4]' : ''
    }`}
  >
    <h3
      className={`font-['Avenir:Medium',sans-serif] font-bold text-lg lg:text-xl leading-7 mb-6 lg:mb-10 text-black group-hover:text-white transition-colors duration-300`}
    >
      {title}
    </h3>
    <div
      className={`font-['Avenir:Roman',sans-serif] text-sm lg:text-base leading-[22px] text-black group-hover:text-white transition-colors duration-300`}
    >
      {content}
    </div>
  </motion.div>
);

const STEPS = [
  {
    title: 'Join a Savings Circle',
    content: (
      <p>
        KoboMonie lets you create or join a trusted savings group where everyone
        contributes the same amount regularly, just like traditional ajo or
        esusu, but safer and fully digital.
      </p>
    ),
  },
  {
    title: 'Payout are in two parts',
    content: (
      <>
        <p className='mb-2 font-medium'>
          Part 1: Instant Cash (Available Immediately)
        </p>
        <p className='mb-2'>
          You receive 40% of the group's monthly savings instantly.
        </p>
        <p>This gives you quick access to cash when you need it.</p>
      </>
    ),
  },
  {
    title: 'Payout are in two parts',
    content: (
      <>
        <p className='mb-2 font-medium'>
          Part 2: Locked Balance (Released Over Time)
        </p>
        <p>
          The remaining 60% is safely locked in your account, it is released
          gradually only when you continue contributing each month.
        </p>
      </>
    ),
  },
  {
    title: 'How the Locked Money Is Released',
    content: (
      <>
        <p className='mb-2'>Each month after you've collected:</p>
        <p className='mb-2'>
          A portion of your locked money is released automatically.
        </p>
        <p>You receive 100% of your money by the end of the thrift.</p>
      </>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id='how-it-works'
      className='bg-white w-full py-12 lg:py-16 px-6 sm:px-12 lg:px-24 xl:px-32 mt-[40px]'
    >
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
            How KoboMonie Rotational Savings Works
          </h2>
          <p className="font-['Avenir:Roman',sans-serif] text-[#4b5563] text-base lg:text-xl leading-7">
            KoboMonie keeps savings safe, fair, and stress-free
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden'>
          {STEPS.map((step, index) => (
            <StepCard
              key={index}
              {...step}
              index={index}
              showBorder={index < STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
