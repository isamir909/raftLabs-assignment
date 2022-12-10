
function getPossiblePosition(input,col,row){
if(col>0 && col<=8 && row>0 && row<=8 ){
  return(col.toString()+row.toString())
}
}

const validPosition= (val)=>{
  let colInput=Number(val[0])
  let rowInput=Number(val[1])
  let result=[]
  let possible=[
    getPossiblePosition(val,colInput+1,rowInput+2),
    getPossiblePosition(val,colInput+2,rowInput+1),
    getPossiblePosition(val,colInput+2,rowInput-1),
    getPossiblePosition(val,colInput+1,rowInput-2),
    getPossiblePosition(val,colInput-1,rowInput+2),
    getPossiblePosition(val,colInput-2,rowInput+1),
    getPossiblePosition(val,colInput-2,rowInput-1),
    getPossiblePosition(val,colInput-1,rowInput-2),
  
  ]
  for(let i=0;i<possible.length;i++){
    let temp= possible[i]
   if(temp){result.push(temp)}
  }
return result
}

export default validPosition