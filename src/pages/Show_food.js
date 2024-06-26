import React,{useState,useEffect} from "react"
import '../Style.css/Show_food.css'
import axios from 'axios'
import Itemses from '../component/Itemses'
import { Row ,Col} from "antd";


function Show_food() {

 const [item,setItem] = useState([]);



    const reStart = async()=>{
    
    const response  = await axios.get('/api/user/get-all-foods-item')
    console.log(response.data.data);
    if (response.data.success){

      setItem(response.data.data)
      
    }
    
    
    }

    useEffect(()=>{
       reStart()
    },[])
    
  


  

  return( 
  <div>

      <div className="cnt-show">

      
        {item.map((items) => (
          
            <Itemses items={items} />
        
        ))}
    

    
      </div>
      <button className="restarts" onClick={()=>reStart()}>Restart</button>

    
  </div>
  );
}

export default Show_food;
