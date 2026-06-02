import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Siemens Digital Industries Software',
    location: 'Hyderabad, Telangana, India',
    period: 'Jul 2025 — Present',
    description:
      "As a Software Engineering Intern at Siemens EDA, I contribute to Capital — an Electronic Design Automation (EDA) platform used for designing and validating complex electrical systems. Within the Platform Design and Verification team, my work focuses on improving system reliability, diagnosing complex issues in connectivity workflows, and contributing to the development of large-scale engineering software.",
    bullets: [
      'Contribute to Java-based development within the Integrator and topology components of Capital, supporting electrical connectivity and generative design workflows.',
      'Investigate and resolve defects related to connectivity elements, including diagnosing intermittent failures and improving system stability.',
      'Develop and extend unit tests using JUnit, JMockit, and Mockito to ensure regression safety and improve coverage across legacy code paths.',
      'Work within a SAFe Agile SDLC — documenting defects, participating in code reviews, and collaborating with senior engineers on design validation and long-term maintainability.',
      'Migrated legacy spreadsheet functionality from JXL to Apache POI across the codebase, improving maintainability and enabling support for modern Excel formats.',
      'Built a strong understanding of the electronic system design flow in Capital — how design intent is represented, transformed, and validated across the toolchain.',
      'Reduced technical debt in legacy components by introducing better testing practices.',
      'Won internal hackathon recognition for a PowerShell-based automation workflow for QA snapshot and installer builds, reducing manual setup effort and presented in a knowledge-sharing session for team adoption.',
      'Working on customer-logged defects.',
    ],
    skills: ['Java', 'JUnit', 'Mockito', 'JMockit', 'Apache POI', 'SAFe Agile', 'Capital EDA'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Career</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-16"
        >
          WORK<br />EXPERIENCE
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="mb-16 lg:mb-24 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <figure className="overflow-hidden rounded-sm border border-gray-800">
            <img
              src="/siemens-skyline.png"
              alt="Siemens — skyline branding"
              className="w-full h-56 md:h-64 lg:h-72 object-cover"
              loading="lazy"
            />
          </figure>
          <figure className="overflow-hidden rounded-sm border border-gray-800 bg-white">
            <img
              src="/platform-generative-flow.png"
              alt="Capital Platform Generative Flow — inputs, platform, outputs"
              className="w-full h-56 md:h-64 lg:h-72 object-contain"
              loading="lazy"
            />
          </figure>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                <div className="lg:col-span-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400">{exp.company}</p>
                  <p className="text-sm text-gray-600 mt-2">{exp.location}</p>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-500 tracking-widest uppercase">{exp.period}</p>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {exp.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((b) => (
                      <li key={b} className="text-sm text-gray-400 leading-relaxed pl-4 relative">
                        <span className="absolute left-0 top-2 w-1.5 h-px bg-gray-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
