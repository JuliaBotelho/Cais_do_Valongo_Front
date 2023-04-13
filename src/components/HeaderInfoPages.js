import styled from "styled-components";

export default function HeaderInfoPages (){
    return(
        <InfoHeader>
            <MenuText>A História do Cais</MenuText>
            <MenuText color="#439d5e">|</MenuText>
            <MenuText>As pedras pisadas do Cais</MenuText>
        </InfoHeader>
    )
}

const InfoHeader = styled.div`
    width:100%;
    height: 45px;
    position: fixed;
    left: 0px;
    top: 75px;
    box-shadow: 0px 4px 4px rgb(0,0,0,0.15);
    z-index: 3;
    display:flex;
    align-items:center;
    justify-content:center;
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