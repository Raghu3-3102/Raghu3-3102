import React,{useState,useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../Style.css/Book_food.css'
import axios from 'axios'
import Items from '../component/Items'
import { Col, Row } from 'antd'


function Book_food() {

    const params = useParams()
    console.log(params.foodid);
    const navigate = useNavigate();
    const [food_data , setFood_data] = useState(null);
    const [food_type,setFood_type] = useState([]);
    const foodid = params.foodid;

    const getData = async () => {

        const response = await  axios.get(`/api/user/get-info-id/${foodid}`)

        console.log(response.data.data);
        setFood_data(response.data.data)

        

    }

 


     const getAllData = async () =>{

    const response = await axios.get('/api/user/get-items')

    if (response.data.success) {

      setFood_type(response.data.data)
      
    }





  }

    console.log(food_data);
    console.log(food_type);

    useEffect(()=>{

        getData()
        getAllData()


    },[foodid])

    

  return (
    <div>
      <div className='food-cnt'>
        <div className='left-cnt'>

        {food_data &&  <div className='card-food'>
         <h1 className='head'>Enjoye Your Food</h1>
          <h3 className='item1'>Food Name : {food_data.itemsName}</h3>
          <h3 className='item1'>Food Price : {food_data.itemsPrice}</h3>
          <h3 className='item1'>Food Rating : {food_data.itemsRating} &#9733; </h3>
          <h3 className='item1'>Food on Table : {food_data.itemmakingTime} min</h3>
          <h3 className='item1'>Food Type : {food_data.servingType}</h3>
        

          <button className='buttons' onClick={()=>{navigate(`/books/${food_data._id}`)}}>Oder NOW</button>
          
         </div>}

        </div>

      

      <div className='right-cnt'>

      <Row gutter={8}>
        {food_type.map((items) => (
          <Col span={12} xs={14} sm={4} lg={12}>
            <Items items={items} />
          </Col>
        ))}
      </Row>
      

      </div>

        </div>
      
    </div>
  )
}

export default Book_food
