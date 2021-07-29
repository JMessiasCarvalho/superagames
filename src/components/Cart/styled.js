import styled from 'styled-components';

export const CartArea = styled.div``;
export const CartHeader = styled.div`
    background-color:#045996;
    display:flex;
    align-items:center;
    height:50px;
    width:100%;
    color:#FFF;
    margin-bottom:10px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
`;
export const CartIcon = styled.img`
    width:28px;
    margin: 0 10px;
`;
export const CartText = styled.div`
    font-weight:bold;
`;

export const ProductsArea = styled.div``;
export const ProductItem = styled.div`
    display:flex;
    margin:10px;
`;
export const ProductPhoto = styled.img`
    width:65px;
    height:auto;
    border-radius:10px;
`;
export const ProductInfoArea = styled.div`
    flex:1;
    margin-left:10px;
`;
export const ProductName = styled.div`
    font-size;15px;
    font-weight:bold;
`;
export const ProductPrice = styled.div`
    font-size:13px;
`;
export const ProductQuantityArea = styled.div`
    display:flex;
    align-items:center;
`;
export const ProductQtIcon = styled.div`
    background-color: #045996;
    color:#FFF;
    width:28px;
    height:28px;
    border-radius:15px;
    display:flex;
    line-height:23px;
    justify-content:center;
    font-size:26px;
    cursor:pointer;
`;
export const ProductQtText = styled.div`
    font-size:13px;
    font-weight:bold;
    margin:0px 5px;
`;

export const ResumeTotalArea = styled.div`
    display:flex;
    flex-direction:column;
    margin:10px;
`;
export const ResumeTotalDivision = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-bottom:1px solid #e8f4fc;
    margin-bottom:5px;
`;
export const ResumeText = styled.div`
    font-size:15px;
    font-weight:bold;
`;
export const ResumeValue = styled.div`
    font-size:13px;
`;