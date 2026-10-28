import { IoHelpBuoyOutline } from "react-icons/io5";
import './help.css';
import { FaArrowRightLong } from 'react-icons/fa6';
import { BsChatText } from "react-icons/bs";
import { PiShippingContainerBold } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PagesMotion } from '../../components';
import { Link } from "react-router-dom";
import helpImage from '../../img/Gemini_Generated_Image_l6o1g3l6o1g3l6o1.jpg';

function Help() {
    return (
        <PagesMotion>
            <div className='container help_page'>
                <div className="heading my-4  d-flex align-items-center gap-2">
                    <IoHelpBuoyOutline className='text-primary' />
                    <div>
                        <h4 className='fw-bold mb-0'>help center</h4>
                        <p className='mb-0 text-black-50'>
                            we are here to help! find answers to your questions or get in touch with our support team
                        </p>
                    </div>
                </div>
                <div className="row mx-1 mx-md-0">
                    <div className="col description  ">
                        <div className="row">
                            <div className="col-12 col-md-6 img-box d-md-none rounded">
                                <img className='w-100 rounded' src={helpImage} alt="" />
                            </div>
                            <div className="col-12 col-md-6 info my-3 my-md-0">
                                <h3 className="fw-bold">need help? you are in the right place.</h3>
                                <p className='mb-0 text-black-50'>Whether you have a question about an order, a product, shipping, or anything else, we've got you covered. Browse our help topics below or get in touch with our support team — we're always happy to assist you.</p>
                                <Link className='btn btn-primary mt-3'><BsChatText className="fs-5" /> contact support <FaArrowRightLong /></Link>
                            </div>
                            <div className="col-12 col-md-6 img-box d-none d-md-flex justify-content-end rounded">
                                <img className='w-75 rounded' src={helpImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mx-1 gap-3 justify-content-evenly mx-md-0 my-3">
                    <div className="column col-12 col-md-3 flex-grow-1">
                        <PiShippingContainerBold  className='fs-1 text-primary' />
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <h6 className='mt-1 fw-bold'>orders & shipping</h6>
                                <p className='mb-0 text-black-50'>Track your order, view shipping details, and learn about delivery times.</p>
                            </div>
                            <FaArrowRightLong className="fs-4 text-primary"/>
                        </div>
                    </div>
                    <div className="column col-12 col-md-3 flex-grow-1">
                        <MdPayment  className='fs-1 text-primary' />
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <h6 className='mt-1 fw-bold'>payments</h6>
                                <p className='mb-0 text-black-50'>Find information about payment methods, refunds and failed transactions.</p>
                            </div>
                            <FaArrowRightLong className="fs-4 text-primary"/>
                        </div>
                    </div>
                    <div className="column col-12 col-md-3 flex-grow-1">
                        <MdCurrencyExchange  className='fs-1 text-primary' />
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <h6 className='mt-1 fw-bold'>returns & exchanges</h6>
                                <p className='mb-0 text-black-50'>Learn how to return or exchange a product and check our return policy.</p>
                            </div>
                            <FaArrowRightLong className="fs-4 text-primary"/>
                        </div>
                    </div>
                    <div className="column col-12 col-md-3 flex-grow-1">
                        <FaRegUser  className='fs-1 text-primary' />
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <h6 className='mt-1 fw-bold'>account & profile</h6>
                                <p className='mb-0 text-black-50'>Manage your account, update your details, and reset your password.</p>
                            </div>
                            <FaArrowRightLong className="fs-4 text-primary"/>
                        </div>
                    </div>
                    <div className="column col-12 col-md-3 flex-grow-1">
                        <FaClipboardCheck  className='fs-1 text-primary' />
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <h6 className='mt-1 fw-bold'>product information</h6>
                                <p className='mb-0 text-black-50'>Get help with product details, sizes, features and availability.</p>
                            </div>
                            <FaArrowRightLong className="fs-4 text-primary"/>
                        </div>
                    </div>
                    <div className="column col-12 col-md-3 flex-grow-1">
                        <IoDocumentTextOutline  className='fs-1 text-primary' />
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <h6 className='mt-1 fw-bold'>general questions</h6>
                                <p className='mb-0 text-black-50'>Find answers to common questions about our store and services.</p>
                            </div>
                            <FaArrowRightLong className="fs-4 text-primary"/>
                        </div>
                    </div>
                </div>
            </div>
        </PagesMotion>
    )
}

export default Help