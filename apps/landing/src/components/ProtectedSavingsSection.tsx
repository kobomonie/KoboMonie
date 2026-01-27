import { motion } from 'motion/react';

export default function ProtectedSavingsSection() {
  return (
    <section className='bg-white w-full mt-[40px] relative'>
      {/* Mobile: Stacked (text first), Desktop: Text absolute over image gap */}
      <div className='flex flex-col-reverse lg:block relative'>
        {/* Text Container - absolute on large screens, positioned right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='px-6 sm:px-12 lg:px-24 xl:px-32 py-8 lg:py-0 lg:absolute lg:top-[40px] xl:top-[60px] lg:right-[80px] xl:right-[120px] z-10 lg:max-w-[800px]'
        >
          <h2 className="font-['Avenir_LT_Std:85_Heavy',sans-serif] leading-tight text-[#1f2937] text-2xl lg:text-[32px] xl:text-[40px] lg:text-right">
            Protected savings account
          </h2>
          <p className="font-['Avenir:Roman',sans-serif] leading-relaxed mt-3 text-[#4b5563] text-sm lg:text-base lg:text-right">
            Your funds are stored in a safe wallet with industry-level 256-bit
            SSL encryption and security
          </p>
        </motion.div>

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='w-full max-w-7xl mx-auto flex justify-center lg:justify-start order-first lg:order-0 px-4 lg:px-0'
        >
          <img
            src='/app-shot-2.png'
            alt='Protected Savings Preview'
            className='w-full h-auto object-contain'
          />
        </motion.div>
      </div>
    </section>
  );
}
