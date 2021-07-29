import React, { useState } from 'react';
import { 
    Container,
    ProductPhotoArea,
    ProductPhoto,
    ProductInfoArea,
    ProductTitle,
    ProductPrice,
    AddCartButton
} from './styled';
import { useDispatch  } from 'react-redux';

export default ({data}) => {
    const dispatch = useDispatch();
    const [qt, setQt] = useState(1);

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_PRODUCT',
            payload:{data, qt}
        });
    }


    return (
        <Container>
            <ProductPhotoArea>
                <ProductPhoto src={`assets/${data.image}`} />
            </ProductPhotoArea>
            <ProductInfoArea>
                <ProductTitle>
                    {data.name}
                </ProductTitle>
                <ProductPrice>
                    R$ {data.price.toFixed(2)}
                </ProductPrice>
            </ProductInfoArea>
            <AddCartButton onClick={handleAddToCart} >Adicionar ao Carrinho</AddCartButton>
        </Container>
    );
    
}