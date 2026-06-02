import { motion } from 'framer-motion'

const interests = [
  { label: 'World History', detail: 'Reading across cultures and centuries' },
  { label: 'Space Facts', detail: 'Collecting curious bits about the cosmos' },
  { label: 'Portrait Sketching', detail: 'Drawing faces, capturing character' },
  { label: 'Geography', detail: 'Learning about new places in the world' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Speaking() {
  return (
    <section id="interests" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Outside of Work</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          INTERESTS
        </motion.h2>

        <div className="space-y-0">
          {interests.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-gray-800 py-6 md:py-8 px-4 -mx-4"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light">
                  {item.label}
                </h3>
                <span className="text-sm text-gray-500">{item.detail}</span>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
