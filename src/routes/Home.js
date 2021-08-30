import { dbService } from "../myBase";
import React, { useEffect, useState } from "react";
import Write from "../components/Write"
import Board from "../components/Board"
import "../css/Home.css"

export default ({ userObj }) => {
	const [pageType,setPageType] = useState("view")
	
	const toggleType = (type) => setPageType(type)
  return (
  <>
	 {
	 	{
			view: <Board userObj={userObj} toggleType={toggleType}/>,
			write: <Write userObj={userObj} toggleType={toggleType}/>
		}[pageType]
	 }
	 </>
  )
}