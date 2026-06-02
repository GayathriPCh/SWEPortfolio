import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About Me</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Intro Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div {...fadeInUp} className="flex items-center">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I work at <span className="text-white">Siemens Digital Industries Software (DISW)</span> under
              LCS Capital — part of Siemens' portfolio for developing electrical and electronic (E/E)
              systems used in industries like automotive, aerospace, and industrial machinery.
            </p>
          </motion.div>
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I'm driven by the idea that technology can create meaningful impact at scale — and that the
              best work happens when we're part of teams pushing toward something bigger. I've been
              learning what it takes to build and maintain large, long-lived software: understanding
              tricky bugs, improving reliability, and helping keep complex systems stable as they evolve. 🌱
            </p>
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div {...fadeInUp} className="mb-24 lg:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-8">
            <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
              "I WRITE<br />
              <span className="text-white underline underline-offset-8">MAINTAINABLE CODE</span><br />
              FOR SOFTWARE THAT<br />
              LIVES FOR YEARS."
            </h2>
            <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
              SOFTWARE ENGINEER<br />
              INDIA BASED
            </p>
          </div>
          <figure className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <img
              src="/feels-fast.png"
              alt="Late-night coding — feels fast vs actually fast"
              className="max-w-[220px] w-full h-auto rounded-sm"
              loading="lazy"
            />
            <figcaption className="mt-3 text-[10px] text-gray-600 tracking-widest uppercase">
              Feels fast vs actually fast
            </figcaption>
          </figure>
        </motion.div>

        {/* Interests Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp} className="flex items-center">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I'm especially interested in how engineering tools grow over time and the kinds of
              problems that appear when software lives for many years. I love finding better ways to
              work — whether that's a productivity tool, a process improvement, or just a clever hack
              that makes the day smoother.
            </p>
          </motion.div>
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Outside of work, I enjoy learning about new places in the world, reading world history,
              collecting random space facts, and sketching portrait drawings.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
