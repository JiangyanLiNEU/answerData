import styled from "styled-components";
import './style.css';
import {useState} from 'react'
import { getAll } from "../questionService";

export const Search = () => {
     const [question, setquestion] = useState("");
     const [fetchedAnswer, setfetchedAnswer] = useState("");

     const handleSubmit = async(e) => {
          e.preventDefault()
          console.log("inside handleSubmit")
          const {data} = await getAll()
          data.forEach( obj => {
               if (obj.question == question){
                    console.log("find it in database")
                    setfetchedAnswer(obj.answer)
                    return
               }
          })
          setfetchedAnswer("didn't find the question in the database")

     }

     const handleChange = (e) =>{
          setquestion(e.target.value)
     }

     const width = window.innerWidth;
     const divStyle = {

          padding:"10px",
          margin:"20px"
     }
     const addStyle ={
          fontFamily:"'Lobster', cursive",
          fontSize:"xxx-large"
     }
     const textareaStyle={
          border:"2px dashed #4c956c",
          width:width*0.7+'px'
     }
     const labelStyle = {
          color:"#d68c45",
          fontFamily:"'Lobster', cursive",
          fontSize:"x-large"
     }
     const Button = styled.button`
     font-size: 1.5em;
     border-radius: 15%;
     padding: 5px;
     margin-top: 10px;
     cursor: pointer;
     transition: opacity;
     background:#fefee3;
     
    `

    const handleAnswerChange = () => {
         console.log("update the answer based on search result")
    }

     return (
          <div style={divStyle}>
               <span style={addStyle}>Search</span>
               <form onSubmit={handleSubmit} >
               <label style={labelStyle} ><h3>New Question:</h3></label>
               <div><textarea onChange={handleChange} value={question} style={textareaStyle} rows='5' cols='50' id="searchNewQuestion"></textarea></div>
               <Button type='submit' id='searchBTN' className='Button'>Search</Button>
               </form>
               <label style={labelStyle}><h3>New Answer:</h3></label>
               {fetchedAnswer==""? <div></div> : <textarea id="fetchAnswerDisplay" style={{fontSize:"large",backgroundColor:"white", border:"2px dashed #4c956c", padding:'10px'}}>
                    {fetchedAnswer}
               </textarea>}
              
          </div>
     )
}