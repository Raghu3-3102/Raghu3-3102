import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../Style.css/Home.css'
import Items from '../component/Items';
import { Col, Row } from 'antd';
import Layout from './Layout';



function Home() {

const [item,setItem] = useState([])
const data = "data"

  console.log("riched")

  const getData = async () =>{

    const response = await  axios.get('/api/user/get-items')
    console.log(response.data.data)
    setItem(response.data.data)
  

  }

  console.log(item);

  useEffect(()=>{
  
    getData()
  
  },[])

  return (
    <>

<Layout>

<Row gutter={0}>
        {item.map((items) => (
          
          <Col span={8} xs={2} sm={8} lg={8}>
            <Items items={items} />
          </Col>
        ))}
      </Row>

</Layout>
   
    
     
     
    </>
  )
}

export default Home
