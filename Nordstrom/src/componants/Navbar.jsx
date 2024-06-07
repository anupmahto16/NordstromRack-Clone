import {
  Box,
  Stack,
  Flex,
  Text,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  Spacer,
  Link,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { VscLock } from "react-icons/vsc";
import { buttonhover } from "../styles/styles.js";
import { Link as ReachLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const Navbar = () => {
  const { cartDetail, isAuth, setisAuth } = React.useContext(AppContext);

  const handleImage = () => {
    <Navigate to="/" replace={true} />;
  };
  return (
    <div>
      <Box bg="global.blue" color="white" p={2} fontSize="md">
        <Text>
          Free shipping over $89, or shop online and pick up select orders at a
          Nordstrom Rack or Nordstrom store. <u>Learn More</u>
        </Text>
      </Box>
      <Stack p={7}>
        <Flex align="center" pt={1} pb={5} borderBottom="1px solid #bbb">
          <Link w="8%" to="/" as={ReachLink}>
            <Image
              w="100%"
              src="data:image/png;base64,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"
              onClick={handleImage}
            />
          </Link>

          <Spacer />

          <InputGroup w="50%">
            <InputLeftElement
              pointerEvents="none"
              children={<BsSearch color="#333" />}
            />
            <Input
              type="tel"
              placeholder="Search for products and brands"
              borderRadius="none"
              border="1px solid #bbb"
              focusBorderColor="global.black"
            />
          </InputGroup>
          <Spacer />
          <Button
            visibility={!isAuth ? "hidden" : "visible"}
            onClick={() => {
              setisAuth(false);
            }}
            variant="ghost"
            color="global.blue"
            fontWeight="450"
          >
            Logout
          </Button>
          <Flex align="center" w="10%">
            <Link
              as={ReachLink}
              to="/signin"
              visibility={isAuth ? "hidden" : "visible"}
            >
              <Flex align="center">
                <Text>Sign In</Text> <IoIosArrowDown color="global.black" />
              </Flex>
            </Link>

            <Spacer />

            <Link as={ReachLink} to="/cart">
              <VscLock fontSize="1.6rem" />
            </Link>

            <Text
              fontSize="xs"
              position="relative"
              left={-4}
              top={1}
              _hover={{ cursor: "pointer" }}
            >
              {cartDetail.length}
            </Text>
          </Flex>
        </Flex>
        <SimpleGrid spacing={1} justify="center" pb={0} columns={[3, 3, 5, 11]}>
          <Link
            to="/"
            as={ReachLink}
            style={{ color: "#d61f27" }}
            _hover={buttonhover}
          >
            Clearance
          </Link>
          <Link as={ReachLink} to="/women" _hover={buttonhover}>
            Women
          </Link>
          <Link as={ReachLink} to="/mens" _hover={buttonhover}>
            Men
          </Link>
          <Link as={ReachLink} to="/" _hover={buttonhover}>
            Kids
          </Link>
          <Link as={ReachLink} to="/" _hover={buttonhover}>
            Shoes
          </Link>
          <Link as={ReachLink} to="/" _hover={buttonhover}>
            Activewear
          </Link>
          <Link to="/" _hover={buttonhover}>
            Bags
          </Link>
          <Link as={ReachLink} to="/" _hover={buttonhover}>
            Home
          </Link>
          <Link as={ReachLink} to="/" _hover={buttonhover}>
            Beauty
          </Link>
          <Link as={ReachLink} to="/" _hover={buttonhover}>
            Gifts
          </Link>
          <Link as={ReachLink} color="global.blue" to="/" _hover={buttonhover}>
            Flash Events
          </Link>
        </SimpleGrid>
      </Stack>
    </div>
  );
};

export default Navbar;
