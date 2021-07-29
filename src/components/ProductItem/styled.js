import styled from 'styled-components';

export const Container = styled.div`
    background-color:#FFF;
    border-radius:5px;
    box-shadow:0px 3px 6px rgba(0, 0, 0, 0.16);
    padding:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    color:#006ABA;
    position:relative;
`;

export const Score = styled.div`
    position:absolute;
    top:0;
    left:0;
    background-color:#045996;
    color:#FFF;
    padding:5px 10px;
`;

export const ProductPhotoArea = styled.div``;

export const ProductPhoto = styled.img`
    width:100%;
`;
export const ProductInfoArea = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin: 8px 0;
`;
export const ProductTitle = styled.div`
    font-size:16px;
`;
export const ProductPrice = styled.div`
    font-size:18px;
    font-weight:bold;
`;
export const AddCartButton = styled.button`
    border:0;
    background-color: #045996;
    box-shadow:4px 5px 0px rgba(0, 0, 0, 0.16);
    color:#FFF;
    font-weight:bold;
    padding: 5px 10px;
    border-radius:5px;
    cursor:pointer;
    margin-bottom:10px;
`;