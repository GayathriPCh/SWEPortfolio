import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const activities = [
  'Secretary, Wallstreet Club — organized workshops and discussions on finance and technology.',
  'Founding member, Wallstreet DAO Club — helped build a student Web3 community and organized blockchain events and workshops.',
  '1st place at Hack-A-Thon 2k24 with a blockchain-based flight ticketing project.',
  'Participated in multiple university hackathons including Impactech Hackathon and Innov-AI-thon, developing AI and blockchain prototypes.',
]

export function Education() {
  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Background</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-gray-800 pt-12 lg:pt-16">
          <motion.div {...fadeInUp} className="lg:col-span-5">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
              KL University
            </h3>
            <p className="text-base lg:text-lg text-gray-400">
              Bachelor of Technology (BTech), Computer Science and Engineering
            </p>
            <p className="text-sm text-gray-600 mt-2">Jul 2022 — Jun 2026</p>
            <p className="text-sm text-gray-500 mt-4">Grade: 9.54 / 10</p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <p className="text-sm text-gray-500 tracking-widest uppercase mb-6">
              Activities & Societies
            </p>
            <ul className="space-y-4 mb-10">
              {activities.map((a) => (
                <li
                  key={a}
                  className="text-sm lg:text-base text-gray-400 leading-relaxed pl-4 relative"
                >
                  <span className="absolute left-0 top-2.5 w-1.5 h-px bg-gray-600" />
                  {a}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-3">
              <figure className="space-y-2">
                <img
                  src="/wallstreet-dao.png"
                  alt="The Wallstreet DAO club at KL University"
                  className="w-full h-32 object-cover rounded-sm"
                  loading="lazy"
                />
                <figcaption className="text-[10px] text-gray-600 tracking-widest uppercase">
                  Wallstreet DAO Club
                </figcaption>
              </figure>
              <figure className="space-y-2">
                <img
                  src="/impactech-poster.jpg"
                  alt="Impactech Hackathon 2k24 poster at KL University"
                  className="w-full h-32 object-cover rounded-sm"
                  loading="lazy"
                />
                <figcaption className="text-[10px] text-gray-600 tracking-widest uppercase">
                  Impactech Hackathon 2k24
                </figcaption>
              </figure>
            </div>
          </motion.div>

        </div>
        <div className="border-t border-gray-800 mt-12 lg:mt-16" />
      </div>
    </section>
  )
}
