import { motion } from 'motion/react';

export default function ContributeSection() {
  return (
    <section className='bg-[url("/Background2.svg")] bg-cover bg-center w-full mt-[40px] py-16 lg:py-24'>
      <div className='max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
        {/* Text Container */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['ClashDisplay',sans-serif] font-bold leading-tight text-white text-3xl lg:text-4xl xl:text-5xl mb-6">
            Contribute and Track Progress
          </h2>
          <p className="font-['Avenir',sans-serif] leading-relaxed text-gray-200 text-base lg:text-lg">
            No more manual record keeping. KoboMonie handles reminders,
            deduction, payouts and dispute prevention.
          </p>
        </motion.div>

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex justify-center lg:justify-end'
        >
          <img
            src='/ReportAnalysisSection.svg'
            alt='Contribute and Track Progress Preview'
            className='w-full max-w-lg lg:max-w-full h-auto object-contain'
          />
        </motion.div>
      </div>
    </section>
  );
}
