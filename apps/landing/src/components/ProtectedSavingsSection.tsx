import { motion } from 'motion/react';

export default function ProtectedSavingsSection() {
  return (
    <section className='bg-[url("/Background1.svg")] bg-cover bg-center w-full mt-[40px] py-16 lg:py-24'>
      <div className='max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
        {/* Image Container - Order 2 on mobile (if we want text first), but typically image top or bottom. 
            Original had text first on mobile (flex-col-reverse). 
            Let's keep text first on mobile? 
            Actually, commonly image is top on mobile. 
            The previous code had `flex-col-reverse` implying Image was bottom on mobile? 
            "Mobile: Stacked (text first)" comment says text first.
            Let's stick to the visual flow. 
            If I put Image first in DOM: it's top on mobile.
            If I put Text first in DOM: it's top on mobile.
            Grid auto auto placement. 
            Let's mirror the Contribute section structure but swap columns.
            
            Contribute: Text (Col 1), Image (Col 2).
            Protected: Image (Col 1), Text (Col 2).
        */}

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex justify-center lg:justify-start order-last lg:order-first'
        >
          <img
            src='/WalletSection.svg'
            alt='Protected Savings Preview'
            className='w-full max-w-lg lg:max-w-full h-auto object-contain'
          />
        </motion.div>

        {/* Text Container */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['ClashDisplay',sans-serif] font-bold leading-tight text-white text-3xl lg:text-4xl xl:text-5xl mb-6 lg:text-right">
            Protected savings account
          </h2>
          <p className="font-['Avenir',sans-serif] leading-relaxed text-gray-200 text-base lg:text-lg lg:text-right">
            Your funds are stored in a safe wallet with industry-level 256-bit
            SSL encryption and security
          </p>
        </motion.div>
      </div>
    </section>
  );
}
