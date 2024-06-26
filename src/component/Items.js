import React,{useState} from 'react'
import Home from '../pages/Home'
import { useNavigate } from 'react-router-dom'
import '../Style.css/Item.css'


function Items({items}) {

  const navigate = useNavigate()

  return (
    <div>
      <div className='card' onClick={()=>{navigate(`/Book_food/${items._id}`)}}>

       <div className = "img-cnt2">
                                      
       </div>

       <h3 className='data'>  name  : {items.itemsName}</h3>
       <h3 className='data' > price : {items.itemsPrice}</h3>
       <h3 className='data' > rating : {items.itemsRating}</h3>
       <h3 className='data' > time : {items.itemmakingTime}</h3>
       


      </div>
    </div>
  )
}

export default Items
