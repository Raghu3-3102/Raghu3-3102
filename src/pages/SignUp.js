import React, { useState } from 'react'
import '../Style.css/SignUp.css'
import {Button, Col, Form, Input, Row, Select} from 'antd'
import { Option } from 'antd/es/mentions'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'


function SignUp() {

  const navigate = useNavigate()
  

  const onFinish = async (val)=>{

    console.log(val);
  
    const response = await axios.post('/api/user/manage',val)

    console.log(response.data.success);
    

    if(response.data.success)
    {
      toast.success(response.data.messege)
      navigate('/Login')
    }
    else{
      toast.error("user allready exist")
    }




  }



  return (
    <>

     <div className='contener'>

        <div className='form-contener'>

          <Form onFinish={onFinish} layout='horizontal'>

          <Row gutter={50} >
        <Col span={8} xs={24} sm={24} lg={8} className='col1'>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message : "required" }]}
          >
            <Input placeholder=" Name" className='inp'/>
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8} className='col2'>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true , message : "required" }]}
          >
            <Input placeholder=" Email" className='inp'/>
          </Form.Item>
        </Col>

        <Col span={8} xs={24} sm={24} lg={8} className='col3'>
          <Form.Item
            label="passward"
            name="passward"
            rules={[{ required: true  , message : "required"}]}
          >
            <Input placeholder="passward" className='inp'/>
          </Form.Item>
        </Col>

     

        </Row>

        <Button className='primery-button' htmlType='submit'>Sign in</Button>
          
        <Link to = "/login" className='anchor'> click if you  want to Register</Link>

          </Form>

        </div>

     </div>
      
    </>
  )
}

export default SignUp
