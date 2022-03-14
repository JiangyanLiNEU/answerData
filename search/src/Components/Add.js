import { useState } from 'react';
import styled from 'styled-components';
import './style.css';
import { postOne } from '../questionService';
export const Add = (props) => {
     const [newQuestion, setnewQuestion] = useState("delete me and add a new one");
     const [newAnswer, setnewAnswer] = useState("");
     const show = false
     const divStyle = {
          padding:"10px"
     }
     const addStyle ={
          fontFamily:"'Lobster', cursive",
          fontSize:"xxx-large"
     }
     const textareaStyle={
          border:"2px dashed #4c956c",
          
     }
     const labelStyle = {
          color:"#d68c45",
          fontFamily:"'Lobster', cursive",
          fontSize:"x-large"
     }

     const Button = styled.button`
     background:#fefee3;
     font-size: 1.5em;
     border-radius: 15%;
     padding: 5px;
     margin-top: 10px;
     cursor: pointer;

    `
    const handleQuestionChange = (e) => {
     // console.log("Question changed: ", e.target.value)
     setnewQuestion(e.target.value)
   }
   const handleAnswerChange = (e) => {
     // console.log("Answer changed: ", e.target.value)
     setnewAnswer(e.target.value)
   }
   const notifySuccess = () => {
        setnewQuestion("delete me and add a new one")
        setnewAnswer("")
        show = true;
   }

   const handleSubmit = async (e)=>{
        e.preventDefault()
        const {data} = await postOne({question: newQuestion, answer: newAnswer})
        notifySuccess()
   }

     return (
          <div style={divStyle}>
               <form onSubmit={handleSubmit}>
               <span style={addStyle}>Add</span>
               <label id='addNewQuestion' style={labelStyle} ><h3>New Question:</h3></label>
               <div><textarea onChange={handleQuestionChange} value={newQuestion} id='question' style={textareaStyle} rows='5' cols='50'></textarea></div>
               <label id='addNewAnswer' style={labelStyle}><h3>New Answer:</h3></label>
               <div> <textarea onChange={handleAnswerChange} value={newAnswer}  id='answer' style={textareaStyle} rows='5' cols='50'></textarea></div>
              <Button type='submit' id='AddBTN' className='Button'>Add</Button>
              </form>
          </div>
     )
}