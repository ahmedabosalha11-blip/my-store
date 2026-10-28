import { Link } from 'react-router-dom';
import './about.css'
import { HiOutlineHomeModern } from "react-icons/hi2";
import { FaArrowRightLong , FaTruckFast  } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { PagesMotion } from '../../components';
import aboutImage from '../../img/WhatsApp Image 2026-10-20 at 7.01.53 PM.jpeg';

function About() {
    return (
        <PagesMotion>
            <div className='container about_page'>
                <div className="heading my-3  d-flex align-items-center gap-2">
                    <HiOutlineHomeModern className='fs-1 text-primary' />
                    <div>
                        <h4 className='fw-bold mb-0'>about <span className='text-primary'>A.A.S</span> store</h4>
                        <p className='mb-0 text-black-50 capitalize'>
                            you trusted destination for quality products
                        </p>
                    </div>
                </div>
                <div className="row mx-1 mx-md-0">
                    <div className="col description  ">
                        <div className="row">
                            <div className="col-12 col-md-6 img-box d-md-none rounded">
                                <img className='w-100 rounded' src={aboutImage} alt="" />
                            </div>
                            <div className="col-12 col-md-6 info my-3 my-md-0">
                                <h3 className='fw-bold'>shopping made simple.</h3>
                                <p className='mb-0 text-black-50 capitalize'>at A.A.S store we make it easy for you to find the best quality products across a wide range of categories. enjoy a smooth shopping experience with secure checkout and reliable delivery, all in one place.</p>
                                <Link to='/' className='btn btn-primary mt-3'>explore products <FaArrowRightLong /></Link>
                            </div>
                            <div className="col-12 col-md-6 img-box d-none d-md-flex justify-content-end rounded">
                                <img className='w-75 rounded' src={aboutImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mx-1 gap-3 justify-content-evenly mx-md-0 my-3">
                    <div className="column col-12 col-md-3 flex-grow-1">
                        <BsFillPatchCheckFill  className='fs-1 text-primary' />
                        <h6 className='mt-1 fw-bold'>qulaity products</h6>
                        <p className='mb-0 text-black-50 capitalize'>we offer carefully selected products from trusted brands to ensure you the best qulaity every time.</p>
                    </div>
                    <div className="column col-12 col-md-3  flex-grow-1">
                        <RiSecurePaymentFill className='fs-1 text-primary' />
                        <h6 className='mt-1 fw-bold'>secure shopping</h6>
                        <p className='mb-0 text-black-50 capitalize'>your data and your payment are protected with advanced security measures for a safe and worry-free experience.</p>
                    </div>
                    <div className="column col-12 col-md-3  flex-grow-1">
                        <FaTruckFast  className='fs-1 text-primary' />
                        <h6 className='mt-1 fw-bold'>fast delivery</h6>
                        <p className='mb-0 text-black-50 capitalize'>we process and ship your orders quickly so you can recieve your favorite products at your doorstep.</p>
                    </div>
                </div>
                <div className="row mx-1 justify-content-center mx-md-0">
                    <div className="footer col-12 gap-2 d-flex flex-column align-items-center">
                        <FaRegHeart className='fs-1 text-primary' />
                        <h6 className='fw-bold mb-0'>why shop with us?</h6>
                        <p className='mb-0 text-black-50 capitalize'>great products,secure payments and reliable delivery all in one place.</p>
                    </div>
                    
                </div>
            </div>
        </PagesMotion>
    )
}

export default About