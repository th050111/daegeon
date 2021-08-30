import { dbService } from "../myBase";
import React, { useEffect, useState } from "react";
import "../css/css.css"

export default ({ userObj, toggleType, editDoc}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
 
 useEffect(async () => {
 	console.log(editDoc)
		if(editDoc){
			setTitle(editDoc.title)
			setBody(editDoc.body)
		}
  }, [editDoc])
 
 
  const onSubmit = async (event) => {
	  	if(title.replace(/(\s*)/g, "").length <2){
			alert("제목을 2글자 이상으로 입력하세요")
			return;
		}
	  if(body.replace(/(\s*)/g, "").length<1){
			alert("내용을 입력하세요")
			return;
		}
		 event.preventDefault();
		 if(editDoc){
	  const now = new Date();
		 	await dbService.collection("documents").doc(editDoc.id).update({
			date:`${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일`,
			body: body,
			title: title,
		 	});
			toggleType("board");
			return;
		 }
	  const number = await dbService.collection("inform").doc("page").get().then(async (snap)=>{
		  console.log(snap.data())
				 if(snap.data().number===undefined){
					 const newPage = {number:1,...snap.data()};
					  await dbService.collection("inform").doc("page").set(newPage)
					 return 1;
				 }
				 await dbService.collection("inform").doc("page").update({
						 number:`${parseInt(snap.data().number)+1}`,
					 })
			 	return parseInt(snap.data().number)+1;
			 })
			 console.log(number)
	  const now = new Date();
		 //컬렉션에 추가(객체)
		 const data=await dbService.collection("documents").add({
			writerId:userObj.uid,
			writer:"익명",
			date:`${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일`,
			 number:number,
			body: body,
			title: title,
		 });
		 const pageList = await dbService.collection("inform").doc("page").get().then((doc)=>doc.data().articles)
		 pageList.unshift({
		 	id:data.id,
			title: title,
			 number:number,
			 date:`${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일`,
		 })
		 console.log(pageList)
		 await dbService.collection("inform").doc("page").update({
		 	articles:pageList
		 })
		 toggleType("view")
	 }

  const onChangeBody = (event) => {
    //event.target의 value를 value로
    const { target: { value } } = event;
    setBody(value);
  }
  const onChangeTitle = (event) => {
    //event.target의 value를 value로
    const { target: { value } } = event;
    setTitle(value);
  }
  return (
	  <div class="board_wrap">
        <div class="board_title">
            <strong>test</strong>
        </div>
        <div class="board_write_wrap">
            <div class="board_write">
	  				<form>
                <div class="title">
                    <dl>
                        <dt>제목</dt>
                        <dd><input value={title} onChange={onChangeTitle} type="text" placeholder="제목입력"/></dd>
                    </dl>
                </div>
                <div class="cont">
                    <textarea value={body} onChange={onChangeBody} type="text" placeholder="내용" required></textarea>
                </div>
					</form>
            </div>
            <div class="bt_wrap">
                <a class="emphasize" onClick={onSubmit} class="on">등록</a>
                <a href="main.html">취소</a>
            </div>
        </div>
    </div>
  )
}