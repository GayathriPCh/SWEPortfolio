import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero-image.jpg"
          alt="Silhouette of a sports car in the dark"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end md:items-center pb-32 md:pb-0 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="font-display text-white/70 text-2xl sm:text-3xl md:text-4xl mb-2 md:mb-4 tracking-wide">
              HI, I'M
            </p>
            <h1 className="font-display leading-none tracking-tighter text-[14vw] sm:text-[11vw] md:text-hero">
              <span className="block text-white">GAYATHRI</span>
              <span className="block text-white">PAREPALLI</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-white/80 max-w-xl leading-relaxed"
            >
              I write maintainable code. Software Engineer at Siemens DISW, building tools for the automotive E/E systems domain.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
