import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield } from 'lucide-react';

// Image imports - updated with Unsplash images
const imgEllipse186 =
  '/the-client-just-got-back-to-me-now-2025-04-06-10-46-08-utc.jpg';
const imgEllipse187 =
  '/mature-black-woman-doing-video-call-on-smartphone-2025-01-08-02-25-24-utc.jpg';
const imgEllipse189 =
  '/man-using-his-mobile-phone-on-the-street-2025-10-17-00-36-27-utc.jpg';

const StatCard = ({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, scale: 1.02 }}
    className='bg-white rounded-xl px-4 py-3 shadow-lg'
  >
    <p className='text-[11px] text-gray-600'>{label}</p>
    <p className='text-lg lg:text-xl font-bold text-[#00664e]'>{value}</p>
  </motion.div>
);

const MenuIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3 12H21M3 6H21M3 18H21'
      stroke='#1f2937'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const XIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M18 6L6 18M6 6L18 18'
      stroke='#1f2937'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className='relative w-full min-h-screen lg:min-h-[786px] bg-linear-to-br from-[#f0fdf4] via-[#ecfdf5] to-white overflow-hidden'>
      {/* Header */}
      <header className='relative z-50 flex items-center justify-between w-full max-w-7xl mx-auto px-4 lg:px-8 py-4'>
        {/* Logo */}
        <div className='h-8 lg:h-10 shrink-0'>
          <img alt='KoboMonie Logo' src='/logo.png' className='h-full w-auto' />
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className='hidden lg:flex gap-10 items-center'>
          <a
            href='#why-kobomonie'
            className='font-medium text-gray-800 text-lg hover:text-[#00664e] transition-colors'
          >
            Why KoboMonie
          </a>
          <a
            href='#faqs'
            className='font-medium text-gray-800 text-lg hover:text-[#00664e] transition-colors'
          >
            FAQs
          </a>
          <a
            href='#how-it-works'
            className='font-medium text-gray-800 text-lg hover:text-[#00664e] transition-colors'
          >
            How it works
          </a>
        </nav>

        {/* Login Button - Desktop */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='hidden lg:block bg-[#00664e] h-12 lg:h-14 rounded-lg px-6 lg:px-10 text-white font-medium text-base lg:text-lg shrink-0'
        >
          Log in
        </motion.button>

        {/* Hamburger Button - Mobile */}
        <button
          className='lg:hidden p-2'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='absolute top-full left-0 right-0 bg-white shadow-xl p-4 flex flex-col gap-4 lg:hidden z-50 border-t border-gray-100'
            >
              <a
                href='#why-kobomonie'
                className='font-medium text-gray-800 text-lg py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Why KoboMonie
              </a>
              <a
                href='#faqs'
                className='font-medium text-gray-800 text-lg py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </a>
              <a
                href='#how-it-works'
                className='font-medium text-gray-800 text-lg py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                How it works
              </a>
              <button className='bg-[#00664e] h-12 rounded-lg text-white font-medium text-base w-full'>
                Log in
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 lg:px-8 pt-8 lg:pt-12'>
        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12'>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='lg:w-1/2 lg:max-w-[520px] z-10'
          >
            {/* Badge */}
            <div className='bg-[#dcfce7] rounded-full inline-flex items-center gap-2 px-4 py-2 mb-4'>
              <Shield className='h-5 w-5 text-[#00664e]' />
              <span className='font-medium text-sm lg:text-base text-[#00664e]'>
                Built on fairness, not promises
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="font-['Avenir_LT_Std:85_Heavy',sans-serif] font-bold text-gray-800 text-3xl lg:text-5xl leading-tight lg:leading-[56px] mb-4">
              Rotational Savings <span className='underline'>made simple</span>,
              and <span className='underline'>stress-free</span>
            </h1>

            {/* Hero Description */}
            <p className="font-['Avenir:Roman',sans-serif] text-gray-600 text-base lg:text-xl leading-relaxed mb-4">
              KoboMonie is a digital platform that helps you join or create
              trusted savings communities, contribute on a schedule, and receive
              lump-sum payouts automatically. No stress, no confusion.
            </p>

            {/* Features List */}
            <ul className='font-medium text-gray-700 text-sm lg:text-lg leading-8 lg:leading-9 list-disc pl-6 mb-8'>
              <li>100% tracking, secure, automated and transparent</li>
              <li>No physical meetings, no chasing late members</li>
              <li>Your money is always visible and controlled</li>
              <li>Everyone contributes fairly</li>
            </ul>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-[#00664e] h-12 lg:h-14 rounded-lg px-8 lg:px-12 text-white font-medium text-base lg:text-lg'
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Right Content - Hero Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='lg:w-1/2 relative h-[400px] lg:h-[500px] mt-8 lg:mt-0'
          >
            {/* Dotted Circle */}
            <svg
              className='absolute inset-0 w-full h-full'
              viewBox='0 0 500 500'
              fill='none'
              preserveAspectRatio='xMidYMid meet'
            >
              <circle
                cx='250'
                cy='250'
                r='200'
                stroke='#00664e'
                strokeWidth='2'
                strokeDasharray='8 6'
                fill='none'
              />
            </svg>

            {/* Top left image */}
            <img
              alt='Person smiling with phone'
              src={imgEllipse186}
              className='absolute w-32 h-32 lg:w-64 lg:h-64 rounded-full object-cover left-4 lg:left-0 top-8 lg:top-8 z-10 border-4 border-white shadow-xl'
            />

            {/* Top right image */}
            <img
              alt='Person working'
              src={imgEllipse187}
              className='absolute w-28 h-28 lg:w-56 lg:h-56 rounded-full object-cover right-4 lg:right-6 top-12 lg:top-12 z-10 border-4 border-white shadow-xl'
            />

            {/* Bottom center image */}
            <img
              alt='Person happy with phone'
              src={imgEllipse189}
              className='absolute w-32 h-32 lg:w-64 lg:h-64 rounded-full object-cover left-1/2 -translate-x-1/2 bottom-4 lg:bottom-0 z-10 border-4 border-white shadow-xl'
            />

            {/* Stat Cards - Hidden on very small screens */}
            <div className='hidden sm:block'>
              <div className='absolute left-1/2 -translate-x-1/2 lg:left-24 lg:translate-x-0 top-36 lg:top-52 z-20'>
                <StatCard label='Total Payouts' value='₦650,000' delay={0.4} />
              </div>

              <div className='absolute right-4 lg:right-8 top-40 lg:top-48 z-20'>
                <StatCard
                  label='Total Withdrawal'
                  value='₦1,000,000'
                  delay={0.5}
                />
              </div>

              <div className='absolute right-1/4 lg:right-32 bottom-24 lg:bottom-20 z-20'>
                <StatCard
                  label='Total Contribution'
                  value='₦100,000'
                  delay={0.6}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
