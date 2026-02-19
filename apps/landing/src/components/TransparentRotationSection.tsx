import { motion } from 'motion/react';

export default function TransparentRotationSection() {
  return (
    <section className='bg-[url("/Background2.svg")] bg-cover bg-center w-full mt-[40px] py-16 lg:py-24'>
      <div className='max-w-[1440px] mx-auto px-6 lg:px-12'>
        <div className='flex flex-col-reverse lg:relative'>
          {/* Image - full width, sits on top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src='/CommunityDetailsSection.svg'
              alt='Transparent Rotation System Preview'
              className='object-contain w-full h-auto lg:mt-30'
            />
          </motion.div>

          {/* Text - absolute, sits in the space below the image */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='relative py-4 pr-6 pl-4 lg:absolute lg:-top-20 lg:left-0 lg:right-0'
          >
            <h2 className="font-['ClashDisplay',sans-serif] font-bold leading-tight text-white text-3xl lg:text-4xl xl:text-5xl mb-3">
              Transparent Rotation System
            </h2>
            <p className="font-['Avenir',sans-serif] leading-relaxed text-gray-200 text-base lg:text-lg">
              Every member sees the lineup, contribution history, payout dates
              and community rules
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
