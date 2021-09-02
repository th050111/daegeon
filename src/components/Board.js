import { dbService } from "../myBase";
import Write from "./Write"
import React, { useEffect, useState } from "react";
import "../css/View.css"
import "../css/css.css"

export default ({ userObj,toggleType }) => {
  const [page,setPage] = useState(1)
  const [documents, setDocuments] = useState([])
  const [type,setType] = useState("board")
  const [viewDocNumber,setViewDocNumber] = useState("");
  const [editDoc,setEditDoc] = useState("");
  const [isLoading,setIsLoading] = useState(true);
  
  
  useEffect(async () => {
  setIsLoading(true)
    const pageList = await dbService.collection("inform").doc('page').get().then((doc)=>doc.data().articles)
	 const docList=[];
	 for(let i = 0; i< pageList.length;i++){
	 	if(pageList[i]!="" && pageList[i]!=undefined)
	 		docList.push(pageList[i]);
	 }
	  console.log(docList)
	 setDocuments(docList)
	 setIsLoading(false)
  }, [page])
 
	useEffect(async () => {
 if(viewDocNumber!="")
   setType("view");
  }, [viewDocNumber])
 
 const onTitleClick = (doc,index) => {
	if(doc===viewDocNumber)
		setType("view")
	setViewDocNumber({
		index:index,
	...doc,
	})
 }
 
 const onEdit = (id, article)=>{
 	setType("edit")
 	setEditDoc({
		id:id,
		...article
	})
 }
  
  return (
  <>
    {!isLoading?(<>
	 	<div>
	 	{{view:<View userObj={userObj} doc={viewDocNumber} close={(newType)=>setType(newType)} onEdit={onEdit}/>,
		edit:<Write userObj={userObj} editDoc={editDoc} toggleType={(type)=>{setType(type);}}/>,
		board:<>
			<div class="board_wrap">
        <div class="board_title">
            <strong>테스트테스트</strong>
        </div>
        <div class="board_list_wrap">
            <div class="board_list">
					<div class="top">
								  <div class="num">번호</div>
								  <div class="title">제목</div>
								  <div class="writer">글쓴이</div>
								  <div class="date">작성일</div>
								  <div class="count">조회</div>
							 </div>
					{
                documents.map((doc,index)=>{
						return (
							 <div key={index}>
								  <div class="num">{doc.number}</div>
								  <div class="title"><a onClick={()=>{onTitleClick(doc,index)}}>{doc.title}</a></div>
								  <div class="writer">익명</div>
								  <div class="date">{doc.date}</div>
								  <div class="count">{doc.like}</div>
							 </div>
						)
					})
						}
            </div>
            <div class="bt_wrap">
                <a class="emphasize" onClick={()=>toggleType("write")} class="on">등록</a>
            </div>
        </div>
    </div>
			</>
		}[type]}
		</div >
	 </>):(
	 	<h1>loading....</h1>
	 )
	 }
	 </>
  )
}

const View = ({userObj, doc, onEdit, close})=>{
	const [article,setArticle] = useState();
	const [isLoading,setIsLoading] = useState(true);
	const [isOwner,setIsOwner] = useState(false)
	
	useEffect(async () => {
		console.log(doc)
		setIsLoading(true)
	  const document = await dbService.collection("documents").doc(doc.id).get().then((snap)=>snap.data())
	  setArticle(document)
	  setIsLoading(false)
	  console.log(doc)
	  if(document.writerId === userObj.uid)
	  	setIsOwner(true)
		console.log(doc.writerId, userObj.uid)
  }, [doc])
	
	const onLike = async () => {
		if(doc.likeList.find((el)=>{
		if(el === userObj.uid)  {
    return true;
  }}) === undefined)
		{
			await dbService.collection("inform").doc("page").get().then((snap)=>{
				let newList = snap.data().articles[doc.index]
				newList
				})
		}
	}
	
	return(
	<>
	{!isLoading ?
	 (
		 <div class="board_wrap">
			  <div class="board_title">
					<strong>test</strong>
			  </div>
			  <div class="board_view_wrap">
					<div class="board_view">
						 <div class="title">
	 						{article.title}
						 </div>
						 <div class="info">
							  <dl>
									<dt>번호</dt>
									<dd>{article.number}</dd>
							  </dl>
							  <dl>
									<dt>글쓴이</dt>
									<dd>{article.writer}</dd>
							  </dl>
							  <dl>
									<dt>작성일</dt>
									<dd>{article.data}</dd>
							  </dl>
							  <dl>
									<dt>조회</dt>
									<dd>33</dd>
							  </dl>
						 </div>
						 <div class="cont">
							{article.body}
						 </div>
					</div>
					<button onClick={onLike}>좋아요</button>
					<div class="bt_wrap">
						 <a class="emphasize" onClick={()=>close("board")} class="on">목록</a>
{isOwner && <a onClick={()=>onEdit(doc.id,article)}>수정</a>}
					</div>
			  </div>
		 </div>
	 ):(
		<h3>Loading...</h3>)
		
	}
	</>
	)
}