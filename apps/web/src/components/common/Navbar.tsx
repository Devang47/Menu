import React, { useState } from 'react'
import LoadingIcon from '~/icons/LoadingIcon'
import Logo from '~/icons/Logo'
import NavIcon from '~/icons/NavIcon'

import { motion } from 'framer-motion'
import CrossIcon from '~/icons/CrossIcon'
import clsx from 'clsx'

function Navbar() {
  const [isOpen, seIsOpen] = useState(false)

  return (
    <nav className="">
      <div className="fixed top-0 left-0 w-full py-6 px-8 bg-dark-2/80 z-10 flex items-center justify-between focus:border focus:border-light-4 ">
        <button
          onClick={() => seIsOpen(true)}
          className="logo py-4 px-3 focus:border rounded-lg"
        >
          <NavIcon />
        </button>

        <div className="">
          <LoadingIcon className="w-5 h-5" />
        </div>
      </div>

      <motion.div
        variants={{
          open: {
            opacity: 1,
            pointerEvents: 'auto'
          },
          closed: { opacity: 0, pointerEvents: 'none' }
        }}
        initial={'open'}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.4,
          easings: 'easeInQuad'
        }}
        className="fixed top-0 left-0 bg-dark-2/80 text-center w-full h-screen z-20"
      >
        <div className="flex items-center justify-between px-8 py-7">
          <Logo />

          <button
            onClick={() => seIsOpen(false)}
            className="p-3 focus:border rounded-lg"
          >
            <CrossIcon />
          </button>
        </div>

        <div className="flex flex-col items-start justify-center md:h-10 mt-32 text-3xl px-6 gap-8">
          {new Array('Home', 'Contact', 'Report bug', 'Sign out').map(
            (e, i) => (
              <motion.button
                variants={{
                  closed: { opacity: 0 },
                  open: { opacity: 1, y: [20, 0] }
                }}
                onClick={() => seIsOpen(false)}
                animate={isOpen ? 'open' : 'closed'}
                transition={{
                  delay: isOpen ? i * 0.12 + 0.23 : 0,
                  duration: 0.2,
                  easings: 'easeInQuad'
                }}
                className={clsx(
                  'w-full text-left py-2 px-2',
                  e === 'Sign out' && 'font-bold'
                )}
              >
                {e}
              </motion.button>
            )
          )}
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar
