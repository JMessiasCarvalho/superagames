import React, { useState, useEffect } from 'react';
import { 
    CartArea,
    CartHeader,
    CartBody,
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
    ProductQtText,
    ResumeTotalArea,
    ResumeTotalDivision,
    ResumeText,
    ResumeValue
} from './styled'
import { useSelector, useDispatch } from 'react-redux';
import cartIcon from './cart-icon.svg';
import arrowIcon from './arrow-down-icon.svg';

export default () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);

    const [subtotal, setSubtotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [total, setTotal] = useState(0);

    const [showCart, setShowCart] = useState(false);

    useEffect(()=>{
        let subtotal = 0;
        
        products.forEach(item => {
            subtotal += item.qt * item.price
        })

        let shipping =(subtotal >= 250 ? 0 : products.length * 10 );
        setShipping(shipping.toFixed(2));
        setSubtotal(subtotal.toFixed(2));
        setTotal((subtotal + shipping).toFixed(2));

    }, [products])

    const handleProductChange = (key, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload:{key, type}
        });
    }

    const handleCartClick = () => {
        console.log('clicou no carrinho');
        setShowCart(!showCart);
    }

    return (
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src={cartIcon} atl="cart-icon" />
                <CartText>Meu Carrinho ({products.length})</CartText>
                {showCart && 
                    <CartIcon src={arrowIcon} alt="arrow-icon" />
                }
            </CartHeader>
            <CartBody showCart={showCart}>
                <ProductsArea>
                    {products.map((item, index)=>(
                        <ProductItem key={index}>
                            <ProductPhoto src={`assets/${item.image}`} />
                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R$ {(item.price * item.qt).toFixed(2)}</ProductPrice>
                            </ProductInfoArea>
                            <ProductQuantityArea>
                                <ProductQtIcon onClick={()=>handleProductChange(index, '-')}>-</ProductQtIcon>
                                <ProductQtText>{item.qt}</ProductQtText>
                                <ProductQtIcon onClick={()=>handleProductChange(index, '+')} >+</ProductQtIcon>
                            </ProductQuantityArea>
                        </ProductItem>
                    ))}
                </ProductsArea>
                <hr></hr>
                {total > 0 &&
                    <ResumeTotalArea>
                            <ResumeTotalDivision>
                                <ResumeText>Subtotal:</ResumeText>
                                <ResumeValue>R$ {subtotal}</ResumeValue>
                            </ResumeTotalDivision>
                            <ResumeTotalDivision>                 
                                <ResumeText>Frete:</ResumeText>
                                <ResumeValue>R$ {shipping}</ResumeValue>
                            </ResumeTotalDivision>
                            <ResumeTotalDivision>
                                <ResumeText>Total:</ResumeText>
                                <ResumeValue>R$ {total}</ResumeValue>
                            </ResumeTotalDivision>
                    </ResumeTotalArea>
                }
            </CartBody>
        </CartArea>
    );
}