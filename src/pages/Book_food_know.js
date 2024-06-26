import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";
import "../Style.css/book_foods.css";
import toast from "react-hot-toast";
import Items from "../component/Items";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Book_food_know() {
  const params = useParams();
  const navigate = useNavigate();

  const foodid = params.foodid;

  const getData = async () => {
    const response = await axios.get(`/api/user/get-info-id/${foodid}`);

    console.log(response.data.data);
  };

  useEffect(() => {
    getData();
  }, [foodid,Items],);

  const onFinish = async (val) => {
    console.log(val);
    console.log(params.foodid);

    console.log(val);
    val.foodid = params.foodid;

    const response = await axios.post("/api/user/food-oder-model", val);

    if (response.data.success) {
      toast.success(response.data.messege);
       navigate('/home')
    }
  };

  return (
    <div className="book-cnt">
      <h2 className="heaid">Book now</h2>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Phone No"
          name="phoneno"
          className="item11"
          rules={[{ required: true, message: "requerd" }]}
        >
          <Input placeholder="Comment" type="Number" />
        </Form.Item>
        <Form.Item
          label="Table No"
          name="table_no"
          className="item11"
          rules={[{ required: true, message: "requerd" }]}
        >
          <Select className="select" value="table">
            <option value="1" />
            <option value="2" />
            <option value="3" />
            <option value="4" />
          </Select>
        </Form.Item>

        <Form.Item
          label="Plates"
          name="plates"
          className="item11"
          rules={[{ required: true, message: "requerd" }]}
        >
          <Input placeholder="Plates" type="Number" />
        </Form.Item>

        <Button className="primery-buttonss" htmlType="submit">
          Oder now
        </Button>
      </Form>
    </div>
  );
}

export default Book_food_know;
