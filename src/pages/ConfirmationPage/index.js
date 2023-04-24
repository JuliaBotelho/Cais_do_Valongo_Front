import styled from "styled-components";
import finalimg from "../../assets/images/comemoration.jpeg"
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contextElements/auth";
import axios from "axios";
import { toast } from "react-toastify";

export default function ConfirmationPage (){
    const[userBooking, setUserBooking] = useState(undefined)
    const { userData } = useContext(AuthContext);
    const config = { headers: {"Authorization": `Bearer ${userData.token}`} }

    useEffect(()=>{
        axios.get("http://localhost:4000/booking/reservation",config)
        .then(res =>{
            setUserBooking(res.data)
        })
        .catch(err =>{
            toast('Infelizmente algo deu errado!');
        })
    }, [])

    if(!userBooking){
        return(
            <ConfPage>
                <ConfirmationWrapper>              
                    <h1>Carregando...</h1>
                </ConfirmationWrapper>
            </ConfPage>
        )
    }

    console.log(userBooking)

    const dateString = userBooking.ExcursionDays.day;
    const date = new Date(dateString);
    const days = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const formattedDate = `${days}/${month}`;

    const timeString = userBooking.ExcursionDays.hour;
    const time = new Date(timeString);
    const hours = time.getUTCHours().toString().padStart(2, "0");
    const minutes = time.getUTCMinutes().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
    

    return(
        <ConfPage>
            <ConfirmationWrapper>
                <img src={finalimg}/>
                <h1>Reserva finalizada!</h1>
                <h2>Estamos muito felizes com sua reserva, {userData.name}! Esperamos que aproveite e aprenda muito!</h2>
                <h2>O dia e horário da visitação serão:</h2>
                <h3>{formattedDate}  |  {formattedTime}</h3>
                <>{userBooking.bookingType==="individual"? (
                    <h4>O valor de R$35,00 deverá ser pago ao guia no próprio dia da visitação ❤</h4>
                ):(
                    <h4>O valor de R$300,00 referente a excursão para {userBooking.studentsNumber} alunos deverá ser pago ao guia no próprio dia da visitação ❤</h4>
                )}</>
            </ConfirmationWrapper>
        </ConfPage>
    )
}

const ConfPage = styled.div`
    display:flex;
    justify-content:center;
`

const ConfirmationWrapper = styled.div`
    margin-top: 114px;
    width: 600px ;
    height: 500px;
    padding: 20px 20px;
    border: 4px solid rgba(255, 209, 43, 0.65); 
    border-radius: 8px;
    display:flex;
    flex-direction: column;
    /* align-items: flex-start; */
    justify-content:center;
    position:relative;
    img{
        height:100%;
        width:100%;
        border-radius:8px;
        position: absolute;
        top:0px;
        left:0px;
        z-index:0;
        opacity: 0.2;
    }
    h1{
        font-family: 'Syncopate', sans-serif;
        font-size: 26px;
        font-weight:700;
        color: #2c2c2e;
        z-index: 2;
        margin-bottom:20px;
        z-index:1;
    }
    h2{
        font-family: 'Syncopate', sans-serif;
        font-size: 22px;
        font-weight:400;
        color: #2c2c2e;
        margin-bottom:11px;
        z-index:1;
    }
    h3{
        font-family: 'Syncopate', sans-serif;
        font-size: 20px;
        font-weight:400;
        color: #b25f59;
        text-align:center;
        z-index:1;
        margin-bottom:16px;
        text-align:center;
    }
    h4{
        font-family: 'Forum', cursive;
        font-size: 20px;
        font-weight:400;
        color: #b25f59;
        z-index: 2;
        z-index:1;
    }
`

