import styled from "styled-components";
import backgvalongo from "../../assets/images/backgval.png";
import InfoBox from "../../components/InfoBox";
import HeaderInfoPages from "../../components/HeaderInfoPages";

export default function HistoricInfoPage(){
    return (    
        <>
            <HeaderInfoPages/>
            <BkgImage src={backgvalongo}/>
            <PageTitleWrapper>
                <TitleColorWrapper>
                    <h1>O Cais do Valongo e sua riqueza histórica</h1>
                </TitleColorWrapper>
                <ColorBox/>
            </PageTitleWrapper>
            <InfoBox/>
        </>
    )
}

const BkgImage = styled.img`
    position:fixed;
    opacity: 0.085;
    right: 0px;
    top: 20px;
    z-index:0;
`

const PageTitleWrapper = styled.div`
    width: 100%;
    margin-top:140px;
    height:200px;
    display:flex;
    align-items: center;
    justify-content: flex-start;
`

const TitleColorWrapper = styled.div`
    background-color: #153134;
    width:34%;
    height:100%;
    opacity: 0.8;
    display:flex;
    padding-left:8px;
    align-items: center;
    h1{
        font-family: 'Syncopate', sans-serif;
        font-size: 38px;
        font-weight:700;
        color: #ffffff;
    }
`

const ColorBox = styled.div`
    width: 7%;
    height:100%;
    background-color: #DB9D2E;
    opacity: 0.8;
`