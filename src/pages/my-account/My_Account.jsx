import { PagesMotion } from '../../components';
import './my-account.css';
import { FiPhone } from "react-icons/fi";
import { MdOutlineDateRange, MdOutlinePayment, MdOutlineMessage, MdOutlineSupport, MdPhoneMissed } from "react-icons/md";
import { BsBuildingAdd, BsGear, BsHeadset } from "react-icons/bs";
import { FaRegHeart, FaRegNewspaper, FaKey, FaExclamationCircle } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsFillBox2HeartFill } from "react-icons/bs";
import { TfiMapAlt } from "react-icons/tfi";
import avatarImage from '../../img/avatar.jpeg';

function My_Account() {
    return (
        <PagesMotion>
            <div className='my_account_page container'>
                <div className="heading w-100 d-flex flex-column mb-3 gap-2">
                    <h4 className='fw-bold mb-0'>my account</h4>
                    <p className='mb-0 text-black-50 capitalize'>manage your profile, orders, and details here.</p>
                </div>
                <div className="main container">
                    <div className="row gap-2">
                        <div className="profile col-12 col-lg-3 d-flex flex-column gap-3 align-items-center">
                            <h4>profile summary</h4>
                            <div className="image-box">
                                <img src={avatarImage} alt="" />
                            </div>
                            <h5>ahmed abosalha</h5>
                            <p className="text-black-50 mb-0 capitalize"><MdOutlineMessage /> @ahmed.net</p>
                            <p className="text-black-50 mb-0 capitalize"><FiPhone /> +20 109 2447 690</p>
                        </div>
                        <div className="activity col-12 col-lg-8 flex-grow-1">
                            <h4 className='mb-4'>activity feed & orders</h4>
                            <div className="container">
                                <div className="row gap-2">
                                    <div className="stats col-lg-5 d-flex flex-column gap-4 flex-grow-1">
                                        <h4 className='mb-2'>quick stats</h4>
                                        <div className='d-flex align-items-center justify-content-around'>
                                            <div className='d-flex align-items-center gap-2'>
                                                <MdOutlineDateRange className='fs-3' />
                                                <div>
                                                    <p className="mb-0 capitalize">25</p>
                                                    <p className="mb-0 capitalize">total orders</p>
                                                </div>
                                            </div>
                                            <div className='d-flex align-items-center gap-2'>
                                                <BsBuildingAdd className='fs-3' />
                                                <div>
                                                    <p className="mb-0 capitalize">8</p>
                                                    <p className="mb-0 capitalize">wishlist items</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-around'>
                                            <div className='d-flex align-items-center gap-2'>
                                                <FaRegHeart className='fs-3' />
                                                <div>
                                                    <p className="mb-0 capitalize">8</p>
                                                    <p className="mb-0 capitalize">favorit</p>
                                                </div>
                                            </div>
                                            <div className='d-flex align-items-center gap-2'>
                                                <IoLocationOutline className='fs-3' />
                                                <div>
                                                    <p className="mb-0 capitalize">3</p>
                                                    <p className="mb-0 capitalize">address entries</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="orders col-lg-6 flex-grow-1">
                                        <h4>recent orders</h4>
                                        <table className='w-100'>
                                            <thead>
                                                <tr>
                                                    <th className='text-center'>order id</th>
                                                    <th className='text-center'>date</th>
                                                    <th className='text-center'>order status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='text-center p-2 capitalize'>order001</td>
                                                    <td className='text-center p-2 capitalize'>0ct 20,2026</td>
                                                    <td className='text-center p-2'><span className='bg-success py-1 px-2 rounded-4 capitalize'>shipped</span></td>
                                                </tr>
                                                <tr>
                                                    <td className='text-center p-2 capitalize'>order001</td>
                                                    <td className='text-center p-2 capitalize'>0ct 20,2026</td>
                                                    <td className='text-center p-2'><span className='bg-warning py-1 px-2 rounded-4 capitalize'>processing</span></td>
                                                </tr>
                                                <tr>
                                                    <td className='text-center p-2 capitalize'>order001</td>
                                                    <td className='text-center p-2 capitalize'>0ct 20,2026</td>
                                                    <td className='text-center p-2'><span className='bg-danger py-1 px-2 rounded-4 capitalize'>cancelled</span></td>
                                                </tr>
                                                <tr>
                                                    <td className='text-center p-2 capitalize'>order001</td>
                                                    <td className='text-center p-2 capitalize'>0ct 20,2026</td>
                                                    <td className='text-center p-2'><span className='bg-success py-1 px-2 rounded-4 capitalize'>shipped</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-2 container">
                    <div className="actions gap-2 row">
                        <div className="act col-5 col-md-2 d-flex align-items-center justify-content-between flex-grow-1">
                            <div>
                                <FaRegHeart className='fs-3 mb-2' />
                                <p className='fw-bold mb-0 capitalize'>go to wishlist</p>
                            </div>
                            <BsFillBox2HeartFill className='fs-1' />
                        </div>
                        <div className="act col-5 col-md-2 d-flex align-items-center justify-content-between flex-grow-1">
                            <div>
                                <FaRegNewspaper className='fs-3 mb-2' />
                                <p className='fw-bold mb-0 capitalize'>track order</p>
                            </div>
                            <TfiMapAlt className='fs-1' />
                        </div>
                        <div className="act col-5 col-md-2 d-flex align-items-center justify-content-between flex-grow-1">
                            <div>
                                <BsGear className='fs-3 mb-2' />
                                <p className='fw-bold mb-0 capitalize'>account setting</p>
                            </div>
                            <FaKey className='fs-1 text-warning' />
                        </div>
                        <div className="payment act col-5 col-md-2 d-flex flex-column gap-2 flex-grow-1">
                            <div className='d-flex gap-2 align-items-center'>
                                <MdOutlinePayment className='fs-3' />
                                <p className='fw-bold mb-0 capitalize'>payment methods</p>
                            </div>
                            <div className='d-flex gap-2 align-items-center'>
                                <IoLocationOutline className='fs-3' />
                                <p className='fw-bold mb-0 capitalize'>address book</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer my-2">
                    <p className='mb-0 fw-bold capitalize'>Need Help? Our team is always ready to assist you with any questions.</p>
                    <div className="row mt-3">
                        <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                            <BsHeadset className='fs-1' />
                            <p className='mb-0 fw-bold capitalize'>customer services</p>
                        </div>
                        <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                            <MdOutlineSupport className='fs-1' />
                            <p className='mb-0 fw-bold capitalize'>orders support</p>
                        </div>
                        <div className="col-6 col-md-3 d-flex align-items-center mt-3 mt-md-0 gap-2">
                            <FaExclamationCircle className='fs-1' />
                            <p className='mb-0 fw-bold capitalize'>customer guides</p>
                        </div>
                        <div className="col-6 col-md-3 d-flex align-items-center mt-3 mt-md-0 gap-2">
                            <MdPhoneMissed className='fs-1' />
                            <p className='mb-0 fw-bold capitalize'>customer services</p>
                        </div>
                    </div>
                </div>
            </div>
        </PagesMotion>
    )
}

export default My_Account