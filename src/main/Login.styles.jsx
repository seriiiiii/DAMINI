import styled from "styled-components";
const LoginWrap = styled.div`
width:552px;
height:390px;
margin:0 auto;
margin-top:195px;
text-align:center;
h1{
font-size:36px;
color:#3617CE;
margin-bottom:28px;
}
p{
margin-top:50px;}
`
const Inputcontainer = styled.div`
 margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
form > div{
display:grid;
gap:22px;
}
`
const Buttoncontainer = styled.div`
width:100%;
    button{
    width:100%;
    margin-top:24px;}
`
const Error = styled.div`
text-align:left;
color:#D82424;
font-size:10px;
padding:2px 0px;
`
const Formerror = styled.div`
color:#D82424;
margin-top:10px;
`



export {LoginWrap, Inputcontainer, Buttoncontainer, Error, Formerror}; 