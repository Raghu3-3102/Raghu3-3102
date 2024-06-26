import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Style.css/Itemses.css'
import '../Style.css/Item.css'
import { Button } from 'antd';
import toast from 'react-hot-toast'

function Itemses ({items}){
const [foodinfo,setFoodinfo] = useState([])
const [delinfo,setDelInfo] = useState()
    
    console.log(items)
    

    const getData = async()=>{
      const response = await axios.post('/api/user/get-all-foods-to-show',items)
      console.log(response.data.data);
      setFoodinfo(response.data.data)
    }

    useEffect(()=>{
       getData()
    },[items,delinfo])
    

   

    const onDelete =  async(val)=>{
      console.log(val);

      const responed = await axios.post('/api/user/Delete-oder',val)
      if (responed.data.success){

        toast.success(responed.data.message)
        setDelInfo(responed.data.data)

        
      }else{
        toast.error('Error to delete')
      }

    }


   
  
    
    


  return (
    <div>
      <div className='cnt-booked'>
      <div className = "img-cnt2">
        <i class="ri-close-circle-line btns" onClick={()=>{onDelete(items)}}></i>
                                      
       </div>
       <h3>Food name : {foodinfo.itemsName}</h3>
       <h3>Making time : {foodinfo.itemmakingTime} min</h3>
       <h3>User Info : {items.phoneno}</h3>
       <h3>User table : {items.table_no}</h3>
       <h3>Quntety : {items.plates}</h3>
       <Button className='Btn'><i class="ri-check-double-line correct"></i></Button>
                               
          
      </div>
    </div>
  )
}

export default Itemses
