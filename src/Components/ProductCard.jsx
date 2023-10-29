import React from 'react'
import { SlCalender } from 'react-icons/sl'
import { Card, CardBody, CardFooter, Divider, Image, Stack, Heading, Text, ButtonGroup, Button } from '@chakra-ui/react';
import { getBasket } from '../Features/BasketSlice';
import { useDispatch, useSelector } from 'react-redux';
import { UseModalContext } from '../Features/ModalContext'
import { UseLogContext } from '../Features/LogContext'
import toast from 'react-hot-toast';
function ProductCard({ name, description, price, release_date, image_path, product_id }) {
    const products = useSelector((state) => state.ProductReducer.products)
    const dispatch = useDispatch();
    const { setShowModal } = UseModalContext();
    const { isLog } = UseLogContext();
    return (
        <Card maxW='sm' className='p-1 shadow-xl hover:scale-105 duration-300 cursor-pointer' style={{
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 12px 10px 4px"
        }}>
            <CardBody>
                <div className='flex justify-center items-center'>
                    <Image className='h-52'
                        src={`${image_path}`}
                        alt='#/'
                        borderRadius='lg'
                    />
                </div>
                <Stack mt='6' spacing='2'>
                    <Heading size='md'>{name}</Heading>
                    <Text fontSize='sm' className='flex items-center justify-start gap-2 font-semibold'>
                        <SlCalender className='text-xl'></SlCalender> {String(String(release_date).replaceAll("-", "/")).split("/")[2] + "/" + String(String(release_date).replaceAll("-", "/")).split("/")[1] + "/" + String(String(release_date).replaceAll("-", "/")).split("/")[0]}
                    </Text>
                    <Text>
                        {description}
                    </Text>
                    {
                        isLog !== false
                            ?
                            <div className='flex justify-between items-center'>
                                <div className='relative'>
                                    <Text color='blue.600' fontSize='2xl'>
                                        {price}₺
                                    </Text>
                                    <div className='absolute top-4 left-0 w-20 h-1.5 rounded-xl rotate-12 bg-red-500'>

                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <Text color='blue.600' fontSize='2xl'>
                                        {parseInt((price / 100) * 80)}₺
                                    </Text>
                                </div>
                            </div>
                            :
                            <Text color='blue.600' fontSize='2xl'>
                                {price}₺
                            </Text>
                    }
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'
                        onClick={() => {
                            dispatch(getBasket(products[product_id]))
                            setShowModal(true)
                        }
                        }
                    >
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue' onClick={() => {
                        toast.success("Ürün başarıyla sepete eklendi", {
                            duration: 1500
                        })
                        dispatch(getBasket(products[product_id]))
                    }}>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card >
    )
}

export default ProductCard