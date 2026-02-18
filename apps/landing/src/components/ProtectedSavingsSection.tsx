import { motion } from 'motion/react';

export default function ProtectedSavingsSection() {
  return (
    <section className='bg-[url("/Background1.svg")] bg-cover bg-center w-full mt-[40px] py-16 lg:py-24'>
      <div className='max-w-[1440px] mx-auto px-6 lg:px-12'>
        <div className='relative'>
          {/* Image - full width, sits on top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src='/WalletSection.svg'
              alt='Protected Savings Preview'
              className='w-full h-auto object-contain mt-30'
            />
          </motion.div>

          {/* Text - absolute, sits in the space below the image */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='absolute -top-30 left-0 right-0 px-6 py-4 text-right'
          >
            <h2 className="font-['ClashDisplay',sans-serif] font-bold leading-tight text-white text-3xl lg:text-4xl xl:text-5xl mb-3">
              Protected savings account
            </h2>
            <p className="font-['Avenir',sans-serif] leading-relaxed text-gray-200 text-base lg:text-lg">
              Your funds are stored in a safe wallet with industry-level 256-bit
              SSL encryption and security
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
