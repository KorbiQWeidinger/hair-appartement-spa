import { Box, background, useToast, Text, CloseButton } from '@chakra-ui/react'
import Header from './../components/Header'
import HomePage from './../pages/walpi/HomePage'
import Brands from './../components/Brands'
import AboutUsPage from './../pages/AboutUsPage'
import PricesPage from './../pages/PricesPage'
import ContactPage from './../pages/walpi/ContactPage'
import Footer from './../components/Footer'
import { useEffect } from 'react'

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

// Mock list of toasts
const toasts: ToastType[] = [
  {
    title: 'Bitte unterschreibt folgende Petition',
    content: (
      <p>
        Bitte liest es euch durch und unterschtützt Betroffene:{' '}
        <a
          href="https://m.facebook.com/story.php?story_fbid=10161134532361458&id=702036457"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'underline' }}
        >
          Gerechte Regelung zur Corona-Soforthilfe für kleine Betriebe
        </a>{' '}
      </p>
    ),
  },
  // Add more toasts as needed
]

const Walpi = () => {
  const toast = useToast()

  useEffect(() => {
    // Introduce a delay using setTimeout
    const delay = 3000 // Wait for 5 seconds (5000 milliseconds)
    const timer = setTimeout(() => {
      // Display each toast from the list
      toasts.forEach((t) => {
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
  }, [toast, toasts])

  return (
    <>
      <Header />
      <Box bg="walpi.backgroundLight">
        <HomePage />
        <Brands />
        <AboutUsPage />
        <PricesPage />
        <ContactPage />
        <Footer />
      </Box>
    </>
  )
}

export default Walpi
