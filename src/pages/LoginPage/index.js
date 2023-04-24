import styled from "styled-components";
import logtheme from "../../assets/images/loginlogo.png";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextElements/auth";
import useSignIn from "../../hooks/api/useSignIn";
import { toast } from "react-toastify";


export default function LoginPage (){
    const[formLogin, setFormLogin] = useState({email:"",password:""})
    const {setUserData} = useContext(AuthContext);
    const {loadingSignIn, signIn} = useSignIn();

    const navigate = useNavigate();

    function handleFormLogin(e){
        const{name,value} = e.target
        setFormLogin({...formLogin, [name]:value})
    }

    async function submit(event){
        event.preventDefault();

        try{
            const userData = await signIn(formLogin);
            setUserData(userData);
            toast('Login realizado com sucesso!')
            navigate('/reserva');
        } catch(err){
            console.log(err)
            toast('Infelizmente não foi possível fazer o Login!');
        }
    }

    return(
        <LoginWrapper>
            <PageTheme>
                <img src={logtheme}/>
            </PageTheme>
            <FormLogin onSubmit={submit}>
                <input
                    name="email"
                    type="email"
                    value={formLogin.email}
                    onChange={handleFormLogin}
                    placeholder="Email"
                    required
                />
                <input
                    name="password"
                    type="password"
                    value={formLogin.password}
                    onChange={handleFormLogin}
                    placeholder="Senha"
                    required
                />
                <button type="submit">Entrar</button>
            </FormLogin>
            <Link to={"/cadastro"}>
                <RegisterLink>Ainda não está cadastrado? Cadastre-se e faça sua reserva!</RegisterLink>
            </Link>        
        </LoginWrapper>
    )
}

const LoginWrapper = styled.div`
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

const FormLogin = styled.form`
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

const RegisterLink = styled.h4`
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

/* const FormBlueTheme = styled.div`
    background-color: rgba(21,49,52,0.3);
`

const FormGreenTheme = styled.div`
    background-color: rgba(47,147,77,0.3);
`

const FormYellowTheme = styled.div`
    background-color: rgba(219,157,46,0.3);
` */