import { Box, useToast, Text, CloseButton } from '@chakra-ui/react'
import Header from '../components/Header'
import Home from './sections/Home'
import Brands from '../components/Brands'
import AboutUs from './sections/AboutUs'
import Prices from './sections/Prices'
import ContactPage from './sections/Contact'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { HamburgerMenu } from '../components/HamburgerMenu'
import { WALPI } from '../constants/SALONS'

type ToastType = {
  title: string
  content: JSX.Element
}

interface CustomToastProps {
  title: string
  content: JSX.Element
  onClose: () => void // Function to handle close
}

const CustomToast = ({ title, content, onClose }: CustomToastProps) => {
  return (
    <Box
      p={3}
      borderRadius="md"
      boxShadow="md"
      position="relative"
      width={['80%', '80%', '25rem', '30rem']}
      bg={'walpi.backgroundDark'}
    >
      <CloseButton position="absolute" top={2} right={2} onClick={onClose} />
      <Text fontWeight="bold" mb={2}>
        {title}
      </Text>
      {content}
    </Box>
  )
}

const toasts: (ToastType & { salon?: string })[] = [
  {
    salon: WALPI,
    title: '⚠️ Vorrübergehend Geschlossen ⚠️',
    content: (
      <p>
        Liebe Besucher, <br />
        aufgrund eines <b>Wasserschadens</b> hat unser{' '}
        <b>Salon in Walpertskirchen</b> vorrübergehend geschlossen. <br />
        Besuchen sie uns gerne in Haidhausen!
      </p>
    ),
  },
]

const Main = ({
  salon,
  setSalon,
}: {
  salon: string
  setSalon: React.Dispatch<React.SetStateAction<string>>
}) => {
  const toast = useToast()

  useEffect(() => {
    setSalon(salon)
  }, [salon, setSalon])

  useEffect(() => {
    // Introduce a delay using setTimeout
    const delay = 3000 // Wait for 5 seconds (5000 milliseconds)
    const timer = setTimeout(() => {
      // Display each toast from the list
      toasts.forEach((t) => {
        if (t.salon !== salon) {
          return
        }

        toast({
          position: 'bottom-left',
          duration: null, // This will ensure the toast doesn't auto-dismiss
          render: ({ onClose }) => (
            <CustomToast
              title={t.title}
              content={t.content}
              onClose={onClose}
            />
          ),
        })
      })
    }, delay)

    // Cleanup timer when component unmounts or dependencies change
    return () => clearTimeout(timer)
  }, [toast])

  return (
    <>
      <Header salon={salon} />
      <HamburgerMenu salon={salon} />
      <Box bg="walpi.backgroundLight">
        <Home salon={salon} />
        <Brands />
        <AboutUs salon={salon} />
        <Prices salon={salon} />
        <ContactPage salon={salon} />
        <Footer salon={salon} />
      </Box>
    </>
  )
}

export default Main
