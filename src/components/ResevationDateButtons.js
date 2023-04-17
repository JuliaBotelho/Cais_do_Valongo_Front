import styled from "styled-components";

export default function ReservationDateButton({day, hour, reservationType, dateId, setDateId, available}){
    const dateString = day;
    const date = new Date(dateString);
    const days = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const formattedDate = `${days}/${month}`;

    const timeString = hour;
    const time = new Date(timeString);
    const hours = time.getUTCHours().toString().padStart(2, "0");
    const minutes = time.getUTCMinutes().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;

    return(
        <>{available?(
            <DateButton onClick={() => setDateId(dateId)}>
                <h3>{formattedDate}</h3>
                <h4>{formattedTime}</h4>
                <>
                {reservationType===1?(<h5>R$35,00</h5>):(<h5>R$300,00</h5>)}
                </>
           </DateButton>
        ):(
            <DateButtonDisabled >
                <h3>{formattedDate}</h3>
                <h4>{formattedTime}</h4>
                <>
                {reservationType===1?(<h5>R$35,00</h5>):(<h5>R$300,00</h5>)}
                </>
           </DateButtonDisabled>
        )}</>
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

const DateButtonDisabled = styled.div`
    height:55px;
    width:100px;
    margin-right:70px;
    margin-bottom:15px;
    padding: 5px 0px;
    border: 2px solid #b25f59;
    border-radius: 5px;
    background-color: rgba(178, 95, 89, 0.35); 
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
`