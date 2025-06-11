'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function FadeInWhenVisible({ children }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.15 }) // triggerOnce убрали

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        hidden: { opacity: 0, y: 30, transition: { duration: 0.3 } },
      }}
    >
      {children}
    </motion.div>
  )
}