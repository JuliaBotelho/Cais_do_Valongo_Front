import styled from "styled-components";
import logovalongo from "../assets/images/logovalongo.png";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <HeaderLayout>
            <img src={logovalongo}/>
            <ColorBar>
                <BlueBlock/>
                <GreenBlock/>
                <YellowBlock/>
            </ColorBar>
            <MenuBar>
                <Link to={"/"}>
                    <MenuText>O Cais</MenuText>
                </Link>
                <MenuText color="#2F934D">•</MenuText>
                <Link to={"/quizz"}>
                    <MenuText>Quizz</MenuText>
                </Link>
                <MenuText color="#DB9D2E">•</MenuText>
                <Link to={"/login"}>
                    <MenuText>Agende sua Visita Guiada!</MenuText>
                </Link>
            </MenuBar>
        </HeaderLayout>
    )
};

const HeaderLayout = styled.div`
    width:100%;
    height: 75px;
    position: fixed;
    left: 0px;
    top: 0px;
    box-shadow: 0px 4px 4px rgb(0,0,0,0.15);
    z-index: 3;
    img{
        height: 75px;
        position: fixed;
        left: 10px;
        top: 1px;
        z-index: 3;
    }
    a{
        text-decoration:none;
    }
`

const ColorBar = styled.div`
    width:100%;
    height: 20px;
    display: flex;
`

const GreenBlock = styled.div`
    width:30%;
    background-color: #2F934D;
    opacity: 0.8;
`

const BlueBlock = styled.div`
    width:20%;
    background-color: #153134;
    opacity: 0.8;
`

const YellowBlock = styled.div`
    width:50%;
    background-color: #DB9D2E;
    opacity: 0.8;
`

const MenuBar = styled.div`
    padding: 3px 15px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
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