import Layout from '@/components/layout/Layout';
import { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Alert, Box, Heading, Img, Link, Stack, StackDivider, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { ImQuotesLeft } from 'react-icons/im';
const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), {
  ssr: false,
});

const PageHeading = ({ title }: { title: string }) => (
  <Heading
    as="h1"
    fontSize={['2rem', '2rem', '2.3rem', '2.6rem']}
    lineHeight="1.4"
    fontWeight="bold"
    textAlign="center"
  >
    {title}
  </Heading>
);

const Statement = ({ words }: { words: string }) => (
  <Box textAlign={'center'}>
    <Text fontSize="large">{words}</Text>
  </Box>
);

const EventDateBox = ({ isPawarta }: { isPawarta?: boolean }) => (
  <Stack
    align={'center'}
    justify={'center'}
    direction={'row'}
    divider={<StackDivider borderColor="gray.200" />}
    w="100%"
  >
    <Box textAlign={'center'} w={'50%'}>
      <Box mb={'1rem'}>
        <Text fontSize="xl" fontWeight="bold">
          Dhaup Suci
        </Text>
        <Text>15.00 WIB</Text>
        <Text>Gereja Kristen Jawi Wetan</Text>
        <Text>Probolinggo</Text>
      </Box>
      <Link
        flex={1}
        py={1}
        px={10}
        fontSize={'md'}
        rounded={'full'}
        bg={'primary'}
        color={'white'}
        _hover={{
          bg: 'secondary',
          color: 'black',
        }}
        _focus={{
          bg: 'secondary',
          color: 'black',
        }}
        href="https://goo.gl/maps/sWB7wZ6TGnx1RTkJ6"
        isExternal
      >
        PETA
      </Link>
    </Box>
    {!isPawarta && (
      <Box textAlign={'center'} w={'50%'}>
        <Box mb={'1rem'}>
          <Text fontSize="xl" fontWeight="bold">
            Mangayu Bagya
          </Text>
          <Text>17.00 WIB - 20.00 WIB</Text>
          <Text>Garden City Resto</Text>
          <Text>Sebelah Terminal Bus - Probolinggo</Text>
        </Box>

        <Link
          flex={1}
          py={1}
          px={10}
          fontSize={'md'}
          rounded={'full'}
          bg={'primary'}
          color={'white'}
          _hover={{
            bg: 'secondary',
            color: 'black',
          }}
          _focus={{
            bg: 'secondary',
            color: 'black',
          }}
          href="https://goo.gl/maps/h7vz6yV49LvFQxo57"
          isExternal
        >
          PETA
        </Link>
      </Box>
    )}
  </Stack>
);

