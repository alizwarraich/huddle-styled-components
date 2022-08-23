import styled from "styled-components";

export const StyledCard = styled.div`
    display:flex;
    flex-direction: ${({ styling }) => styling % 2 === 0 ? 'row-reverse' : 'row'};
    align-items:center;
    background-color:#fff;
    border-radius:15px;
    box-shadow:0 0 10px rgba(0,0,0,0.15);
    margin:40px 0;
    padding:60px;

    img{
        width:80%;
    }
    &>div{
        flex:1;
    }
    @media(max-width: ${({ theme }) => theme.mobile}){
        flex-direction:column;
    }
`