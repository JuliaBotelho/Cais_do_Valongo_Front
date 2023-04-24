import styled from "styled-components"
import logtheme from "../../assets/images/loginlogo.png"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useSignUp from "../../hooks/api/useSignUp"
import { toast } from "react-toastify";

export default function RegisterPage (){
    const[formRegister, setFormRegister] = useState({email:"",username:"",password:""})
    const {signUpLoading, signUp} = useSignUp();

    const navigate = useNavigate();

    function handleFormRegister (e){
        const{name,value} = e.target
        setFormRegister({...formRegister, [name]:value})
    }

    async function submit(event){
        event.preventDefault();

        try{
            const userData = await signUp(formRegister);
            toast('Seus dados foram registrados com sucesso!') 
            navigate('/login');
        } catch(err){
            console.log(err)
            toast('Infelizmente não foi possível registrar seus dados!');
        }
    }

    return(
        <RegisterWrapper>
            <PageTheme>
                <img src={logtheme} />
            </PageTheme>
            <FormRegister onSubmit={submit}>
                <input
                    name="email"
                    type="email"
                    value={formRegister.email}
                    onChange={handleFormRegister}
                    placeholder="Email"
                    required
                />
                <input
                    name="username"
                    type="name"
                    value={formRegister.name}
                    onChange={handleFormRegister}
                    placeholder="Nome"
                    required
                />
                <input
                    name="password"
                    type="password"
                    value={formRegister.password}
                    onChange={handleFormRegister}
                    placeholder="Senha"
                    required
                />
                <button type="submit">Cadastrar</button>
            </FormRegister>
            <Link to={"/login"}>
                <LoginLink>Já possui Cadastro? Agora é só fazer o Login!</LoginLink>
            </Link>
        </RegisterWrapper>
    )
}

const RegisterWrapper =styled.div`
    a{
        text-decoration:none;
    }
`

const PageTheme = styled.div`
    margin-top: 85px;
    display:flex;
    justify-content:center;
    img{
        width:36%;
    }
`

const FormRegister = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    input{
        background-color: #ffffff;
        width: 300px;
        height: 45px;
        border-radius: 5px;
        border: 2px solid #153134;
        font-family: 'Forum', cursive;
        font-size: 18px;
        font-weight:400;
        color: #666666;
        margin-bottom: 7px;
        padding-left: 7px;
        ::placeholder{
            color:rgba(21,49,52,0.4);
        }
    }
    button{
        display:flex;
        justify-content:center;
        align-items: center;
        width: 312px;
        height:45px;
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

const LoginLink = styled.h4`
    display:flex;
    justify-content: center;
    margin-top: 25px;
    font-family: 'Forum', cursive;
    color: #2c4548;
    font-size: 18px;
    font-weight:400;
    :hover{
        color:#5b6e70;
        cursor: pointer;
    }
    a{
        text-decoration:none;
    }
    link{
        text-decoration:none;
    }
`