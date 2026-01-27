import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="#00664E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

const FAQItem = ({ question, answer, isOpen, onToggle, index }: FAQItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="border-b border-gray-200 last:border-b-0"
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-4 lg:py-6 text-left"
    >
      <span className="font-['Avenir:Medium',sans-serif] text-[#1f2937] text-base lg:text-xl pr-4">
        {question}
      </span>
      <ChevronIcon isOpen={isOpen} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <p className="font-['Avenir:Roman',sans-serif] text-[#4b5563] text-sm lg:text-base leading-6 pb-4 lg:pb-6">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ_DATA = [
  {
    question: 'Is KoboMonie a Loan Platform?',
    answer:
      'No. KoboMonie is not a loan platform. You only receive money you are already part of saving.',
  },
  {
    question: 'Can someone collect money and stop paying?',
    answer:
      'No. KoboMonie uses a locked balance system where 60% of your payout is held and released gradually as you continue contributing. This ensures everyone stays committed throughout the savings cycle.',
  },
  {
    question: 'What happens if someone defaults?',
    answer:
      'If a member fails to contribute, their locked balance is used to cover the shortfall. This protects other members from losing their money.',
  },
  {
    question: 'Do I lose money if someone else fails?',
    answer:
      'No. The locked balance system is designed to protect all members. If someone defaults, their locked funds cover the gap, not your savings.',
  },
  {
    question: 'Why is part of my money locked?',
    answer:
      'The locked balance ensures everyone stays committed to the savings circle. It is released gradually as you continue contributing each month, and you receive 100% by the end of the thrift.',
  },
  {
    question: 'Is my money safe on KoboMonie?',
    answer:
      'Yes. Your funds are protected with industry-standard 256-bit SSL encryption and stored in secure wallets. KoboMonie is designed with multiple safety features to protect your savings.',
  },
  {
    question: 'Is this the same as traditional Ajo/Esusu?',
    answer:
      'KoboMonie digitizes the traditional Ajo/Esusu concept while adding modern security features. You get the same community savings experience, but with automated tracking, transparent rules, and fraud protection.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="bg-[#effdf4] w-full py-12 lg:py-20 px-6 sm:px-12 lg:px-24 xl:px-32 mt-[40px]">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:gap-16">
          {/* Left Side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 mb-8 lg:mb-0"
          >
            <h2 className="font-['Avenir_LT_Std:85_Heavy',sans-serif] text-[#1f2937] text-2xl lg:text-4xl leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-['Avenir:Roman',sans-serif] text-[#4b5563] text-base lg:text-xl leading-7 mb-6">
              Learn more about everything you need about KoboMonie
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00664e] text-white font-['Avenir:Roman',sans-serif] text-base px-8 lg:px-14 py-3 lg:py-4 rounded-lg hover:bg-[#005540] transition-colors"
            >
              Ask Question
            </motion.button>
          </motion.div>

          {/* Right Side - FAQ Items */}
          <div className="lg:w-2/3">
            {FAQ_DATA.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
