import React from 'react';
import { 
    CartArea,
    CartHeader,
    CartIcon,
    CartText,
    ProductsArea,
    ProductItem,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductQuantityArea,
    ProductQtIcon,
    ProductQtText
} from './styled'
import { useSelector, useDispatch } from 'react-redux';
import cartIcon from './cart-icon.svg';

export default () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);

    const handleProductChange = (key, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload:{key, type}
        });
    }

    return (
        <CartArea>
            <CartHeader>
                <CartIcon src={cartIcon} atl="cart-icon" />
                <CartText>Meu Carrinho ({products.length})</CartText>
            </CartHeader>
            <ProductsArea>
                {products.map((item, index)=>(
                    <ProductItem key={index}>
                        <ProductPhoto src={`assets/${item.image}`} />
                        <ProductInfoArea>
                            <ProductName>{item.name}</ProductName>
                            <ProductPrice>R$ {item.price * item.qt}</ProductPrice>
                        </ProductInfoArea>
                        <ProductQuantityArea>
                            <ProductQtIcon onClick={()=>handleProductChange(index, '-')}>-</ProductQtIcon>
                            <ProductQtText>{item.qt}</ProductQtText>
                            <ProductQtIcon onClick={()=>handleProductChange(index, '+')} >+</ProductQtIcon>
                        </ProductQuantityArea>
                    </ProductItem>
                ))}
                
            </ProductsArea>
        </CartArea>
    );
}