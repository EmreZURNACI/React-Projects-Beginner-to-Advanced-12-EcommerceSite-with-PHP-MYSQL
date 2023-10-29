import React, { useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Features/ProductSlice'
import axios from 'axios'
function GetProducts() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.ProductReducer.products)
    const filteredProducts = useSelector((state) => state.ProductReducer.filteredProducts)
    useEffect(() => {
        axios.get("http://localhost/EcommerceSite_Backend/Products.php")
            .then((res) => dispatch(getProducts(res.data)))
            .catch((err) => console.log(err));
    }, [dispatch])
    return (
        <div className='container mx-auto grid grid-cols-4 gap-8'>
            {
                Array.from(filteredProducts).length !== 0
                    ?
                    filteredProducts.map((row, index) => (
                        <ProductCard key={index} name={row.name} description={row.description} price={row.price} release_date={row.releasedate} product_id={index} image_path={row.image} />
                    ))
                    :
                    products.map((row, index) => (
                        <ProductCard key={index} name={row.name} description={row.description} price={row.price} release_date={row.releasedate} product_id={index} image_path={row.image} />
                    ))
            }
        </div>
    )
}

export default GetProducts