import React, { useState, useEffect } from 'react';
import {
    Container,
    Header,
    SearchInput,
    ShoppingArea,
    Title,
    ProductsArea,
    ProductList,
    CartArea,
    SelectArea,
    Text,
    Select
} from './AppStyled';

import productsData from './products.json';

import ProductItem from './components/ProductItem';
import Cart from './components/Cart';

export default () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');

    const getProducts = () => {
        let searchFilter = filterSort().filter((val=>{
            if(searchTerm == "") {
                return val
            }  else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
            }
        }))
        setProducts(searchFilter);
    }

    useEffect(()=>{
        getProducts();
    },[])

    useEffect(()=>{
        getProducts();
    }, [searchTerm, filter])

    const searchingTerm = (e) => {
        setSearchTerm(e.target.value);
    }

    const selectedFilter = (e) => {
        setFilter(e.target.value);
    }

    const filterSort = () => {
        const filterProducts = productsData;
        if(filter == 'alphabetical') {
            filterProducts.sort((a, b)=>{
                if(a.name.toLowerCase() < b.name.toLowerCase()) return -1
                if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
            });
        } else if (filter == 'relevant') {
            filterProducts.sort((a, b)=>{
                if(a.score > b.score) return -1
                if(a.score < b.score) return 1
                return 0;
            }
        )} else if (filter == 'price') {
            filterProducts.sort((a, b)=>{
                if(a.price > b.price) return -1
                if(a.price < b.price) return 1
                return 0;
            }
        )}
        return filterProducts;
    }

    return (
        <Container>
            <Header>
                <Title><h1>SuperaGames</h1></Title>
                <SearchInput 
                    type="text"
                    placeholder={'Pesquisar por...'} 
                    value={searchTerm}
                    onChange={searchingTerm}
                />
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
               <CartArea>
                    <SelectArea>
                        <Text>Ordernar por:</Text>
                        <Select onChange={selectedFilter}>
                            <option value="relevant">Mais Relevante</option>
                            <option value="alphabetical">Ordem Alfabética</option>
                            <option value="price">Preço</option>
                        </Select>
                    </SelectArea>
                   <Cart />
                </CartArea>
            </ShoppingArea>
        </Container>
    );
}