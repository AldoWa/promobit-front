import { Box, Card, CardBody, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Cast as CastInterface } from "../types/axiosResponse";

interface CastProps {
  items: CastInterface[];
}

const Cast: React.FC<CastProps> = ({ items }) => {
  return (
    <Box overflowX='auto' overflowY='hidden'
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
          backgroundColor: '#DDDDDD',
          borderRadius: '24px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#ADADAD',
          borderRadius: '24px',
        },
      }}
    >
      <HStack gap='1rem' pb={4}>
        {items.map((item) => (
          <Card minW={191} maxW={191} h={336} boxShadow='0px 4px 4px 0px #00000040;' border='1px solid #00000040' borderRadius='0.25rem' key={item.name}>
            <CardBody padding={2}>
              <Image
                alt={`Actor ${item.name}`}
                src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                w={175}
                h={222}
                fallbackSrc='https://via.placeholder.com/175x222'
              ></Image>
              <VStack align='start' mt={4}>
                <Text color='#131313' size='1.25rem' fontWeight={700} lineHeight='30px'>{ item.name }</Text>
                <Text color='#131313' fontWeight={400} size='1rem' noOfLines={2}>{ item.character }</Text>
              </VStack>
            </CardBody>
          </Card>
        ))}
      </HStack>
    </Box>
  );
};

export default Cast;
