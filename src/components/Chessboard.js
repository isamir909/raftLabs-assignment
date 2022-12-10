import React, { useState } from "react";
import "./Chessboard.css"

const verticalAxis=["1","2","3","4","5","6","7","8"];
// const horizontalAxis=["a","b","c","d","e","f","g","h"];
const horizontalAxis=["1","2","3","4","5","6","7","8"];

// interface Props{
//   e:MouseEventHandler<HTMLDivElement>
//   target:Array;
// }


export default function Chessboard(){ 
  const [selected,setSelected]=useState([])

  const handleClick = (event) => {
      
    console.log(event.target.value);
    setSelected([event.target.value])

  };

  let board=[];
    for(let i=verticalAxis.length-1;i>=0;i--){
      for(let j=0;j<horizontalAxis.length;j++){
        let num=`${horizontalAxis[j]}${verticalAxis[i]}`
        // let num1=`${horizontalAxis[j]}${verticalAxis[i]}`
        if((i+j+2)%2===0){
          board.push(
            <button key={`${i},${j}`}  value={num}   onClick={(event)=>handleClick(event)} className={`board-green-box ${selected.includes(horizontalAxis[j]+verticalAxis[i]) ? 'possibleWays': ''}`}> [{horizontalAxis[j]}{verticalAxis[i]}]</button>
          )
        }
        else{
          board.push(
          
            <button  key={`${i},${j}`}  value={num}   onClick={(event)=>handleClick(event)} className="board-white-box">[{horizontalAxis[j]}{verticalAxis[i]}]</button>
          )
        }
      }
    }
  return (
      <div id="chessboard">{board}</div>
  ) 

};