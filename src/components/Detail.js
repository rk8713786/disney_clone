import Styled from "styled-components";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import db from "../firebase";


const Detail = (props) =>
{
    const {id} = useParams()
    const [detailData,setDetailData]=useState({});
    useEffect(()=>
    {
        db.collection("movies").doc(id).get().then((doc) =>
        {
            if(doc.exists)
            {
                setDetailData(doc.data());
            }
            else
            {
                console.log("no such document in firebase");
            }
        }).catch((error) =>
        {
            console.log("Error grtting document :",error);

        })
    },{id});

    return <Container>
                <Background>
                    <img src = {detailData.backgroundImg}
                        alt={detailData.title}>
                    </img>
                </Background>
                <ImageTitle>
                    <img alt= {detailData.title}
                    src={detailData.titleImg}>

                    </img>
                </ImageTitle>
                <ContentMeta>
                    <Controls>
                        <Player>
                            <img src="/images/play-icon-black.png" alt =""></img>
                            <span>Play</span>
                        </Player>
                        <Trailer>
                            <img src="/images/play-icon-white.png" alt =""></img>
                            <span>Trailer</span>
                        </Trailer>
                        <AddList>
                            <span>

                            </span>
                            <span>

                            </span>
                        </AddList>
                        <GroupWatch>
                            <img src="/images/group-icon.png" alt=""></img>
                        </GroupWatch>
                        

                    </Controls>
                    <SubTitles>
                        {detailData.subTitle}
                    </SubTitles>
                    <Description>
                        {detailData.description}
                    </Description>
                    
                </ContentMeta>

            
        </Container>


    
        
    
        
    
}

const Container = Styled.div `


position : relative ;
min-height : calc(100vh-250px);
overflow-x : hidden;
display : block;
top : 72px;
padding : 0 calc(3.5vw + 5px);

`
;
const Background = Styled.div`
left : 0px;
opacity : 0.8;
position : fixed ;
right :  0px;
top : 0px;
z-index : -1;

img{
    width : 100vw;
    height : 100vh;

}

@media (max-width : 768px)
{
    width : initial;
}

`;
const ImageTitle = Styled.div `

align-items: flex-end;
display : flex;
-webkit-box-pack : start;
justify-content : flex-start;
margin : 0px auto;
height : 30vw;
min-height :  170px;
padding-bottom : 24px;
width : 100%;

img{
    max-width : 600px;
    min-width : 200px;
    width : 35vw;
}







`;


const ContentMeta = Styled.div `

max-width : 874px;

`;
const Controls = Styled.div`

align-items : center;
display : flex;
flex-flow : row nowrap;
margin : 24px 0px;
min-height : 56px;


`;

const Player= Styled.button`

font-size : 15px;
margin : 0 22px 0 0 ;
padding : 0 24px;

height : 56px;
border-radius : 4px;
align-items : center;
cursor : pointer;
display : flex;
justify-content : center;
letter-spacing : 1.8px;
text-align : center;
text-transform : uppercase;
background : rgb(249,249,249);
border : none;
color : rgb(0,0,0);
img
{
    width : 32px;
}

&: hover
{
    background : rgb(198,198,198);
}

@media (max-width : 768px)
{
    height : 45px;
    padding : 0 22px;
    font-size : 12px;
    margin : 0 10px 0 0;

    img{
        width : 25px;
    }
}
`;

const Trailer = Styled(Player)`
background : rgba(0,0,0,0.3);
border : 1px solid rgb(249,249,249);
color : rgb(249,249,249);
`;

const AddList = Styled.div`

margin-right : 16px;
height : 44px;
width : 44px;
display : flex;
justify-content : center;
align-items : center;
background-color : rgba(0,0,0,0.6);
border-radius : 50%;
border : 2px solid white;
cursor : pointer;

span
{
    background-color : rgb(249,249,249);
    display : inline-block;
    &: first-child
    {
        height : 2px;
        transform : translate(1px,0px) rotate(0deg);
        width : 16px;
    }

    &: nth-child(2)
    {
        height : 16px;
        transform : translateX(-8px) rotate(0deg);
        width : 2px;

    }

}

`;

const GroupWatch = Styled.div`
margin-right : 16px;
height : 44px;
width : 44px;
display : flex;
justify-content : center;
align-items : center;
background-color : rgba(0,0,0,0.6);
border-radius : 50%;
border : 2px solid white;
cursor : pointer;

div
{
    height : 40px;
    width : 40px;
    background : rgb(0,0,0);
    border-radius : 50%;
    img
    {
        width : 100%;
    }

}


`;


const SubTitles = Styled.div `
color : rgb(249,249,249);
font-size : 15px;
min-height : 20px;

@media (max-width : 768px)
{
    font-size : 12px;
}


`;
const Description= Styled.div `
line-height : 1.4;
font-size : 20px;
padding : 16px 0px;
color : rgb(249,249,249);

@media (max-width : 768px)
{
    font-size : 14px;
}

`;


export default Detail;