import { buttonNotfilled } from "../styles/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  sliderdata1,
  sliderdataClothes,
  AdvtSliderdata,
  smallslider,
  vedioSlider,
} from "../componants/data.jsx";
import {
  Button,
  Heading,
  Stack,
  Center,
  Image,
  Box,
  Text,
  Link,
  Flex,
  Spacer,
  SimpleGrid,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CarouselComponent, {
  Topslider,
  Productbar,
  AdvtSlider,
  Secondslider,
  CommanProductSlider,
} from "../componants/Homepage.Sliders";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
const Home = () => {
  const { isAuth } = useContext(AppContext);
  const Navigate = useNavigate();
  const handlelink = () => {
    Navigate("/signin");
  };
  return (
    <div>
      <Stack p={7} pt={0} spacing={8}>
        <Heading size="lg" color="DarkSlateBlue" fontWeight="400" pb={3}>
          More to Rack, easier and faster.
        </Heading>
        <Center>
          <Button
            _hover={buttonNotfilled}
            bg="none"
            color="global.blue"
            border="1px solid"
            fontWeight="normal"
            borderRadius="20px"
            fontSize="17px"
            w="20%"
            visibility={isAuth ? "hidden" : "visible"}
            onClick={handlelink}
          >
            Sign In or Create an Account
          </Button>
        </Center>
        <Stack>
          <Image
             w="180%"
             h="281px"
            src="https://n.nordstrommedia.com/it/63bc4d17-2345-4107-914d-2c9cb595c8b5.png?h=275&w=750"
            alt="add"
          />
          <Box
            textAlign="left"
            pos="absolute"
            top={350}
            right={100}
            color="white"
          >
            {/* <Heading size="md">Online & In Stores</Heading>
            <Text fontSize="sm">
              Sandals, dresses, tops & more featuring Vince, Madewell & adidas.
            </Text>
            <Flex fontSize="sm" textDecoration="underline" gap={3}>
              <Link>All Clearance</Link>
              <Link>Women's Clearance</Link>
              <Link>Men's Clearance</Link>
            </Flex> */}
          </Box>
        </Stack>
        <Topslider sliderdata={sliderdata1} />
        <Productbar />
        <Heading size="lg" color="global.black" fontWeight="450" pb={3}>
          Here Today, Gone in a Flash
        </Heading>
        <AdvtSlider data={AdvtSliderdata} />
        <Secondslider sliderdata={sliderdataClothes} />
        <Heading size="lg" color="global.black" fontWeight="450" pb={3}>
          Active Styles for Every Day
        </Heading>
        <SimpleGrid
          columns={[1, 1, 2, 2]}
          textAlign="left"
          justify="space-between"
        >
          <Box>
            <Image
               w="85%"
               h="85%"
              src="https://t3.ftcdn.net/jpg/05/01/58/18/360_F_501581871_NUh8wkslO5otONW4FRyV4CsI6AQr13q2.jpg"
              alt="shoes"
            />
            <Heading size="md" color="global.black" mt={2} fontWeight="450">
              PUMA, adidas & More
            </Heading>
            <Text>Fresh pairs from $49.97</Text>
            <Flex gap={3}>
              <Link color="global.blue" textDecoration="underline">
                Women's Activewear Sneakers
              </Link>

              <Link color="global.blue" textDecoration="underline">
                Men's Activewear Sneakers
              </Link>
            </Flex>
          </Box>
          <Box>
            <Image
                w="76%"
                h="395px"
              src="https://blissclub.com/cdn/shop/files/Thumbnail_1d327c1f-fd3b-47f4-9487-63e400bd9789.jpg?v=1697295851&width=400"
              alt="clothes"
            />
            <Heading size="md" mt={2} color="global.black" fontWeight="450">
              Z by Zella, 90 Degree by Reflex & More
            </Heading>
            <Text>Workout sets from $15.97.</Text>
            <Flex gap={3}>
              <Link color="global.blue" textDecoration="underline">
                Workout sets
              </Link>
              <Link color="global.blue" textDecoration="underline">
                All Women's Activewear
              </Link>
            </Flex>
          </Box>
        </SimpleGrid>
        <Topslider sliderdata={smallslider} />
        <Heading size="lg" color="global.black" fontWeight="450" pb={3}>
          All the Must-Haves—All at Amazing Prices
        </Heading>

        <Flex textAlign="left" gap={5}>
          <Box key={0}>
            <Image src="https://n.nordstrommedia.com/id/a0a52547-f8b4-4560-9ed0-7dd1fd8d1145.jpeg?h=501&w=536" />
            <Text fontWeight="450" fontSize="14px" color="global.black">
              Shoulder
            </Text>
            <Text fontSize="xs">Marc Jacobs and more.</Text>
            <Flex gap={3}>
              <Link color="global.blue" textDecoration="underline">
                BagsCrossbodiesAll
              </Link>
              <Link color="global.blue" textDecoration="underline">
                Handbags
              </Link>
            </Flex>
          </Box>
          <Box key={1}>
            <Image src="https://n.nordstrommedia.com/id/fcd789dc-a924-4a9c-8abe-838d82056c05.jpeg?h=501&w=536" />
            <Text fontWeight="450" fontSize="14px" color="global.black">
              Makeup from $29
            </Text>
            <Text fontSize="xs">Urban Decay and more.</Text>

            <Link color="global.blue" textDecoration="underline">
              Makeup
            </Link>
          </Box>
          <Box key={2}>
            <Image src="https://n.nordstrommedia.com/id/2fc4010d-dc79-43dd-82e6-aacd5802010f.jpeg?h=501&w=536" />
            <Text fontWeight="450" fontSize="14px" color="global.black">
              Fine Jewelry Up to 50% Off
            </Text>
            <Text fontSize="xs">Bony Levy and more.</Text>
            <Link color="global.blue" textDecoration="underline">
              Fine Jewelry
            </Link>
          </Box>
        </Flex>
        <Heading textAlign="left" fontSize="2xl" fontWeight="450" pt={12}>
          Best-selling items
        </Heading>
        <CommanProductSlider />
        <Stack color="global.black" spacing={8} pt={10}>
          <Box>
            <Heading fontSize="xl" fontWeight="450">
              Rack Your Look
            </Heading>
            <Text>
              Click your favorite photos to shop our Instagram, and use
              #nordstromrack for a chance to be featured!
            </Text>
          </Box>

          <CarouselComponent data={vedioSlider} />
        </Stack>
      </Stack>
    </div>
  );
};

export default Home;
