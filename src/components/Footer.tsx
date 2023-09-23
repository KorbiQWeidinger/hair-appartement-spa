import { Box, Text, Center, Link } from '@chakra-ui/react'

function Footer({
  salon,
  showImpressumLink = true,
}: {
  salon: string
  showImpressumLink?: boolean
}) {
  return (
    <Box bg="black" color="walpi.backgroundDark" p={4} width={'100%'}>
      <Center flexDirection="column">
        <Text textAlign="center">Wir freuen uns auf Ihren Besuch!</Text>
        <Text textAlign="center">Ihr HairAppartement Stefan & Nina Duschl</Text>
        <Text textAlign="center">
          © HairAppartement Friseursalon 2005–2023
          {showImpressumLink && (
            <>
              {' |'}
              <Link href={`${salon}/impressum`} color="inherit" ml={1} mr={1}>
                Impressum & Datenschutz
              </Link>
            </>
          )}
        </Text>
      </Center>
    </Box>
  )
}

export default Footer
