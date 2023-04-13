import styled from "styled-components";

export default function ReservationTypeButton ({bkgimg, typetext}){
    return(
        <TypeButton >
            <img src={bkgimg}/>
            <h3>{typetext}</h3>
        </TypeButton>
    )
}

const TypeButton = styled.div`
    height:150px;
    width:188px;
    margin-right:70px;
    padding: 5px 0px;
    border: 2px solid #DB9D2E;
    border-radius: 5px;
    background-color: rgba(255, 255, 143, 0.35); 
    background-size: cover;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    position:relative;
    h3{
        font-family: 'Forum', cursive;
        font-size: 17px;
        font-weight:400;
        color: #2c2c2e;
        z-index: 2;
    }
    img{
        height:148px;
        width:160px;
        position: absolute;
        top: 12px;
        z-index: 1;
    }
    :hover{
        background-color:rgba(255, 255, 143, 0.15);
        cursor: pointer;
    }
`