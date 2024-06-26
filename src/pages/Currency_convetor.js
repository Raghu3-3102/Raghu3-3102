import React,{useState,useEffect} from 'react'


const colour = ['red','blue','green']


function Currency_convetor() {

 
  return (
   <div>
     {colour.map((data,index,ptani)=>{

      return(
       <div>{index},{data},{ptani}</div>
      )

     })}
   </div>
  )
}

export default Currency_convetor;
