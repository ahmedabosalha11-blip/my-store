import './header.css';
import axios from 'axios';
import { useState , useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { HiBars4 , HiMiniBars4  } from "react-icons/hi2";
import { CiLogin } from "react-icons/ci";
import { IoPersonAdd } from "react-icons/io5";
import { MdOutlineLiveHelp } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";

import { useContext } from "react"
import { cartContext } from "../cartProvider/CartProvider"

const navLinks = [
  {title:'home' , link:'/'},
  {title:'blog' , link:'/blog'},
  {title:'contact' , link:'/contact'},
  {title:'my account' , link:'/my-account'}
]
function BottomHeader() {
  const {setSidebarMood , sidebarMood} = useContext(cartContext)
  const Location = useLocation(null);
  const [categories,setCategories] = useState([]);

  useEffect(()=>{
    const getAllCategories = async ()=>{
      try{
        const res = await axios.get('https://dummyjson.com/products/categories');
        setCategories(res.data)
      }catch(err){
        console.log(err);
      }
    }
    getAllCategories()
  },[])


  return (
    <div className='bottom-header bg-primary'>
      <div className="container d-flex align-items-center justify-content-between">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle fw-bold"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          > 
            all categories
          </button>
          <ul className="dropdown-menu w-100">
            {categories.map((category,i)=>{
              return <li key={i}><Link to={`/category/${category.slug}`}>{category.name}</Link></li>
            })}
          </ul>
        </div>
        
        <div className="nav-links d-flex justify-content-center flex-grow-1">
            <ul className='d-none w-75 d-md-flex justify-content-evenly'>
                {navLinks.map(link =>{
                  return <li className={Location.pathname === link.link ? 'active' : ''} key={link.title}><Link className='h-100 text-light d-flex align-items-center' to={link.link}>{link.title}</Link></li>
                })}
            </ul>
        </div>
        <div className="icons-section d-flex align-items-center ms-4 gap-2">
            <HiMiniBars4 onClick={()=>setSidebarMood(!sidebarMood)} className='d-md-none fs-5 text-light'/>
            <Link to='/help'><MdOutlineLiveHelp className='fs-5 d-none d-md-block text-light mb-1'/></Link>
            <Link to='/about'><FaInfoCircle className='fs-5 d-none d-md-block text-light mb-1'/></Link>
        </div>
      </div>
    </div>
  )
}

export default BottomHeader
