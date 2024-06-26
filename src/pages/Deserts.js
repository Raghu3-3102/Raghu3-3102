import React,{useEffect,useState} from 'react'
import Layout from './Layout'
import axios from 'axios'
import { Col, Row } from 'antd';
import '../Style.css/Home.css'
import Items from '../component/Items'

function Deserts() {

    
    const [item,setItem] = useState([]);

    const servingType = {"servingType" : "desert"};
       
 

    const getFood = async ()=>{

        const response = await axios.post('/api/user/get-item-by-food-type',servingType)
        console.log(response);
        if (response.data.success) {

            setItem(response.data.data)
            console.log(response.data.data);
            
        }

    }

 useEffect(()=>{
       
        getFood()

    },[])




  return (
    <Layout>
      
      <Row gutter={0}>
        {item.map((items) => (
          <Col span={8} xs={2} sm={8} lg={8}>
            <Items items={items} />
          </Col>
        ))}
      </Row>

    </Layout>
  )
}

export default Deserts
