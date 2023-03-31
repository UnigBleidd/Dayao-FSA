import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { useLocalStorage } from 'usehooks-ts'
import initialProducts from "./data";
import { useEffect, useState } from "react";

import {
  ChakraProvider,
  AbsoluteCenter,
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
  Grid,

} from '@chakra-ui/react';
import { AddIcon, MinusIcon,} from '@chakra-ui/icons';









function App() {
  let [cart, setCart] = useLocalStorage('cart', []) 
  let [products, setProducts] = useState(initialProducts)
  
  function addToCart(product){
    const isItemExisting = cart.filter((p) => p.id === product.id).length !== 0 ? true : false;    
    if (!isItemExisting) { // adding a new item to cart
      setCart([...cart, {
        ...product,
        qty: 1
      }])
    }
    else { // update existing item to cart
      setCart(
        cart.map((p) => {
          if (p.id === product.id) {
            return {
              ...p,
              qty: p.qty + 1
            } 
          }
          else {
            return p
          }
        })
      )
    }
  }

  

  useEffect(() => {    
    if (cart.length === 0 && document.getElementById('cart').classList.contains('active')) {
        document.getElementById('cart').classList.toggle('active')
    }
  }, [cart])


  return (

    <ChakraProvider>
      <title>UI/UX Shopping Cart</title>
      <Navbar cart={cart}/>
      <Cart cart={cart} setCart={setCart} />
      
        

      <Box textAlign="center" fontSize="xl"   bgImage="url('https://i.ibb.co/WHpm29F/bg-Landing.jpg')">
    
      
        <Grid templateColumns='repeat(5, 1fr)' gap={10} p='10'>
          
        {products.map(product => {
        return (

        
        <Card maxW='sm' maxH='sm' borderRadius='lg' key={product.id} my="10px" minH='sm' >
            <CardBody bg="blue.900">
              <Box>
              <Image src={product.imgPath} borderRadius='lg' mb={'5'} minH={'150'} maxH={'150'} minW={'230'} maxW={'230'}/>
              </Box>
              <Divider borderColor={'white'}/>
              <Stack mt='1' spacing='3' mb='5'>
                <Heading size='md' mt={'2'} textColor={'white'}> {product.name} </Heading>
                <Text fontSize={15} textColor={'white'}>
                  {product.category}
                </Text>
                <Text textColor={'white'} fontSize='2xl'>
                  Php {product.price.toFixed(2)}
                </Text>
              </Stack> 

            <Divider borderColor={'white'}/>
              
              <ButtonGroup mt='5'>
                <Button bg={'#2C7A7B'} rightIcon={<AddIcon />} onClick={() => addToCart(product)} v> 
                  Add To Cart {product.qty}
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
          )
          })}

        </Grid> 
        </Box>

    </ChakraProvider>

    
  );
}

export default App;
