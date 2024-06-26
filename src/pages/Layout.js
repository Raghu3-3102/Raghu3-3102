import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import SignUp from './SignUp'
import img from '../images/food3.jpg'
import '../Style.css/Layout.css'


function Layout({children}) {

    const location = useLocation();
    const navigate = useNavigate();
    

    const isCustemer = [

        {
            name : 'Home',
            path : "/home",
            icon : "ri-home-line"

        },
        {
            name : 'Foods',
            path : "/foods",
            icon : "ri-restaurant-line"

        },
        {
            name : 'Drinks',
            path : "/drinks",
            icon : "ri-goblet-fill"

        },
        {
            name : 'Snakes',
            path : "/snackes",
            icon : "ri-cake-3-line"

        },
        {
            name : 'Desert',
            path : "/desert",
            icon : "ri-cake-2-line"

        },
       

    ]

    const isAdmin = [

        {
            name : 'Home',
            path : "/home",
            icon : "ri-home-line"

        },
        {
            name : 'Foods',
            path : "/foods",
            icon : "ri-restaurant-line"

        },
        {
            name : 'Drinks',
            path : "/drinks",
            icon : "ri-goblet-fill"

        },
        {
            name : 'Snakes',
            path : "/snackes",
            icon : "ri-cake-3-line"

        },
        {
            name : 'Desert',
            path : "/desert",
            icon : "ri-cake-2-line"

        },
        {
            name : 'currency-convetor',
            path : "/Sign_up",
            icon : "ri-money-cny-box-line"

        },

    ]

  return (
    <div>

     <div className='navbar'>

        <div className='heaid'>Rs</div>

        <div className='menu'>
            {isCustemer.map((menu)=>{

            //  const isActive = location.pathname === menu.path;

             return(

                <div className='item'>

                 <Link to={menu.path}>
                    {" "}
                    <i className={menu.icon}></i>
                  </Link>


                </div>

             )
             
              


            })}

            <div>
                <i class="ri-file-list-line my-list" onClick={()=>{navigate('/SignUp-manager')}}></i>
            </div>
        </div>

       


     </div>

     <div className='main-cnt'>

     <img src={img} alt="" srcset="" className='img-cnt' />
        

     </div>

     <div className='body'>{children}</div>

     <div className='view-cnt'>
        
     </div>
     <div className='footer-cnt'></div>

      
    </div>
  )
}

export default Layout
