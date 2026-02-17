import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6 9L12 15L18 9'
      stroke='#00664E'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </motion.svg>
);

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: FAQItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className='border-b border-gray-200 last:border-b-0'
  >
    <button
      onClick={onToggle}
      className='w-full flex items-center justify-between py-4 lg:py-6 text-left group'
    >
      <span className="font-['Avenir',sans-serif]  font-bold text-[#1f2937] text-base lg:text-xl pr-4 group-hover:text-[#00664e] transition-colors">
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
          className='overflow-hidden'
        >
          <div className="font-['Avenir',sans-serif] text-[#4b5563] text-sm lg:text-base leading-7 pb-4 lg:pb-6">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ_DATA = [
  {
    question: 'Is KoboMonie a loan platform?',
    answer: (
      <>
        No.
        <br />
        KoboMonie is not a loan platform.
        <br />
        You only receive money you are already part of saving.
      </>
    ),
  },
  {
    question: 'Can someone collect money and stop paying?',
    answer: (
      <>
        No. Anyone who collects early receives only part of their payout
        upfront.
        <ul className='list-disc pl-5 mt-2 space-y-1'>
          <li>
            The remaining balance stays locked and is released only if they
            continue contributing.
          </li>
          <li>If they stop paying, they stop unlocking money.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'What happens if someone defaults?',
    answer: (
      <>
        Their remaining locked balance:
        <ul className='list-disc pl-5 mt-2 space-y-1'>
          <li>Is not released to them</li>
          <li>Is used to protect the savings cycle</li>
          <li>Other members are not affected.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'Do I lose money if someone else fails?',
    answer:
      'No. The system is designed so no one person’s failure affects the group.',
  },
  {
    question: 'Why is part of my money locked?',
    answer: (
      <>
        This protects everyone in the group.
        <br />
        <br />
        In traditional savings groups, someone can collect early and stop
        contributing. KoboMonie prevents this by making sure no one can run away
        with the full money.
      </>
    ),
  },
  {
    question: 'Do I still get all my money eventually?',
    answer: (
      <>
        Yes. Every member:
        <ul className='list-disc pl-5 mt-2 space-y-1'>
          <li>Contributes the same amount</li>
          <li>Receives the same total payout</li>
        </ul>
        The only difference is timing, not value.
      </>
    ),
  },
  {
    question: 'What if I’m the last to collect?',
    answer:
      'Then you receive 100% of your payout at once, since you’ve already completed your contributions.',
  },
  {
    question: 'Is my money safe on KoboMonie?',
    answer: (
      <>
        Yes.
        <ul className='list-disc pl-5 mt-2 space-y-1'>
          <li>Funds are tracked transparently</li>
          <li>Access is rule-based</li>
          <li>No manual handling</li>
          <li>No surprise deductions</li>
        </ul>
        Your money moves only according to the system rules.
      </>
    ),
  },
  {
    question: 'Is this the same as traditional ajo?',
    answer: (
      <>
        It’s inspired by it, but safer.
        <br />
        KoboMonie keeps the discipline and community of ajo, while removing the
        risk of human error and fraud.
      </>
    ),
  },
  {
    question: 'Why should I trust KoboMonie as a new platform?',
    answer: (
      <>
        Because trust isn’t a promise, it’s designed into how the system works.
        <ul className='list-disc pl-5 mt-2 space-y-1'>
          <li>You don’t rely on people behaving well.</li>
          <li>The system enforces fairness automatically.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'Can I save alone or must I join a group?',
    answer: (
      <>
        You can:
        <ul className='list-disc pl-5 mt-2 space-y-1'>
          <li>Join a savings circle</li>
          <li>Create one</li>
        </ul>
      </>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id='faqs'
      className='bg-[#effdf4] w-full py-12 lg:py-20 px-6 sm:px-12 lg:px-24 xl:px-32 mt-[40px]'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='lg:flex lg:gap-16'>
          {/* Left Side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='lg:w-1/3 mb-8 lg:mb-0'
          >
            <h2 className="font-['ClashDisplay',sans-serif] font-bold text-[#1f2937] text-2xl lg:text-4xl leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-['Avenir',sans-serif] text-[#4b5563] text-base lg:text-xl leading-7 mb-6">
              Learn more about everything you need about KoboMonie
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00664e] text-white font-['Avenir',sans-serif] text-base px-8 lg:px-14 py-3 lg:py-4 rounded-lg hover:bg-[#005540] transition-colors"
            >
              Ask Question
            </motion.button>
          </motion.div>

          {/* Right Side - FAQ Items */}
          <div className='lg:w-2/3'>
            {FAQ_DATA.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
