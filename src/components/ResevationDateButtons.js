import styled from "styled-components";

export default function ReservationDateButton({day, hour, price}){
    return(
        <DateButton>
            <h3>{day}</h3>
            <h4>{hour}</h4>
            <h5>R${price}</h5>
        </DateButton>
    )
}

const DateButton = styled.div`
    height:55px;
    width:100px;
    margin-right:70px;
    margin-bottom:15px;
    padding: 5px 0px;
    border: 2px solid #DB9D2E;
    border-radius: 5px;
    background-color: rgba(255, 255, 143, 0.35); 
    background-size: cover;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    h3{
        font-family: 'Forum', cursive;
        font-size: 17px;
        font-weight:400;
        color: #2c2c2e;
        z-index: 2;
        margin-bottom:5px;
    }
    h4{
        font-family: 'Forum', cursive;
        font-size: 15px;
        font-weight:400;
        color: #2c2c2e;
        z-index: 2;
        margin-bottom:7px;
    }
    h5{
        font-family: 'Forum', cursive;
        font-size: 14px;
        font-weight:400;
        color: #b25f59;
        z-index: 2;
    }
    :hover{
        background-color:rgba(255, 255, 143, 0.15);
        cursor: pointer;
    }
`