const MainWedding = ({ isPawarta }: { isPawarta?: boolean }): JSX.Element => {
  const OpeningStatement = isPawarta
    ? 'Puji lan panuwun syukur, salah satunggaling prastawa ingkang mirunggan ing gesang kula sami inggih punika gesang ing salebeting neningkahan. Kanthi andhap asoring manah, kula sami nyuwun lumunturing samodra pangaksami, awit kula mboten saged ngaturi rawuhipun panjenengan ing peneguhan nenikahan anak kula karono pandemi Covid-19'
    : 'Nuwun wiyosipun manawi Gusti Ingkang Maha Agung amarengaken saha paring kalodhangan ing samudayanipun, kula sanget angajeng-ajeng rawuh panjenengan ing syukuran tuwin pawiwahan dhauping sri penganten anak kula:';

  const CloseStatement = isPawarta
    ? 'Pramila mugi keparenga panjenengan nyerat donga lan pangestu minangkan pangayubagya dhateng kula sami, matur nuwun.'
    : 'Wasana awit saking rawuh panjenengan, keparenga kula sagotrah angaturaken genging panuwun ingkang tanpa upami.';
  return (
    <Layout title="💒 Pawiwahan Yunita & Teofilus" maxW={'2xl'}>
      <Stack spacing={8} w="100%" align="center">
        {isPawarta && (
          <Alert status="success" variant="subtle">
            Kami tidak menyelenggarakan acara resepsi yang bersifat publik.
          </Alert>
        )}

        <PageHeading title="Pawiwahan" />
        <Box>
          <Img
            src="https://firebasestorage.googleapis.com/v0/b/teofiluscandra-mws.appspot.com/o/pawiwahan-webbanner.jpeg?alt=media&token=55f0a1f3-70d9-41df-90a2-3283aca6e734"
            size="100%"
            rounded="1rem"
            loading="eager"
            tabIndex={0}
          />
          <Text fontSize="xs" mt={2} textAlign="center" opacity="0.6">
            Puri Lanang - Sibang Kaja
          </Text>
        </Box>
        <Statement words={OpeningStatement} />

        <Stack px={8} spacing={{ base: 4, md: 6 }} align={'center'} direction={'column'}>
          <Box textAlign={'center'}>
            <Img
              borderRadius="full"
              display="inline-block"
              boxSize="100px"
              src="https://firebasestorage.googleapis.com/v0/b/teofiluscandra-mws.appspot.com/o/yunita.jpeg?alt=media&token=6d2af5ce-eb01-4981-b0bb-6de132f99d27"
              alt="Yunita"
            />
            <Text
              fontStyle="italic"
              fontSize={{ base: '2xl', md: '3xl' }}
              textAlign={'center'}
              maxW={'3xl'}
              fontWeight="bold"
            >
              Yunita Hardiyanti Putri
            </Text>
            <Text fontSize={'sm'}>Putri saking Bapak Bambang Trihardjono & Ibu Putri Tjemagawati</Text>
          </Box>
          <Text>Kaliyan</Text>
          <Box textAlign={'center'}>
            <Img
              borderRadius="full"
              display="inline-block"
              boxSize="100px"
              src="https://firebasestorage.googleapis.com/v0/b/teofiluscandra-mws.appspot.com/o/teofilus.jpeg?alt=media&token=a44087b7-82d1-432a-a128-eae6e5c22c4c"
              alt="Teofilus Candra"
            />
            <Text
              fontStyle="italic"
              fontSize={{ base: '2xl', md: '3xl' }}
              textAlign={'center'}
              maxW={'3xl'}
              fontWeight="bold"
            >
              Teofilus Candra
            </Text>
            <Text fontSize={'sm'}>Putra saking Bapak Tony Yudiharto & Ibu Ludiya Darmiyati</Text>
          </Box>
        </Stack>

        <Box textAlign={'center'}>
          <Text fontSize="3xl" fontWeight="bold">
            Setu Kliwon, 03 Juli 2021
          </Text>
        </Box>

        <EventDateBox isPawarta={isPawarta} />

        <Statement words={CloseStatement} />

        <Box textAlign={'center'}>
          <Box as={ImQuotesLeft} color="secondary" fontSize="xl" />
          <Text mt="3" fontSize="xl" fontWeight="bold" maxW="30rem">
            Mulane wong lanang bakal ninggal bapa-biyunge lan rumaket marang bojone, sarta sakarone iku bakal dadi
            daging siji.
          </Text>
          <Text fontSize={'sm'} color={'gray.500'}>
            Purwaning Dumadi 2: 24
          </Text>
        </Box>

        <Carousel
          plugins={[
            'infinite',
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              },
            },
          ]}
          animationSpeed={1000}
        >
          <img
            src={
              'https://firebasestorage.googleapis.com/v0/b/teofiluscandra-mws.appspot.com/o/banner-1.jpeg?alt=media&token=679020f5-a9be-4389-9ece-bbe69bc18de8'
            }
          />
          <img
            src={
              'https://firebasestorage.googleapis.com/v0/b/teofiluscandra-mws.appspot.com/o/banner-2.jpeg?alt=media&token=df0dd25f-5a7f-4ffb-b924-e785ac144fa2'
            }
          />
          <img
            src={
              'https://firebasestorage.googleapis.com/v0/b/teofiluscandra-mws.appspot.com/o/banner-3.jpeg?alt=media&token=8b1e0171-3522-4872-b70f-8ca0fb233238'
            }
          />
        </Carousel>
      </Stack>
    </Layout>
  );
};

export default MainWedding;
