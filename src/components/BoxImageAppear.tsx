import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import salonWalpi from '../assets/images/SalonWalpi.jpeg'
import salonOst from '../assets/images/SalonOst.jpeg'
import { WALPI } from '../constants/SALONS'

const MotionBox = motion(Box)

interface BoxImageAppearProps {
  buttonText: string
  delay?: number
  reverse?: boolean
  salon: string
}

const BoxImageAppear = ({
  buttonText,
  delay = 0,
  reverse = false,
  salon,
}: BoxImageAppearProps) => {
  const [boxSize, setBoxSize] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const [rows, setRows] = useState(0)
  const [cols, setCols] = useState(0)
  const [finalColWidth, setFinalColWidth] = useState(0)
  const [finalRowHeight, setFinalRowHeight] = useState(0)
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      const rows = Math.ceil(height / boxSize)
      const cols = Math.ceil(width / boxSize)
      const finalColWidth = width - (cols - 1) * boxSize
      const finalRowHeight = height - (rows - 1) * boxSize

      if (window.innerWidth <= 768) {
        setBoxSize(25)
      }

      console.log('width', finalColWidth)
      console.log('height', finalRowHeight)

      setRows(rows)
      setCols(cols)
      setFinalColWidth(finalColWidth)
      setFinalRowHeight(finalRowHeight)
    }
  }, [containerRef, boxSize])

  function isFinalCol(index: number) {
    return index % cols === cols - 1
  }

  function isFinalRow(index: number) {
    return index >= (rows - 1) * cols
  }

  function getRow(index: number) {
    return Math.floor(index / cols)
  }

  function getReverseIndex(index: number) {
    const row = Math.floor(index / cols)
    const col = index % cols
    return row * cols + (cols - 1 - col)
  }

  function isEvenRow(index: number) {
    return getRow(index) % 2 === 0
  }

  function isSmallScreen() {
    return window.innerWidth <= 768
  }

  const boxVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 0 },
  }

  return (
    <MotionBox
      position="relative"
      ref={containerRef}
      backgroundImage={salon === WALPI ? salonWalpi : salonOst}
      filter="grayscale(100%)"
      height={isSmallScreen() ? '50vh' : '100vh'}
      width={isSmallScreen() ? '100vw' : '50vw'}
      backgroundSize="cover"
      initial={{ filter: 'grayscale(100%)' }}
      animate={{
        filter: 'grayscale(0%)',
        transition: { delay: delay + 2, duration: 3.5 },
      }}
      onAnimationComplete={() => setIsAnimationComplete(true)}
      _hover={isAnimationComplete ? { cursor: 'pointer', bg: 'black' } : {}}
      css={css`
        &:hover .button {
          background-color: white;
          color: black;
          scale: 1.1;
        }
      `}
      onClick={() => {
        if (isAnimationComplete) {
          navigate(`/${salon}`)
        }
      }}
    >
      {!isAnimationComplete && (
        <>
          {Array.from({ length: rows * cols }).map((_, index) => (
            <MotionBox
              key={index}
              variants={boxVariants}
              bg={'black'}
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 0, x: 0 }}
              transition={{
                delay:
                  delay +
                  (isSmallScreen() ? 0.006 : 0.01) *
                    ((reverse ? isEvenRow(index) : !isEvenRow(index))
                      ? index
                      : getReverseIndex(index)),
                duration: 0.2,
              }}
              width={isFinalCol(index) ? finalColWidth + 'px' : boxSize}
              height={isFinalRow(index) ? finalRowHeight : boxSize}
              position="absolute"
              top={Math.floor(index / cols) * boxSize}
              left={(index % cols) * boxSize}
            />
          ))}
        </>
      )}
      {isAnimationComplete && (
        <MotionBox
          className="button"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          bgColor="black"
          color={'white'}
          fontFamily={'Outfit'}
          fontSize={isSmallScreen() ? '1rem' : '1.5rem'}
          p={4}
          cursor="pointer"
          zIndex={10}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {buttonText}
        </MotionBox>
      )}
    </MotionBox>
  )
}

export default BoxImageAppear
