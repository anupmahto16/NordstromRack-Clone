import { Carousel } from "react-responsive-carousel";
import {
  Stack,
  Image,
  Box,
  Heading,
  Link,
  Text,
  Flex,
  SimpleGrid,
  Spacer,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { GrStar } from "react-icons/gr";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import ProductModal from "../pages/ProductModal";
function Topslider({ sliderdata }) {
 

  return (
    <>
      {" "}
      <Carousel
        infiniteLoop
        showStatus={false}
        autoPlay={true}
        showIndicators={false}
        showThumbs={false}
      >
        {sliderdata.map((ele, i) => {
          return (
            <Stack textAlign="left" key={i}>
              <Image src={ele.image} alt="title" />
              <Box>
                <Heading
                  mt={[-20]}
                  size="lg"
                  color="global.black"
                  fontWeight="450"
                  pb={3}
                >
                  {ele.title}
                </Heading>
                <Text>{ele.text}</Text>
                <Link color="global.blue" textDecoration="underline">
                  Shop know
                </Link>
              </Box>
            </Stack>
          );
        })}
      </Carousel>
    </>
  );
}
function Secondslider({ sliderdata }) {
 
  return (
    <>
      {" "}
      <Carousel
        infiniteLoop
        showStatus={false}
        autoPlay={true}
        showIndicators={false}
        showThumbs={false}
      >
        {sliderdata.map((ele) => {
          return (
            <Stack textAlign="left">
              <Image src={ele.image} alt="title" />
              <Box>
                <Heading
                  mt={[-20]}
                  size="lg"
                  color="global.black"
                  fontWeight="450"
                  pb={3}
                >
                  {ele.title}
                </Heading>
                <Text>{ele.text}</Text>
                <Link color="global.blue" textDecoration="underline">
                  Shop know
                </Link>
              </Box>
            </Stack>
          );
        })}
      </Carousel>
    </>
  );
}

function Productbar() {
  const data = [
   
    {
      image:
        "https://n.nordstrommedia.com/id/sr3/6bb77933-11a3-4b73-a01a-5febcfc9e523.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      title: "T Tahari",
      price: 32.97,
      offer: "108.00",
      rank: 4,
    },
    {
      image:
        "https://n.nordstrommedia.com/id/sr3/9b82428d-0dbd-4727-a014-3c3f11ebd5b8.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      title: "T Tahari",
      price: 39.97,
      offer: "98.00",
      rank: 3,
    },
    {
      image:
        "https://n.nordstrommedia.com/id/sr3/be601138-5322-4643-aaa4-870d4f2b8ce4.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      title: "T Tahari",
      price: 44.99,
      offer: "55.00",
      rank: 4,
    },
    {
      image:
        "https://n.nordstrommedia.com/id/sr3/8b408af1-ef5c-480f-bc1c-796bed0b0af7.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      title: "T Tahari",
      price: 99.01,
      offer: "58.00",
      rank: 2,
    },
    {
      image:
        "https://n.nordstrommedia.com/id/sr3/c296dba6-535d-4ab3-95ea-67e12208f7d0.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      title: "T Tahari",
      price: 219.97,
      offer: "300.00",
      rank: 5,
    },
  ];

  return (
    <>
      <Flex justify="space-between" textAlign="left">
        <Box w="15%">
          <Image
            src="https://n.nordstrommedia.com/id/156718be-867d-4a52-82f5-2bcb68f758ba.jpeg?h=429&w=279"
            alt="add"
          />
          <Link color="global.blue" textDecoration="underline">
            Rank Your Brands
          </Link>
        </Box>
        {data &&
          data.map((item, i) => {
            return (
              <Box w="15%" key={i}>
                <Image src={item.image} alt={item.title} />
                <Text fontSize="xs">{item.title}</Text>
                <Text fontSize="xs" fontWeight="bold">
                  ${item.price}
                </Text>
                <Text fontSize="xs" as="del">
                  ${item.offer}
                </Text>
                <Stars total={item.rank} />
              </Box>
            );
          })}
      </Flex>
    </>
  );
}
function AdvtSlider({ data }) {
  const [page, setpage] = useState(0);

  useEffect(() => {
    // console.log(page);
  }, [page]);
  const handlenext = () => {
    if (page === data.length - 1) {
      setpage(0);
    } else {
      setpage(page + 1);
    }
  };
  const handleprev = () => {
    if (page === 0) {
      setpage(data.length - 1);
    } else {
      setpage(page - 1);
    }
  };
 
  return (
    <>
      <Stack>
        <SimpleGrid columns={[3, 3, 3, 3]} gap={7} textAlign="left">
          {data &&
            data[page].map((item, i) => {
              return (
                <>
                  <Box key={i}>
                    <Image src={item.image} />
                    <Text fontWeight="450" fontSize="14px" color="global.black">
                      {item.title}
                    </Text>
                    <Text fontSize="xs">{item.text}</Text>
                  </Box>
                </>
              );
            })}
        </SimpleGrid>
        <Flex position="relative" top="-250px">
          <Box
            bg="none"
            onClick={handleprev}
            fontSize="45px"
            _hover={{ bg: "rgb(32,33,36,0.7)", color: "white" }}
          >
            <MdOutlineArrowBackIosNew />
          </Box>
          <Spacer />
          <Box
            fontSize="45px"
            onClick={handlenext}
            _hover={{ bg: "rgb(32,33,36,0.7)", color: "white" }}
          >
            <MdOutlineArrowForwardIos />
          </Box>
        </Flex>
      </Stack>
    </>
  );
}
const Stars = ({ total }) => {
  const star = new Array(5).fill(0).map((ele, i) => {
    if (i < total) {
      return <GrStar key={i} color="#00819d" fontSize="17px" />;
    } else {
      return <GrStar key={i + 1} color="#e3e3e3" fontSize="17px" />;
    }
  });
  return (
    <>
      <Flex>{star}</Flex>
    </>
  );
};
export default function CarouselComponent({ data }) {
  return (
    // <div className="carousel-wrapper">

    <Carousel
      infiniteLoop
      showStatus={false}
      autoPlay={true}
      showIndicators={false}
      showThumbs={false}
    >
      {data &&
        data.map((ele, i) => {
          return (
            <SimpleGrid gap={2} w="100%" columns="5">
              <Image src={ele[0].vedio} />
              <Image src={ele[1].vedio} />
              <Image src={ele[2].vedio} />
              <Image src={ele[3].vedio} />
              <Image src={ele[4].vedio} />
            </SimpleGrid>
          );
        })}
    </Carousel>
  );
}

export const CommanProductSlider = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    let arr = [];

    fetch("https://nordstrom-2o0p.onrender.com/women?type=clothes")
      .then((res) => res.json())
      .then((res) => {
        let c = res.length;
        let x = 0;
        while (c > 0) {
          let temp = [];
          for (let i = 0; i < 5; i++) {
            temp.push(res[x]);
            c--;
            x++;
          }
          arr.push(temp);
        }
        setdata(arr);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Carousel
      infiniteLoop
      showStatus={false}
      autoPlay={false}
      showIndicators={false}
      showThumbs={false}
    >
      {data &&
        data.map((ele, i) => {
          return (
            <SimpleGrid gap={2} w="100%" columns="5">
              <Product itemDetail={ele[0]} />
              <Product itemDetail={ele[1]} />
              <Product itemDetail={ele[2]} />
              <Product itemDetail={ele[3]} />
              <Product itemDetail={ele[4]} />
            </SimpleGrid>
          );
        })}
    </Carousel>
  );
};
const Color = () => {
  return (
    <>
      <RadioGroup defaultValue="0">
        <Stack spacing={2} direction="row" align="center">
          <Radio
            size="lg"
            colorScheme="#2d282c"
            bg="#2d282c"
            key="1"
            value="1"
          ></Radio>
          <Radio
            size="lg"
            colorScheme="#005c6d"
            bg="#005c6d"
            key="2"
            value="2"
          ></Radio>
          <Radio
            size="lg"
            colorScheme="#cdb4a6"
            bg="#cdb4a6"
            key="3"
            value="3"
          ></Radio>
          <Radio
            size="lg"
            colorScheme="#a36f53"
            bg="#a36f53"
            key="4"
            value="4"
          ></Radio>
          <Radio
            size="lg"
            colorScheme="#b4afb1"
            bg="#b4afb1"
            key="5"
            value="5"
          ></Radio>
        </Stack>
      </RadioGroup>
    </>
  );
};
const Product = ({ itemDetail }) => {
  return (
    <Stack spacing={1} key={itemDetail.key} textAlign="left">
      <Box overflow="hidden">
        <Image
          src={itemDetail.image[0]}
          alt={itemDetail.title}
          w="100%"
          h="300px"
          transition=" 0.3s"
          _hover={{ transform: "scale(1.1)" }}
        />
      </Box>

      <ProductModal data={itemDetail} />
      <Color />
      <Text>{itemDetail.title}</Text>

      <Flex align="center" gap={2}>
        <Stars total={itemDetail.rating} />
        <Text color="#898989">{`(${Math.floor(Math.random() * 10) + 1})`}</Text>
      </Flex>
      <Text color="#898989">Free Shipping on Orders $89+</Text>
    </Stack>
  );
};

export { Topslider, Productbar, Stars, AdvtSlider, Secondslider };
