import { motion } from 'framer-motion'

const linkedInPosts: { id: string; label: string; urn?: 'ugcPost' | 'activity' }[] = [
  { id: '7389535648753446912', label: 'Siemens — One Tech Company', urn: 'ugcPost' },
  { id: '7365004297488535555', label: 'DoraHacks AI BUIDL Lab Winner', urn: 'ugcPost' },
  { id: '7316830133535797249', label: 'Team Win Announcement', urn: 'ugcPost' },
  { id: '7295488582171955201', label: 'IIT Bombay — XRPL Hackathon', urn: 'activity' },
  { id: '7278651911707238400', label: 'Omi AI Hackathon', urn: 'activity' },
  { id: '7254097614986452993', label: 'TSOC 2024 — Blockchain on BSV', urn: 'activity' },
  { id: '7385636935983120384', label: 'Amazon ML Challenge 2025', urn: 'activity' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' as const }
}

export function Hackathons() {
  return (
    <section id="hackathons" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Build · Ship · Win</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-16"
        >
          HACKATHONS
        </motion.h2>

        {/* Intro + posters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 lg:mb-28 border-t border-gray-800 pt-12 lg:pt-16">
          <motion.div {...fadeInUp} className="lg:col-span-7 space-y-6">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              From university auditoriums to internal Siemens sprints and global Web3 arenas — hackathons
              are where I learn the fastest. Late-night sprints, ugly first prototypes, and that one
              feature that finally clicks at 3am.
            </p>
            <p className="text-sm lg:text-base text-gray-400 leading-relaxed">
              Highlights: 1st place at Hack-A-Thon 2k24 (blockchain flight ticketing), winner of the
              DoraHacks AI BUIDL Lab on Rootstock, internal Siemens LCS Capital hackathon recognition
              for a PowerShell QA-automation workflow, and prototypes built at Impactech, Innov-AI-thon,
              and Omi AI.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.15 }}
            className="lg:col-span-5 grid grid-cols-2 gap-3"
          >
            <figure className="space-y-2">
              <img
                src="/electrical-hackathon.jpg"
                alt="LCS Capital Electrical Hackathon poster"
                className="w-full h-40 object-cover rounded-sm"
                loading="lazy"
              />
              <figcaption className="text-[10px] text-gray-600 tracking-widest uppercase">
                LCS Capital · Electrical Hackathon
              </figcaption>
            </figure>
            <figure className="space-y-2">
              <img
                src="/dorahacks-win.png"
                alt="AI BUIDL Lab on Rootstock hackathon winners"
                className="w-full h-40 object-cover rounded-sm"
                loading="lazy"
              />
              <figcaption className="text-[10px] text-gray-600 tracking-widest uppercase">
                DoraHacks · AI BUIDL Lab Winner
              </figcaption>
            </figure>
          </motion.div>
        </div>

        {/* LinkedIn embeds */}
        <motion.div {...fadeInUp} className="mb-10">
          <span className="text-sm text-gray-500 tracking-widest uppercase">From LinkedIn</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {linkedInPosts.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.4) }}
              className="border border-gray-800 rounded-sm overflow-hidden bg-[#0d0d0d]"
            >
              <iframe
                src={`https://www.linkedin.com/embed/feed/update/urn:li:${p.urn ?? 'ugcPost'}:${p.id}`}
                title={p.label}
                height={500}
                width="100%"
                frameBorder={0}
                allowFullScreen
                className="block w-full bg-white"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
