import styled from "styled-components";
import individualImg from "../../assets/images/individual.png";
import studentsImg from "../../assets/images/students.png"
import ReservationTypeButton from "../../components/ReservationTypeButton";
import ReservationDateButton from "../../components/ResevationDateButtons";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import usePostIndividualBooking from "../../hooks/api/usePostIndividualBooking";
import usePostSchoolBooking from "../../hooks/api/usePostSchoolBooking";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contextElements/auth";

export default function BookingPage (){
    const[userBooking, setUserBooking] = useState(undefined)
    const [reservationType, setReservationType] = useState(0)
    const [reservationDays, setReservationDays] = useState([])
    const [dateId, setDateId] = useState(0)
    const[formSchoolReserve, setFormSchoolReserve] = useState({school:"",studentsnumber:""})
    const { userData } = useContext(AuthContext);
    const config = { headers: {"Authorization": `Bearer ${userData.token}`} }

    const navigate = useNavigate();

    const { postIndividualBookingLoading, postIndividualBooking } = usePostIndividualBooking();
    const { postSchoolBookingLoading, postSchoolBooking } = usePostSchoolBooking();

    let reservationTypes = [{img: individualImg ,text: "Vou para a visita a passeio!", rtype: 1},{img: studentsImg ,text: "Quero levar minha turma!", rtype: 2}]

    if(userBooking){
        navigate('/confirmado');
    }
    
    useEffect(()=>{
        axios.get("http://localhost:4000/booking/dates",config)
        .then(res =>{
            setReservationDays(res.data)
        })
        .catch(err =>{
            /* toast('Infelizmente algo deu errado!'); */
        })
    }, [reservationType])


    function handleSchoolForm(e){
        const{name,value} = e.target
        setFormSchoolReserve({...formSchoolReserve, [name]:value})
    }
    
    async function individualSubmit(event){
        event.preventDefault();
        try{
            const individualBooking = await postIndividualBooking({dayid:dateId}, config);
            navigate('/confirmado');
           /*  toast('Reserva realizada com sucesso!') */
        } catch(err){
            console.log(err)
            toast('Infelizmente não foi possível fazer a Reserva!');
        }
    }

    async function schoolSubmit(event){
        event.preventDefault();
        const body ={
            dayid:dateId,
            school: formSchoolReserve.school,
            studentsnumber: formSchoolReserve.studentsnumber
        }
        try{
            const schoolBooking = await postSchoolBooking(body, config);
            navigate('/confirmado');
            /* toast('Reserva realizada com sucesso!') */
            navigate('/confirmado');
        } catch(err){
            console.log(err)
            /* toast('Infelizmente não foi possível fazer a Reserva!'); */
        }
    }

    return(
        <>
            <BookingPageTitle>Olá {userData.name}! Vamos fazer sua reserva!</BookingPageTitle>
            <BookingPageWrapper>
                <ReservationTypeWrapper>
                    <h2>Primeiro defina o tipo de visitação!</h2>
                    <ButtonsWrapper>
                        <>{reservationTypes.map((type)=><ReservationTypeButton bkgimg={type.img} typetext={type.text} setReservationType={setReservationType} rtype={type.rtype} />)}</>
                    </ButtonsWrapper>
                </ReservationTypeWrapper>
                <>{reservationType===0?(<></>):(
                    <>
                    {reservationType===1? (
                        <FinalReservationWrapper onSubmit={individualSubmit}>
                            <h2>Agora vamos definir a data e horário de sua visita!</h2>
                            <ButtonsWrapper>
                              <>{reservationDays.map((date)=><ReservationDateButton day={date.day} hour={date.hour} reservationType={reservationType} dateId={date.id} setDateId={setDateId} available={date.available}/>)}</>
                            </ButtonsWrapper>
                            <button type="submit">Confirmar Reserva!</button>
                        </FinalReservationWrapper>
                    ):(
                        <FinalReservationWrapper onSubmit={schoolSubmit}>
                            <h2>Que legal! Agora escolha data e horário de sua visita e por favor informe a instituição de ensino e o número de alunos!</h2>
                            <ButtonsWrapper>
                              <>{reservationDays.map((date)=><ReservationDateButton day={date.day} hour={date.hour} reservationType={reservationType} dateId={date.id} setDateId={setDateId} available={date.available}/>)}</>
                            </ButtonsWrapper>
                            <InputWrapper>
                                <input
                                    name="school"
                                    type="name"
                                    value={formSchoolReserve.school}
                                    onChange={handleSchoolForm}
                                    placeholder="Instiuição de ensino"
                                    required
                                />
                                <input
                                    name="studentsnumber"
                                    type="number"
                                    value={formSchoolReserve.studentsnumber}
                                    onChange={handleSchoolForm}
                                    placeholder="Número de alunos participantes"
                                    required
                                />
                            </InputWrapper>
                            <button type="submit">Confirmar Reserva!</button>
                        </FinalReservationWrapper>
                    )}
                    </>
                )}</>               
            </BookingPageWrapper>
        </>
    )
}

const BookingPageTitle = styled.h1`
    font-family: 'Syncopate', sans-serif;
    margin-left:8%;
    margin-top: 105px;
    margin-bottom: 15px;
    font-size: 27px;
    font-weight:700;
    color: #174926;
`

const BookingPageWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
`
const ReservationTypeWrapper = styled.div`
    width: 84%;
    min-height:250px;
    border: 3px solid rgba(21,49,52,0.5);
    border-radius: 10px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    h2{
        font-family: 'Syncopate', sans-serif;
        margin: 15px 10px;
        font-size: 22px;
        font-weight:400;
        color: #61614e;
    }
`
const ButtonsWrapper = styled.div`
    width: 100%;
    display:flex;
    margin-top: 8px;
    justify-content: center;
    align-items:center;
`
const InputWrapper = styled.div`
    display:flex;
    width: 100%;
    justify-content:center;
    input{
        background-color: #ffffff;
        width: 300px;
        height: 40px;
        border-radius: 5px;
        border: 2px solid #153134;
        font-family: 'Forum', cursive;
        font-size: 18px;
        font-weight:400;
        color: #666666;
        margin-left: 35px;
        margin-bottom: 7px;
        padding-left: 7px;
        ::placeholder{
            color:rgba(21,49,52,0.4);
        }
    }
`

const FinalReservationWrapper = styled.form`
    width: 84%;
    min-height:265px;
    border: 3px solid rgba(47,147,77,0.5);
    margin-top: 40px;
    border-radius: 10px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    position:relative;
    h2{
        font-family: 'Syncopate', sans-serif;
        margin: 15px 10px;
        font-size: 22px;
        font-weight:400;
        color: #61614e;
    }
    button{
        position:absolute;
        display:flex;
        justify-content:center;
        align-items: center;
        left:calc(50% - 175px);
        bottom: 10px;
        width: 350px;
        height:38px;
        border-radius: 5px;
        border: 1px solid #206635;
        background-color: #206635;
        font-family: 'Syncopate', sans-serif;
        font-size: 16px;
        font-weight:400;
        color: #ffffff;
        :hover{
            background-color: #2f934d;
            cursor: pointer;
        }
    }
`
