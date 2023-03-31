import {
  ChakraProvider,
  Box,
  Text,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Code,
  Grid,
  theme,
  Flex,
  Spacer,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from '@chakra-ui/react';


function Navbar({ cart }) {    

  function interactCart(){
    if (cart.length > 0) {
      document.getElementById('cart').classList.toggle('active')
    }    
  }

  return (
    <ChakraProvider theme={theme}>

      <Box  bg='gray.700' color='white' p={4} h={20} TextAlign="center" >
          <Flex>
          <Text as='b' fontSize='22px' mt={2}> DAYAO | </Text>  <Code fontSize="xl" mt={2}>Elective 4 - FSA</Code>
          <Spacer />
          <Button bg={'#2C7A7B'}> 
          <i className="fa-solid fa-cart-shopping cursor-pointer" onClick={() => interactCart()}></i>
          <p className="rounded-full py-1 px-2 absolute top-[-10px] right-[-10px] bg-[red] font-[Inter] text-sm text-center">{cart.length}</p>
          </Button>
          </Flex>
      </Box>    
    </ChakraProvider>
)

    
}

export default Navbar