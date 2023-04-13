import styled from "styled-components";

export default function HeaderInfoPages (){
    return(
        <InfoHeader>
            <h2>A História do Cais</h2>
            <h2 color="#439d5e">|</h2>
            <h2>As pedras pisadas do Cais</h2>
        </InfoHeader>
    )
}

const InfoHeader = styled.div`
    width:100%;
    height: 75px;
    position: fixed;
    left: 0px;
    top: 75px;
    box-shadow: 0px 4px 4px rgb(0,0,0,0.15);
    z-index: 1;
    display:flex;
    align-items:center
    img{
        height: 75px;
        position: fixed;
        left: 10px;
        top: 1px;
        z-index: 2;
    }
`

const MenuText = styled.h2`
    font-family: 'Syncopate', sans-serif;
    font-size: ${props => props.color? '21px' : '13px'};
    color: ${props => props.color||'#61614e'};
    margin-top: ${props => props.color? '5px' : '8px'};
    margin-right:20px;
    margin-left:20px;    
    :hover{
        color: ${props => props.color? props.color : '#919274'};
        cursor:${props => props.color? 'default' : 'pointer'};
    }
`