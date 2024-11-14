import React, { useState } from "react";
import LoginInput from "../components/LoginInput";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

import {
  LoginWrap,
  Inputcontainer,
  Buttoncontainer,
  Formerror,
  Error,
} from "./Login.styles";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ id: "", password: "" });
  const [formError, setFormError] = useState("");

  const navigate = useNavigate();

  const validateField = (field) => {
    const newErrors = { ...errors };
    if (field === "id") {
      newErrors.id = id ? "" : "아이디를 입력하세요.";
    } else if (field === "password") {
      newErrors.password = password ? "" : "비밀번호를 입력하세요.";
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors = { id: "", password: "" };
    let isValid = true;
    let formErrorMessage = "";

    if (!id) {
      newErrors.id = "아이디를 입력하세요.";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "비밀번호를 입력하세요.";
      isValid = false;
    }

    if (isValid) {
      const mockUsers = [{ id: "123", password: "123" }];

      const user = mockUsers.find(
        (u) => u.id === id && u.password === password
      );

      if (!user) {
        formErrorMessage = "아이디 또는 비밀번호가 잘못되었습니다.";
        isValid = false;
      }
    }

    setErrors(newErrors);
    setFormError(formErrorMessage);
    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/main");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "id") {
      setId(value);
      if (value) {
        setErrors((prevErrors) => ({ ...prevErrors, id: "" }));
      }
    } else if (id === "password") {
      setPassword(value);
      if (value) {
        setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
      }
    }
  };

  return (
    <LoginWrap>
      <h1>DAMINI</h1>
      <Inputcontainer>
        <form onSubmit={handleLogin}>
          <div>
            <div>
              <LoginInput
                type="text"
                id="id"
                value={id}
                onChange={handleChange}
                onBlur={() => validateField("id")}
                placeholder="아이디를 입력하세요"
              />
              {errors.id && <Error>{errors.id}</Error>}
            </div>
            <div>
              <LoginInput
                type="password"
                id="password"
                value={password}
                onChange={handleChange}
                onBlur={() => validateField("password")}
                placeholder="비밀번호를 입력하세요"
              />
              {errors.password && <Error>{errors.password}</Error>}
            </div>
          </div>
          <Buttoncontainer>
            <Button primary size="xlarge" type="submit">
              로그인
            </Button>
          </Buttoncontainer>
          {formError && <Formerror>{formError}</Formerror>}
        </form>
      </Inputcontainer>
      <p>※ Confluence/Jira에서 사용하는 계정과 동일합니다.</p>
    </LoginWrap>
  );
}

export default Login;
// import React, {useState, useEffect} from 'react';
// import LoginInput from "../components/LoginInput";
// import { useNavigate } from 'react-router-dom';
// import Button from "../components/Button";
// import {
//   LoginWrap,
//   Inputcontainer,
//   Buttoncontainer,
//   Error,
//   LoginError
//   } from "./Login.styles";

// function Login(){
//     const [username, setusername] = useState('');
//     const [password, setpassword] = useState('');

//     //const [errors, setErrors] = useState({username: false, password: false});
//     const [isError, setIsError] = useState({isSuccess:true, reason:''});

//     const [isIdFocusBlur , setIsIdFocusBlur] = useState(false);
//     const [isPwdFocusBlur, setIsPwdFocusBlur] = useState(false);
//     const navigate = useNavigate();
//     const handleClick = () => {

//         var result = {isSuccess:false, reason:'아이디를 확인해 주세요'}
//         setIsError(result);

//         if (result.iserror) {

//             navigate('/main');
//         }
//     };

//     return(
//         <LoginWrap>
//             <h1>
//                 DAMINI
//             </h1>
//             <Inputcontainer>
//             <LoginInput
//                 name="username"
//                 placeholder="아이디를 입력하세요"
//                 value={username}
//                 onChange={(e) => {
//                     try{
//                         setusername(e.target.value)
//                     } catch(error){}
//                 } }
//                 onBlur={(e) => {
//                     try{
//                         setIsIdFocusBlur(true);
//                     } catch(error){}
//                 } }
//                 onFocus={(e) => {
//                     try{
//                         setIsError({isSuccess:true, reason:''});
//                         setIsIdFocusBlur(false);
//                     } catch(error){}
//                 } }
//                 />
//             {(!username && isIdFocusBlur) && <Error>$Error MSG$</Error>}
//             <LoginInput
//                 name="password"
//                 placeholder="비밀번호를 입력하세요"
//                 value={password}
//                 onChange={(e) => {
//                     try{
//                         setpassword(e.target.value)
//                     } catch(error){}
//                 } }
//                 onBlur={(e) => {
//                     try{
//                         setIsPwdFocusBlur(true);
//                     } catch(error){}
//                 } }
//                 onFocus={(e) => {
//                     try{
//                         setIsError({isSuccess:true, reason:''});
//                         setIsPwdFocusBlur(false);
//                     } catch(error){}
//                 } }
//                  />
//             {(!password && isPwdFocusBlur) &&<Error>$Error MSG$</Error>}
//             </Inputcontainer>
//             <Buttoncontainer>
//                  <Button onClick={handleClick} primary size="xlarge">로그인</Button>
//             </Buttoncontainer>
//             {!isError.isSuccess && (
//                 <LoginError>{isError.reason}</LoginError>
//             )}
//             <p>※ Confluence/Jira에서 사용하는 계정과 동일합니다.</p>
//         </LoginWrap>
//     );
// }

// export default Login;
