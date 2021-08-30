import { authService,dbService } from "../myBase";
import React, { useState } from "react";
import "../css/Auth.css"
import {Redirect} from "react-router-dom";




export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogIn,setIsLogIn] = useState(true);
  const [error, setError] = useState("");

  
  const toResister = () => setIsLogIn((prev)=>!prev)
  
  
  const checkLogIn = () => {
  if(isLogIn)
  	return;
  	 const form = document.login_form;
	 const inform ={
	 "tgim4253@pess.cnehs.kr": {
		"code":"1234" 
	 },
	 "cloudmc@pess.cnehs.kr": {
		"code":"1234" 
	 },
	 "tgim3370@pess.cnehs.kr": {
		"code":"1234" 
	 },
		 "seojin0122@pess.cnehs.kr": {
		"code":"1234" 
	 },
		 "insa5557@pess.cnehs.kr": {
		"code":"1234" 
	 }
	 }
    const chkPw = checkValidPassword(form);
	 const chkEmail = inform[form.email.value]?true:false;
	 console.log(chkEmail)
	 const chkCode = form.confirm_code.value === (inform[form.email.value]?inform[form.email.value].code:"");
	 let chkPw2 = checkValidPassword2(form);
	 console.log((inform[email]!=undefined?inform[email].code:""))
	 


	if (chkEmail) {
        document.getElementById('alert_email').innerText = "";
        form.email.style.border = '2px solid';
        form.email.style.borderColor = '#00D000';
    } else {
        form.email.style.border = '2px solid';
        form.email.style.borderColor = '#FF0000';
        document.getElementById('alert_email').style.color = '#FF0000';
    }
    

    if (chkPw) {
        document.getElementById('alert_password').innerText = "";
        form.password.style.border = '2px solid';
        form.password.style.borderColor = '#00D000';
    } else {
        form.password.style.border = '2px solid';
        form.password.style.borderColor = '#FF0000';
        document.getElementById('alert_password').style.color = '#FF0000';
    }
	 if (chkCode) {
        document.getElementById('alert_code').innerText = "";
        form.confirm_code.style.border = '2px solid';
        form.confirm_code.style.borderColor = '#00D000';
    } else {
        form.confirm_code.style.border = '2px solid';
        form.confirm_code.style.borderColor = '#FF0000';
        document.getElementById('alert_code').style.color = '#FF0000';
    }
    if (chkPw2) {
        document.getElementById('alert_password2').innerText = "";
        form.password2.style.border = '2px solid';
        form.password2.style.borderColor = '#00D000';
    } else {
        form.password2.style.border = '2px solid';
        form.password2.style.borderColor = '#FF0000';
        document.getElementById('alert_password2').style.color = '#FF0000';
    }
    return(chkEmail && chkPw && chkPw2 && chkCode)
  }
  
  
function checkValidPassword(form) {
    if (form.password.value == "") {
        document.getElementById('alert_password').innerText = "Please enter password.";
        //form.password.focus();
        return false;
    }

    const pw = form.password.value;
    // String.prototype.search() :: 검색된 문자열 중에 첫 번째로 매치되는 것의 인덱스를 반환한다. 찾지 못하면 -1 을 반환한다.
    // number
    const num = pw.search(/[0-9]/g);
    // alphabet
    const eng = pw.search(/[a-z]/ig);
    // special characters
    const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if (pw.length < 6) {
        // 최소 6문자.
        document.getElementById('alert_password').innerText = "Password must be at least 6 characters.";
        return false;
    } else if (pw.search(/\s/) != -1) {
        // 공백 제거.
        document.getElementById('alert_password').innerText = "Please enter your password without spaces.";
        return false;
    } else if (num < 0 && eng < 0 && spe < 0) {
        // 한글과 같은 문자열 입력 방지.
        document.getElementById('alert_password').innerText = "Password is not valid.";
        return false;
    }

    return true;
}

function checkValidPassword2(form) {
    if (form.password2.value == "") {
        document.getElementById('alert_password2').innerText = "Password2 is required.";
        //form.password.focus();
        return false;
    }

    if (form.password.value !== form.password2.value) {
        document.getElementById('alert_password2').innerText = "Password and password2 is not match.";
        form.password.style.border = '2px solid';
        form.password.style.borderColor = '#FF0000';
        document.getElementById('alert_password').style.color = '#FF0000';
        return false;
    }

    return true;
}
  
  
  return (
  <>
		  {isLogIn?(<Login resister={toResister} checkLogIn={checkLogIn}/>):(<Resister resister={toResister} checkLogIn={checkLogIn}/>)}
               </>
  )
}




