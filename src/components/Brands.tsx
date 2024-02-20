import { Center, Grid, Image, useBreakpointValue } from '@chakra-ui/react'
import Brand1 from '../assets/svg/Artistique.svg'
import Brand2 from '../assets/svg/ASP.svg'
import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const MotionImage = motion(Image)

function Brands() {
  const controls = useAnimation()
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  const isSmallScreen = useBreakpointValue({ base: true, lg: false })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Adjust if needed
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }
  }, [ref, controls])

  useEffect(() => {
    if (visible) {
      controls.start((i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.6 },
      }))
    }
  }, [controls, visible])

  return (
    <Center ref={ref} bg="black" px={isSmallScreen ? 5 : 20} py={8}>
      <Grid
        height="100%"
        width={isSmallScreen ? '100%' : '60%'}
        templateColumns={'repeat(2, 1fr)'}
        gap={4}
      >
        {[Brand1, Brand2].map((brand, index) => (
          <Center width={'100%'}>
            <MotionImage
              key={brand}
              src={brand}
              style={{ width: 'min(85%, 13rem)' }}
              initial={{ opacity: 0, x: -100 }}
              animate={controls}
              custom={index}
            />
          </Center>
        ))}
      </Grid>
    </Center>
  )
}

export default Brands
