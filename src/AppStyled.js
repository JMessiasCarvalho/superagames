import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
`;
export const Header = styled.div`
    margin:0 20px;
`;

export const Title = styled.div`
    color:#006ABA;
`;
export const ShoppingArea = styled.div`
    display:flex;
    background-color: #eee;
`;

export const ProductsArea = styled.div`
    flex:1;
    margin: 20px;
`;
export const ProductList = styled.div`
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    grid-gap:15px;
`;

export const CartArea = styled.div`
    width: 300px;
    height: auto;
    margin: 20px;
    background-color:#FFF;
    border-radius:5px;
    box-shadow:0px 3px 6px rgba(0, 0, 0, 0.16);
    color:#006ABA;
`;