import { motion } from 'motion/react';

interface TeamMemberProps {
  name: string;
  role: string;
  company: string;
  image: string;
  linkedIn?: string;
  index: number;
}

const LinkedInIcon = () => (
  <svg
    width='14'
    height='16'
    viewBox='0 0 14 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3.5 2C3.5 3.10457 2.60457 4 1.5 4C0.395431 4 -0.5 3.10457 -0.5 2C-0.5 0.895431 0.395431 0 1.5 0C2.60457 0 3.5 0.895431 3.5 2ZM3.5 5.5H-0.5V16H3.5V5.5ZM7.5 5.5H4.5V16H7.5V10.5C7.5 7.5 11.5 7.25 11.5 10.5V16H14.5V9.25C14.5 4.5 8.75 4.75 7.5 7V5.5Z'
      fill='currentColor'
    />
  </svg>
);

const TeamMemberCard = ({
  name,
  role,
  company,
  image,
  linkedIn,
  index,
}: TeamMemberProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className='bg-[#00664e] rounded-2xl overflow-hidden shadow-lg flex flex-col'
  >
    {/* Image */}
    <div className='h-48 lg:h-64 overflow-hidden'>
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        src={image}
        alt={name}
        className='w-full h-full object-cover object-top'
      />
    </div>

    {/* Info */}
    <div className='p-4 text-center'>
      <p className="font-['Avenir:Medium',sans-serif] text-white text-xs uppercase tracking-wide mb-1">
        <span className='font-semibold'>{name}</span>, {role}
      </p>
      <p className="font-['Avenir:Roman',sans-serif] text-white/80 text-xs mb-2">
        {company}
      </p>

      {linkedIn && (
        <a
          href={linkedIn}
          target='_blank'
          rel='noopener noreferrer'
          className="inline-flex items-center justify-center gap-2 text-[#dcfce7] text-xs hover:text-white transition-colors font-['Avenir:Roman',sans-serif]"
        >
          <LinkedInIcon />
          <span>LinkedIn</span>
        </a>
      )}
    </div>
  </motion.div>
);

const TEAM_MEMBERS = [
  {
    name: 'Tomiwa Samuel',
    role: 'Head of Product',
    company: 'KoboMonie',
    image: '/stakeholder-1.jpg',
    linkedIn: '#',
  },
  {
    name: 'Muyiwa Isreal',
    role: 'Head of Finance',
    company: 'KoboMonie',
    image: '/stakeholder-3.jpg',
    linkedIn: '#',
  },
  {
    name: 'Mayowa Emmanuel',
    role: 'Director',
    company: 'Bossmeek Group',
    image: '/stakeholder-2.jpg',
    linkedIn: '#',
  },
  {
    name: 'Fikayo Olagunju',
    role: 'Director of Tech',
    company: 'Descasio',
    image: '/stakeholder-4.jpg',
    linkedIn: '#',
  },
];

export default function MeetTheTeamSection() {
  return (
    <section
      id='team'
      className='bg-[#f9fafb] w-full py-12 lg:py-20 px-6 sm:px-12 lg:px-24 xl:px-32 mt-[40px]'
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
          <h2 className="font-['Avenir_LT_Std:85_Heavy',sans-serif] text-[#1f2937] text-2xl lg:text-4xl leading-tight mb-3">
            Meet The Team
          </h2>
          <p className="font-['Avenir:Roman',sans-serif] text-[#4b5563] text-base lg:text-xl leading-7">
            The people building KoboMonie
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberCard key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
