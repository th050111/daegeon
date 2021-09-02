import { dbService } from "../myBase";
import React, { useEffect, useState } from "react";
import Write from "../components/Write"
import Board from "../components/Board"
import "../css/MainHome.css"

export default ({ userObj }) => {
	const [pageType,setPageType] = useState("view")
	const [SetTime,SetSetTime] = useState(432536)
	const [currentTime,setCurrentTime] = useState("")
	const [dDay,setDDay] = useState([
		{
			title:"추석",
			time:{
				year:"2021",
				month:"09",
				day:"20"
			}
		}
	])
	
	const toggleType = (type) => setPageType(type)
	let timeInterval;
	
	useState(()=>{
		const getTime = () =>{
	const setDate = new Date(`${dDay[0].time.year}-${dDay[0].time.month}-${dDay[0].time.day}T00:00:00+0900`);
  // D-day 날짜의 연,월,일 구하기
  const setDateYear = setDate.getFullYear();
  // getMonth 메서드는 0부터 세기 때문에 +1 해준다.
  const setDateMonth = setDate.getMonth() + 1;
  const setDateDay = setDate.getDate();

  // 현재 날짜를 new 연산자를 사용해서 Date 객체를 생성
  const now = new Date();

  // D-Day 날짜에서 현재 날짜의 차이를 getTime 메서드를 사용해서 밀리초의 값으로 가져온다. 
  const distance = setDate.getTime() - now.getTime();
  
  // Math.floor 함수를 이용해서 근접한 정수값을 가져온다.
  // 밀리초 값이기 때문에 1000을 곱한다. 
  // 1000*60 => 60초(1분)*60 => 60분(1시간)*24 = 24시간(하루)
  // 나머지 연산자(%)를 이용해서 시/분/초를 구한다.
  const day = Math.floor(distance/(1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
  const seconds = Math.floor((distance % (1000*60))/1000);

  // D-Day 날짜를 가져오고,
  // 삼항 연산자를 사용해서 값이 10보다 작을 경우에 대해 조건부 렌더링을 해준다.
  setCurrentTime(
    ` ${day}일 
      ${hours < 10 ? `0${hours}` : hours}:
      ${minutes < 10 ? `0${minutes}` : minutes} :
      ${seconds < 10 ? `0${seconds}` : seconds}`)
	}
		getTime();
		timeInterval = setInterval(getTime,1000) 
		return () => clearInterval(timeInterval)
	},[])
	
  return (
  <>
	 <div class="container_3" id="ViewTimer">
	  		<div>{dDay[0].title}까지</div>
			<span class='timer'>{currentTime}</span>
    </div>
       <div class="container_2">
            <div>
               <h3 class="tm-text-secondary tm-mb-4">
                  여기에 사이트 설명 입력
               </h3>
               <p class="tm-section-2-text">
                  여기에 사이트 설명 입력
               </p>
               <p>
                  여기에 사이트 설명 입력
               </p>
            </div>
       </div>
       <div class="container">
         <div>
            <h3 class="tm-text-secondary tm-mb-4">
               패치  
            </h3>
            <p class="tm-section-2-text">
               여기에 패치 입력
            </p>
            <p>
               여기에 패치 입력
            </p>
         </div>
      </div>
       <div>
           
       </div>
	 </>
  )
}