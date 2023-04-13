import styled from "styled-components";
import finalimg from "../../assets/images/comemoration.jpeg"

export default function ConfirmationPage (){
    return(
        <ConfPage>
            <ConfirmationWrapper>
                <img src={finalimg}/>
                <h1>Reserva finalizada!</h1>
                <h2>Estamos muito felizes com sua reserva! Esperamos que aproveite e aprenda muito!</h2>
                <h2>O dia e horário da visitação serão:</h2>
                <h3>22/02 09:00</h3>
                <h4>O valor X deverá ser pago no próprio dia da visitação ao guia ♡</h4>
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
    align-items: flex-start;
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
        margin-bottom:9px;
        z-index:1;
    }
    h3{
        font-family: 'Syncopate', sans-serif;
        font-size: 20px;
        font-weight:400;
        color: #b25f59;
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