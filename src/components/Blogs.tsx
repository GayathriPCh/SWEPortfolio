import { motion } from 'framer-motion'

const blogs = [
  { title: 'Extending Git with Custom CLI Commands in Python', publication: 'Personal', url: 'https://medium.com/@p.gayathri.ch/extending-git-with-custom-cli-commands-in-python-c0314b672d9c' },
  { title: 'Can Your Smartwatch Run Your Code?', publication: 'Personal', url: 'https://medium.com/@p.gayathri.ch/can-your-smartwatch-run-your-code-4fe155d0c1a6' },
  { title: "Dodging Digital Scams: My Experience with Mastercard's Forage Phishing Simulation", publication: 'Personal', url: 'https://medium.com/@p.gayathri.ch/dodging-digital-scams-my-experience-with-mastercards-forage-phishing-simulation-73e4803cbdcb' },
  { title: "Flopped My First Interview — Here's What Went Down at CDK Global", publication: 'Personal', url: 'https://medium.com/@p.gayathri.ch/flopped-my-first-interview-yup-but-heres-what-went-down-at-cdk-global-6d49e2b64b9d' },
  { title: 'Web3 in Fashion: A Digital Revolution Changing the Game', publication: 'Personal', url: 'https://medium.com/@p.gayathri.ch/web3-in-fashion-a-digital-revolution-changing-the-game-2fbc15d0c3ae' },
  { title: 'Build Your Own Certification System Using Soulbound Tokens on Kalp Blockchain', publication: 'Personal', url: 'https://medium.com/@p.gayathri.ch/build-your-own-certification-system-using-soulbound-tokens-on-kalp-blockchain-68862c81c8e8' },
  { title: 'Arweave: The Permaweb Revolution', publication: 'Wallstreet Club', url: 'https://medium.com/@wallstreetclub_83221/arweave-the-permaweb-revolution-5ea72018f911' },
  { title: 'What on Earth is Account Abstraction?', publication: 'Wallstreet Club', url: 'https://medium.com/@wallstreetclub_83221/what-on-earth-is-account-abstraction-043860bdd886' },
  { title: 'Web3 Wallets: Your Gateway to the Decentralized World', publication: 'Wallstreet Club', url: 'https://medium.com/@wallstreetclub_83221/web3-wallets-your-gateway-to-the-decentralized-world-24b8ac32f7e7' },
  { title: 'ETH Burning Explained: The Deflationary Force Behind Ethereum', publication: 'Wallstreet Club', url: 'https://medium.com/@wallstreetclub_83221/eth-burning-explained-the-deflationary-force-behind-ethereum-7d363e115c04' },
  { title: 'Ethereum Gas Fees Explained: Why Transactions Cost What They Do', publication: 'Wallstreet Club', url: 'https://medium.com/@wallstreetclub_83221/ethereum-gas-fees-explained-why-transactions-cost-what-they-do-%EF%B8%8F-bd2e4575034e' },
  { title: 'The Dawn of Web3 Social Media: A New Era for Online Interaction', publication: 'Wallstreet Club', url: 'https://medium.com/@wallstreetclub_83221/the-dawn-of-web3-social-media-a-new-era-for-online-interaction-5a0b1750e8af' },
  { title: 'From Testnet to Mainnet: The Pathway to BUIDLs', publication: 'Wallstreet Club', url: 'https://medium.com/@wallstreetclub_83221/from-testnet-to-mainnet-the-pathway-to-buidls-%EF%B8%8F-78bbf94dbec1' },
  { title: "Next Gen Web: How'd We Get to Web3?", publication: 'Wallstreet Club', url: 'https://medium.com/@wallstreetclub_83221/next-gen-web-howd-we-get-to-web3-ea3a7a5cd680' },
  { title: 'NFTs 101: More Than Just Digital Art', publication: 'Wallstreet Club', url: 'https://medium.com/@wallstreetclub_83221/nfts-101-more-than-just-digital-art-7d620e5ecefc' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' as const }
}

export function Blogs() {
  return (
    <section id="writing" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Medium</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          WRITING
        </motion.h2>

        <div className="space-y-0">
          {blogs.map((b, index) => (
            <motion.a
              key={b.url}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.4) }}
              className="block border-t border-gray-800 py-5 md:py-6 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                <h3 className="text-base md:text-lg lg:text-xl text-white font-light group-hover:text-gray-300 transition-colors">
                  {b.title}
                </h3>
                <span className="text-xs text-gray-600 whitespace-nowrap tracking-widest uppercase">
                  {b.publication}
                </span>
              </div>
            </motion.a>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
