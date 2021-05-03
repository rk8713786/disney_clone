import { getByPlaceholderText } from "@testing-library/dom";
import Styled from "styled-components";
const Login = (props)=> 
{
    return (
        
    <Container>
    <Content>
    <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
        <Signup>GET ALL THERE</Signup>
        <Description>The Walt Disney Co. is a diversified international family entertainment and media enterprise </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
    </CTA>
    <BgImage/>

  
        
    </Content>
</Container>
    )
}
const Container = Styled.section`
overflow : hidden;
display : flex; 
flex-direction : column;
text-align : center;
height : 100vh;
`
;

const Content = Styled.div`

margin-bottom : 10vw;
width :100%;
position : relative;
min-height : 100vh;
box-sizing : border-box;
display : flex;
justify-content : center;
align-items  center;
flex-direction : column;
padding : 80px 50px;
height : 100%;
`;

const BgImage = Styled.div`
height : 100%;
background-position : top;
background-size : cover;
background-repeat : no-repeat;
background-image : url("images/login-background.jpg");
position :absolute;
top :0;
right : 0;
left :0;
z-index : -1;

`;
const CTA = Styled.div `
max-width : 650px;
width : 100%;
display :flex;
flex-direction : column;

`;
const CTALogoOne = Styled.img `
margin-bottom : 12px;
max-width : 600px;
min-height : 1px;
display : block;
width : 100%;


`;

const Signup = Styled.a `

font-weight : bold;
color : #f9f9f9;
background-color : #0063e5;
width : 100%;
letter-spacing:1.5px;
font-size : 18px;
padding : 16.5px 0;
margin-bottom : 12px;
border : 1px solid transparent ;
border-radius : 4px;

&: hover {
    background-color : #0483ee; 
}


`;

const Description = Styled.h4`

color : hsla(0,0%,95.3%,1);
font-size : 21px;
margin : 0 0 24px;
line-height : 1.5;
letter-spacing : 1.5px;
`;

const CTALogoTwo = Styled.img `
max-width : 650px;
margin-bottom : 20px;
display : inline-block;
vertical-align : bottom;
width : 100%;

`;

export default Login;
