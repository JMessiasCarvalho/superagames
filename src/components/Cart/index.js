import React, { useState, useEffect } from 'react';
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
    ProductQtText,
    ResumeTotalArea,
    ResumeTotalDivision,
    ResumeText,
    ResumeValue
} from './styled'
import { useSelector, useDispatch } from 'react-redux';
import cartIcon from './cart-icon.svg';

export default () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);

    const [subtotal, setSubtotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [total, setTotal] = useState(0);

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

    return (
        console.log(subtotal),
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
        </CartArea>
    );
}