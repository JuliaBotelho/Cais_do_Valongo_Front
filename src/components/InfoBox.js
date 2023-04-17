import styled from "styled-components";

export default function InfoBox({id}){
    return(//!!!!! Lembrar de alternar por meio de um ternário a renderização: uma vez 1º a imagem e depois o texto e vice-versa
        <InfoBoxWrapper>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
            <InfoBoxText>
                <h3>Texto informativo</h3>
                <p>"Tripleto hexadecimal ou web colors é um número de seis dígitos formado por três
                    bytes em hexadecimal. É utilizado em documentos HTML, CSS e em outras aplicações
                    em computação. Os bytes representam as porções das cores vermelho, verde e azul.
                    Cada byte usa a faixa de 00h a FFh ou de 0 a 255 em notação decimal"</p>
            </InfoBoxText>  
        </InfoBoxWrapper>
    )
}

const InfoBoxWrapper = styled.div`
    background-color: rgba(21,49,52,0.3);  //tornar a cor variável de acordo com a ordem que a info chegará no array
    margin: 30px 0px;
    min-height: 320px;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: flex-end; //tornar alternável para flex-start de acordo com o indice ser par ou impar
    z-index:1;
    img{
        height: 330px;
        z-index:1;
    }
`
const InfoBoxText = styled.div`
    width: 42%;
    margin: 0px 25px;
    z-index:1;
    h3{
        font-family: 'Syncopate', sans-serif;
        margin-bottom: 10px;
        font-size: 25px;
        font-weight:400;
        color: #2c2c2e;
    }
    p{
        font-family: 'Forum', cursive;
        font-size: 18px;
        font-weight:400;
        color: #2c2c2e;
    }
`