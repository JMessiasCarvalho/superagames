import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    Container,
    Header,
    ShoppingArea,
    Title,
    ProductsArea,
    ProductList,
    CartArea
} from './AppStyled';

import productsData from './products.json';

import ProductItem from './components/ProductItem';
import Cart from './components/Cart';

export default () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        setProducts(productsData);
    }

    useEffect(()=>{
        getProducts();
    },[products])


    return (
        <Container>
            <Header>
                <Title><h1>SuperaGames</h1></Title>
            </Header>
            <ShoppingArea>
                <ProductsArea>
                    <ProductList>
                        {products.map((item, index)=>(
                            <ProductItem 
                                key={index}
                                data={item}
                            />
                        ))}
                    </ProductList>
                </ProductsArea>
                <CartArea><Cart /></CartArea>
            </ShoppingArea>
        </Container>
    );
}