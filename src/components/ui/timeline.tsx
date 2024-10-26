"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useInView, MotionValue } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface TimelineEntry {
  title: string
  content: React.ReactNode
  justify?: "start" | "end"
  icon?: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div className="max-w-4xl  py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Placement process
        </h2>

        <div className="mt-16 relative">
          <motion.div
            className="absolute left-8 top-3 bottom-3 w-0.5 bg-purple-200 dark:bg-gray-700"
            style={{ scaleY, originY: 0 }}
          />

          {data.map((item, index) => (
            <TimelineItem 
              key={index} 
              item={item} 
              progress={scrollYProgress} 
              index={index} 
              total={data.length}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="fixed bottom-8 right-8 p-2 bg-primary text-primary-foreground rounded-full shadow-lg cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
      >
        <ChevronDown size={24} />
      </motion.div>
    </div>
  )
}

const TimelineItem = ({ 
  item, 
  progress, 
  index, 
  total 
}: { 
  item: TimelineEntry
  progress: MotionValue<number>
  index: number
  total: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const start = index / total
  const end = (index + 1) / total
const backgroundShadow = useTransform(
    progress,
    [start, end],
    ["0px", "30px"]
  )

  const backgroundColor = useTransform(
    progress,
    [start, end],
    ["#E9D5FF", "#7C3AED"] // From light purple to dark purple
  )

  return (
    <motion.div
      ref={ref}
      className="mb-16 ml-16 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div
        className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full"
        style={{ backgroundColor }}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      
        style={{ boxShadow: backgroundColor }}

      transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-lg font-medium  text-gray-900 dark:text-white mb-2">{item.title}</h3>
        <div className="prose dark:prose-invert max-w-none">{item.content}</div>
      </motion.div>
    </motion.div>
  )
}