import React  from 'react'
import { Form ,Row,Col,Input,Select, Button} from 'antd'
import '../Style.css/Serving_item.css'
import img from '../images/food_3.jpg'
import toast from "react-hot-toast";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Serving_item() {

  const navigate = useNavigate()

  const onFinish = async (val) => {
    try {
      
    console.log(val);
    toast("Redirecting to login page");
  

    const response = await axios.post('/api/user/serving',val)

    if (response.data.success) {

      toast.success(response.data.messege)
      navigate('/home')
      
      
    }
    console.log(response);

      
    } catch (error) {
      
    }
  }

  return (
    <div>

      <div className='continer'>
            
            <div className='register-contener'>

                  <h3 className='heading'>I hope thish item is best all of them</h3>
         
      <Form onFinish={onFinish}>

<Row gutter={20}>
 <Col span={24} xs={24} sm={24} lg={20} className='col1' >
 <Form.Item
       label="ItemName"
       name="itemsName"
       rules={[{ required: true, message : "required" }]}
       className=''
     >
       <Input placeholder=" Name" className='inp'/>
     </Form.Item>
 </Col>

 <Col span={24} xs={24} sm={24} lg={20} className='col2' >
 <Form.Item
       label="itemsPrice"
       name="itemsPrice"
       rules={[{ required: true, message : "required" }]}
       className=''
     >
       <Input placeholder=" Name" className='inp'/>
     </Form.Item>
 </Col>

 <Col span={24} xs={24} sm={24} lg={20} className='col3' >
 <Form.Item
       label="itemmakingTime"
       name="itemmakingTime"
       rules={[{ required: true, message : "required" }]}
       className=''
     >
       <Input placeholder=" Name" className='inp'/>
     </Form.Item>
 </Col>

 <Col span={24} xs={24} sm={24} lg={20} className='col4' >
 <Form.Item
       label="servingType"
       name="servingType"
       rules={[{ required: true, message : "required" }]}
       className=''
     >
       <Select className='select' value="select">
        <option value="food"/>
        <option value="drinks"/>
        <option value="snacks"/>
        <option value="desert"/>
       </Select>
     </Form.Item>
 </Col>

 <Col span={24} xs={24} sm={24} lg={20} className='col5' >
 <Form.Item
       label="itemsRating"
       name="itemsRating"
       rules={[{ required: true, message : "required" }]}
       className=''
     >
       <Select className='select' value="select">
        <option value="1"/>
        <option value="2"/>
        <option value="3"/>
        <option value="4"/>
        <option value="5"/>
       </Select>
     </Form.Item>
 </Col>




</Row>
  
  <Button  className='primery-button' htmlType='submit'>Submit</Button>

  
 </Form>

            </div>

            <div className='pics-cnt'>

             <img src={img} alt="" srcset="" />
            
            </div>
       

      </div>
      
    </div>
  )
}

export default Serving_item
