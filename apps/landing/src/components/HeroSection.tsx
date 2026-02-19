import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  ShieldCheck,
  Bot,
  CircleDollarSign,
  Users,
} from 'lucide-react';

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
    <section className='relative w-full min-h-screen lg:min-h-[786px] overflow-hidden bg-white'>
      {/* Header */}
      <header className='flex relative z-50 justify-between items-center py-4 px-4 mx-auto w-full max-w-7xl lg:px-8'>
        {/* Logo */}
        <div className='h-8 lg:h-10 shrink-0'>
          <img alt='KoboMonie Logo' src='/logo.svg' className='w-auto h-full' />
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className='hidden gap-10 items-center lg:flex'>
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
          className='p-2 lg:hidden'
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
              className='flex absolute right-0 left-0 top-full z-50 flex-col gap-4 p-4 bg-white border-t border-gray-100 shadow-xl lg:hidden'
            >
              <a
                href='#why-kobomonie'
                className='py-2 text-lg font-medium text-gray-800'
                onClick={() => setIsMenuOpen(false)}
              >
                Why KoboMonie
              </a>
              <a
                href='#faqs'
                className='py-2 text-lg font-medium text-gray-800'
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </a>
              <a
                href='#how-it-works'
                className='py-2 text-lg font-medium text-gray-800'
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
      <div className='px-4 pt-8 mx-auto max-w-7xl lg:px-8 lg:pt-12'>
        <div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12'>
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
            <h1 className="font-['ClashDisplay',sans-serif] font-bold text-gray-800 text-3xl lg:text-5xl leading-tight lg:leading-[56px] mb-4">
              Rotational Savings <span className='underline'>made simple</span>,
              and <span className='underline'>stress-free</span>
            </h1>

            {/* Hero Description */}
            <p className="font-['Avenir',sans-serif] text-gray-600 text-base lg:text-xl leading-relaxed mb-4">
              KoboMonie is a digital platform that helps you join or create
              trusted savings communities, contribute on a schedule, and receive
              lump-sum payouts automatically. No stress, no confusion.
            </p>

            {/* Features List */}
            {/* Features List */}
            <div className='flex flex-col gap-4 mb-8'>
              <div className='flex gap-3 items-center lg:gap-4'>
                <div className='shrink-0'>
                  <ShieldCheck className='w-6 h-6 lg:w-7 lg:h-7 text-[#00664e]' />
                </div>
                <span className='text-sm font-medium leading-7 text-gray-700 lg:text-lg lg:leading-8'>
                  100% tracking, secure, automated and transparent
                </span>
              </div>

              <div className='flex gap-3 items-center lg:gap-4'>
                <div className='shrink-0'>
                  <Bot className='w-6 h-6 lg:w-7 lg:h-7 text-[#00664e]' />
                </div>
                <span className='text-sm font-medium leading-7 text-gray-700 lg:text-lg lg:leading-8'>
                  No physical meetings, no chasing late members
                </span>
              </div>

              <div className='flex gap-3 items-center lg:gap-4'>
                <div className='shrink-0'>
                  <CircleDollarSign className='w-6 h-6 lg:w-7 lg:h-7 text-[#00664e]' />
                </div>
                <span className='text-sm font-medium leading-7 text-gray-700 lg:text-lg lg:leading-8'>
                  Your money is always visible and controlled
                </span>
              </div>

              <div className='flex gap-3 items-center lg:gap-4'>
                <div className='shrink-0'>
                  <Users className='w-6 h-6 lg:w-7 lg:h-7 text-[#00664e]' />
                </div>
                <span className='text-sm font-medium leading-7 text-gray-700 lg:text-lg lg:leading-8'>
                  Everyone contributes fairly
                </span>
              </div>
            </div>

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
            {/* Right Content - Hero Images */}
            <img
              alt='Hero'
              src='/hero.svg'
              className='object-contain w-full h-full'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
