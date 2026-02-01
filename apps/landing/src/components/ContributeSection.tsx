import { motion } from 'motion/react';

export default function ContributeSection() {
  return (
    <section className='bg-[#f0fdf7] w-full mt-[40px] relative pt-10'>
      {/* Mobile: Stacked, Desktop: Text absolute over image gap */}
      <div className='flex flex-col lg:block relative'>
        {/* Text Container - absolute on large screens */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='px-6 sm:px-12 lg:px-24 xl:px-32 py-8 lg:py-4 lg:absolute lg:top-[40px] xl:top-[10px] lg:left-[80px] xl:left-[120px] z-10 lg:max-w-[800px]'
        >
          <h2 className="font-['Avenir_LT_Std:85_Heavy',sans-serif] font-bold leading-tight text-[#1f2937] text-2xl lg:text-[32px] xl:text-[40px]">
            Contribute and Track Progress
          </h2>
          <p className="font-['Avenir:Roman',sans-serif] leading-relaxed mt-3 text-[#4b5563] text-sm lg:text-base">
            No more manual record keeping. KoboMonie handles reminders,
            deduction, payouts and dispute prevention.
          </p>
        </motion.div>

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='w-full max-w-7xl mx-auto flex justify-center lg:justify-end px-4 lg:px-0'
        >
          <img
            src='/app-shot-1.svg'
            alt='Contribute and Track Progress Preview'
            className='w-full h-auto object-contain'
          />
        </motion.div>
      </div>
    </section>
  );
}
