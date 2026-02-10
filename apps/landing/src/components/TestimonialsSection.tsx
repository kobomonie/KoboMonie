import { motion } from 'motion/react';

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  gradient: string;
  avatar: string;
  index: number;
}

const TestimonialCard = ({
  name,
  location,
  quote,
  gradient,
  avatar,
  index,
}: TestimonialCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className='p-6 lg:p-8 rounded-2xl h-full'
    style={{ backgroundImage: gradient }}
  >
    <div className='flex items-center gap-4 mb-4 lg:mb-6'>
      <div className='w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden bg-gray-200 shrink-0'>
        <img src={avatar} alt={name} className='w-full h-full object-cover' />
      </div>
      <div>
        <p className="font-['Avenir',sans-serif] font-medium text-[#1f2937] text-sm lg:text-base leading-6">
          {name}
        </p>
        <p className="font-['Avenir',sans-serif] text-[#4b5563] text-xs lg:text-sm leading-5">
          {location}
        </p>
      </div>
    </div>
    <p className="font-['Avenir',sans-serif] text-[#374151] text-sm lg:text-base leading-[26px]">
      "{quote}"
    </p>
  </motion.div>
);

const TESTIMONIALS = [
  {
    name: 'Tunde A.',
    location: 'Ibadan',
    quote:
      'My family runs three different circles now. It keeps us disciplined and helps with emergencies.',
    gradient:
      'linear-gradient(161deg, rgba(250, 245, 255, 1) 0%, rgba(253, 242, 248, 1) 71%)',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?bg=204&fit=crop&h=200&w=200&auto=format',
  },
  {
    name: 'Favour C.',
    location: 'Port Harcourt',
    quote:
      'I took my turn in the second month and used it as capital for my small business. This product is a blessing.',
    gradient:
      'linear-gradient(161deg, rgba(239, 246, 255, 1) 0%, rgba(236, 254, 255, 1) 71%)',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?bg=204&fit=crop&h=200&w=200&auto=format',
  },
  {
    name: 'Amina O.',
    location: 'Lagos',
    quote:
      'KoboMonie made our office Ajo so easy. No drama, no arguments, everyone just contributes automatically.',
    gradient:
      'linear-gradient(161deg, rgba(240, 253, 244, 1) 0%, rgba(236, 253, 245, 1) 71%)',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?bg=204&fit=crop&h=200&w=200&auto=format',
  },
  {
    name: 'Chinwe E.',
    location: 'Enugu',
    quote:
      'The transparency is perfect. We all see the rotation and contributions clearly.',
    gradient:
      'linear-gradient(161deg, rgba(255, 247, 237, 1) 0%, rgba(254, 242, 242, 1) 71%)',
    avatar:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?bg=204&fit=crop&h=200&w=200&auto=format',
  },
];

export default function TestimonialsSection() {
  return (
    <section className='bg-white w-full py-12 lg:py-20 px-6 sm:px-12 lg:px-24 xl:px-32 mt-[40px]'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-10 lg:mb-14'
        >
          <h2 className="font-['ClashDisplay',sans-serif] font-bold text-[#1f2937] text-2xl lg:text-4xl leading-tight mb-3">
            What Our Users Say
          </h2>
          <p className="font-['Avenir',sans-serif] text-[#4b5563] text-base lg:text-xl leading-7">
            Real stories from real savers
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
