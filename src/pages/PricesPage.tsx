import { Box, Text, Center } from '@chakra-ui/react';
import ServiceList from '../components/ServiceList';

function PricesPage() {
    return (
        <Box bg="walpi.backgroundDark" pt={"4rem"} pb={"10rem"}>
            <Center>
                <Text fontSize="3xl" fontWeight="bold" fontFamily={'Outfit'} color={'walpi.backgroundLight'} pb={"3rem"}>
                    Unsere Preise
                </Text>
            </Center>
            <ServiceList />
        </Box>
    );
}

export default PricesPage;