const Resister = ({resister, checkLogIn}) => {


const onSubmit = async (event) => {
    event.preventDefault();
	   	 const form = document.login_form;
	const email = form.email.value;
	const password = form.password.value;
	let isError=false;
	
	 let data;
	 if(checkLogIn()){
		 try {
        data = await authService.createUserWithEmailAndPassword(email, password);
    } catch (error) {
	 	isError=true;
      console.log(error.message);
    }
	 }
	 if(data){
	 	await dbService.collection("users").doc(data.user.uid+"").set({
	 	createAt:`${Date.now()}`,
		name:"익명",
		email:`${email}`,
	 })
	 }
  }

 return(
 <>
 	<div style={{padding:" 30p"}}></div>
                <form name="login_form" action="/cookie" method="get">
                    <img src="/image/dghs.png" alt="dghs" class="dghs_logo" width="200"/>
                    
                     <div>
                        <div>
                            <input type="text" name="confirm_code" placeholder="인증 코드" className="re-form_input"/>
                        </div>
                        <div className="form_text_alert_padding">
                            <div id="alert_code" className="form_text_alert"></div>
                        </div>
                    </div>
                    
                    <div>
                        <div>
                            <input type="text" name="email" placeholder="아이디" className="re-form_input"/>
                        </div>
                        <div className="form_text_alert_padding">
                            <div id="alert_email" className="form_text_alert"></div>
                        </div>
                    </div>
                    
                    <div>
                        <div>
                            <input type="password" name="password" placeholder="비밀번호" className="re-form_input" />
                        </div>
                        <div className="form_text_alert_padding">
                            <div id="alert_password" className="form_text_alert"></div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="password" name="password2" placeholder="비밀번호 재입력" className="re-form_input" />
                        </div>
                        <div className="form_text_alert_padding">
                            <div id="alert_password2" className="form_text_alert"></div>
                        </div>
                    </div>
                    
                    <div style={{height: "10px"}}></div>
                    <div>
                        <button type="button" className="form_submitregister_button" onClick={onSubmit}>회원가입</button>
                    </div>
                    <div style={{height: "10px"}}></div>
						  <div>
                        <button type="button" className="form_register_button" onClick={resister}>로그인</button>
                    </div>
                </form>
					 </>
 )
}



const Login = ({resister,checkLogIn}) => {
	const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

	const onSubmit = async (event) => {
    event.preventDefault();
    let data;
    try {
      let data;
      data = await authService.signInWithEmailAndPassword(id, password);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  }
  
  const onChange = (event) => {
    const { target: { name, value } } = event;
    if (name === "email") {
      setId(value)
    } else if (name === "password") {
      setPassword(value);
    }
  }

	return(
	<>
        <div style={{padding: "70px"}}></div>
		<form name="login_form" submit={onSubmit}>
         <img src="/image/dghs.png" alt="dghs" class="dghs_logo" width="200"/>
                    
                    <div>
                        <div>
                            <input type="text" name="email" value={id} placeholder="아이디" className="form_input" onChange={onChange}/>
                        </div>
                        <div className="form_text_alert_paddings">
                            <div id="alert_email" className="form_text_alert"></div>
                        </div>
                    </div>
                    
                    <div>
                        <div>
                            <input type="password" name="password" value={password} placeholder="비밀번호" className="form_input" onChange={onChange}/>
                        </div>
                        <div className="form_text_alert_padding">
                            <div id="alert_password" className="form_text_alert"></div>
                        </div>
                    </div>
                    
                    <div style={{height: "10px"}}></div>
                    <div>
                        <button type="button" className="form_submit_button" onClick={onSubmit}>로그인</button>
                    </div>
                    
                    <div style={{height: "10px"}}></div>
                    <div>
                        <button type="button" className="form_register_button" onClick={resister}>회원가입</button>
                    </div>
                    
                    <div style={{height: "10px"}}></div>
                    <div>
                        <button type="button" className="form_findpasswd_button" >비밀번호 찾기</button>
                    </div>
                    
                </form>
		</>)
}