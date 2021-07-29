import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
`;
export const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:0 20px;
`;

export const Title = styled.div`
    color:#006ABA;
`;

export const SearchInput = styled.input`
    border:1px solid #bbb;
    border-radius:10px;
    width:300px;
    height:45px;
    outline:0;
    padding-left:10px;
    font-size:15px;
}
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
    width: 320px;
`;

export const SelectArea = styled.div`
    margin-top: 20px;
`;

export const Select = styled.select`
    margin-top: 10px;
    border-radius:5px;
    padding:5px 10px;
    border: 1px solid #777;
`;

export const Text = styled.div`
    color: #333;
`;