
import React,{useState} from 'react'
import '../Style.css/SignUp.css'
import {Button, Col, Form, Input, Row, Select} from 'antd'
import { Option } from 'antd/es/mentions'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Serving_item from './Serving_item'
import toast from 'react-hot-toast'
import Layout from './Layout';

function SignUp_show() {
    const navigate = useNavigate()
    const [user,setUser] = useState()
  
      const onFinish = async (val)=>{
          
        const response = await axios.post('/api/user/get-manager',val)
  
        if (response.data.success) {
  
           if (response.data.data.isChef) {
  
          toast.success(response.data.message);
          setUser(response.data.data)
          console.log(response.data.data);
          navigate('/Show_food')
              
          }
          else{
              navigate('/home')
              console.log("not");
              toast.error("you are not valid");
              
          }
  
           }else{

                navigate('/home')
              console.log("not");
              toast.error("Email is incorrect");

           }
           
      }
    
  return (
    <div>
    <div className='contener'>

<div className='form-contener'>

<Form onFinish={onFinish} layout='horizontal'>

<Row gutter={50} >
<Col span={8} xs={24} sm={24} lg={8} className='col1'>
<Form.Item
 label="Email"
 name="email"
 rules={[{ required: true , message : "required" }]}
>
 <Input placeholder=" Email" className='inp'/>
</Form.Item>
</Col>

<Col span={8} xs={24} sm={24} lg={8} className='col2'>
<Form.Item
 label="passward"
 name="passward"
 rules={[{ required: true  , message : "required"}]}
>
 <Input placeholder="passward" className='inp'/>
</Form.Item>
</Col>



</Row>

<Button className='primery-buttons' htmlType='submit'>Sign in</Button>

<Link to = "/" className='anchor'> click if you  want to Register</Link>

</Form>

</div>


</div>

 </div>
  )
}

export default SignUp_show
