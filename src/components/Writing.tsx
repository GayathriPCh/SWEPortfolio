import { motion } from 'framer-motion'
import servicenowLogo from '@/assets/servicenow.png'
import awsLogo from '@/assets/aws.png'


const certifications = [
  {
    title: 'ServiceNow Certified System Administrator (CSA)',
    issuer: 'ServiceNow',
    year: 'Aug 2025',
    link: 'https://www.credly.com/badges/e4a4680e-89d9-4c87-bf78-af241101a6cd/linked_in_profile',
    logo: servicenowLogo,
  },
  {
    title: 'Expedite — Skills for Industry: Industry Foundations',
    issuer: 'Siemens Digital Industries Software',
    year: 'Mar 2026',
    link: 'https://www.credly.com/badges/f5a9028d-a42f-4a6d-bc78-ad121c6ceac6/linked_in_profile',
    logo: 'https://cdn.simpleicons.org/siemens/009999',
  },
  {
    title: 'Expedite — Skills for Industry: EDA Explained',
    issuer: 'Siemens Digital Industries Software',
    year: 'Mar 2026',
    link: 'https://www.credly.com/badges/3272d658-1e5d-4112-b0ec-f97718bc7bfc/linked_in_profile',
    logo: 'https://cdn.simpleicons.org/siemens/009999',
  },
  {
    title: 'MongoDB Associate Developer',
    issuer: 'MongoDB',
    year: 'Jul 2024',
    link: 'https://www.credly.com/badges/b662ef06-9909-445e-808d-0a55bf5c1eee/linked_in_profile',
    logo: 'https://cdn.simpleicons.org/mongodb/47A248',
  },
  {
    title: 'Red Hat Certified Enterprise Application Developer',
    issuer: 'Red Hat',
    year: 'Jun 2024',
    link: 'https://www.credly.com/badges/d93a14d2-c3cd-4135-b788-d8986a7f55b4/linked_in_profile',
    logo: 'https://cdn.simpleicons.org/redhat/EE0000',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    year: 'May 2024',
    link: 'https://www.credly.com/badges/3a459073-7ba8-4ede-96a8-677cabe713fa/public_url',
    logo: awsLogo,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Writing() {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Global Credentials</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          CERTIFICATIONS
        </motion.h2>

        <div className="space-y-0">
          {certifications.map((c, index) => (
            <motion.a
              key={c.title}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="block border-t border-gray-800 py-6 md:py-8 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <div className="flex items-center gap-5 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-sm bg-white/5 border border-gray-800 flex items-center justify-center p-2">
                  <img
                    src={c.logo}
                    alt={`${c.issuer} logo`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                  <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light group-hover:text-gray-300 transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 md:mt-2">
                      {c.issuer}
                    </p>
                  </div>
                  <span className="text-sm text-gray-600 whitespace-nowrap">{c.year}</span>
                </div>
              </div>
            </motion.a>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
