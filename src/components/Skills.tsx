import { motion } from 'framer-motion'

const skills = [
  'Java',
  'Object-Oriented Programming',
  'JUnit',
  'Mockito & JMockit',
  'Capital Systems Integrator',
  'Capital Logic Designer',
  'Apache POI',
  'SAFe Agile SDLC',
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Expertise</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-20"
        >
          SKILLS
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 lg:gap-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-gray-800 pb-4"
              >
                <span className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <img
              src="/coffee-code.png"
              alt="Three cups of coffee on a wooden desk with code overlay"
              className="w-full h-64 lg:h-80 object-cover rounded-sm"
              loading="lazy"
            />
            <figcaption className="mt-3 text-[10px] text-gray-600 tracking-widest uppercase">
              Fueled by coffee · powered by tests
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
