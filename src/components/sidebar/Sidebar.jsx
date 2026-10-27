import { useContext } from "react"
import { cartContext } from "../cartProvider/CartProvider"
import { IoBagHandle, IoClose, IoHome } from "react-icons/io5"
import { FaAngleRight } from "react-icons/fa6";
import { FaBloggerB , FaHeart  } from "react-icons/fa";
import { FaInfoCircle, FaEnvelope, FaUser, FaQuestionCircle, FaFacebookF , FaYoutube , FaInstagram   } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { FaXTwitter , FaCartShopping  } from "react-icons/fa6";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"
function Sidebar() {
    const { sidebarMood, setSidebarMood } = useContext(cartContext)
    const location = useLocation(null);
    return (
        <div className={`sidebar  ${sidebarMood ? 'open' : ''} d-md-none`}>
            <div className="logo d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                    <IoBagHandle className='bag text-primary' />
                    <div>
                        <h1 className='fw-bold mb-0'>A.A.S</h1>
                        <h5 className='mb-0'> <span className='text-primary'>online</span> store</h5>
                    </div>
                </div>
                <button onClick={() => setSidebarMood(false)} className="btn btn-outline-primary p-1"><IoClose className="fs-1" /></button>
            </div>
            <hr className="text-black-50 my-4" />
            <div className="pages d-flex flex-column gap-4 w-100">
                <Link to='/' className={`d-flex align-items-center justify-content-between ${location.pathname == '/' ? 'active_page' : ''}`}>
                    <div className="d-flex align-items-center gap-3">
                        <IoHome className="fs-2" />
                        <p className="mb-0">home</p>
                    </div>
                    <FaAngleRight />
                </Link>
                <Link to='/blog' className={`d-flex align-items-center justify-content-between ${location.pathname == '/blog' ? 'active_page' : ''}`}>
                    <div className="d-flex align-items-center gap-3">
                        <FaBloggerB className="fs-2" />
                        <p className="mb-0">blog</p>
                    </div>
                    <FaAngleRight />
                </Link>
                <Link to='/contact' className={`d-flex align-items-center justify-content-between ${location.pathname == '/contact' ? 'active_page' : ''}`}>
                    <div className="d-flex align-items-center gap-3">
                        <FaEnvelope className="fs-2" />
                        <p className="mb-0">contact</p>
                    </div>
                    <FaAngleRight />
                </Link>
                <Link to='/my-account' className={`d-flex align-items-center justify-content-between ${location.pathname == '/my-acount' ? 'active_page' : ''}`}>
                    <div className="d-flex align-items-center gap-3">
                        <FaUser className="fs-2" />
                        <p className="mb-0">my account</p>
                    </div>
                    <FaAngleRight />
                </Link>
                <Link to='/cart' className={`d-flex align-items-center justify-content-between ${location.pathname == '/cart' ? 'active_page' : ''}`}>
                    <div className="d-flex align-items-center gap-3">
                        <FaCartShopping className="fs-2" />
                        <p className="mb-0">cart</p>
                    </div>
                    <FaAngleRight />
                </Link>
                <Link to='/fav' className={`d-flex align-items-center justify-content-between ${location.pathname == '/fav' ? 'active_page' : ''}`}>
                    <div className="d-flex align-items-center gap-3">
                        <FaHeart  className="fs-2" />
                        <p className="mb-0">wishlist</p>
                    </div>
                    <FaAngleRight />
                </Link>

            </div>
            <hr className="text-black-50 my-4" />
            <div className='d-flex align-items-center justify-content-between '>
                <div className="d-flex align-items-center gap-3">
                    <MdDarkMode className="fs-1" />
                    <p className="mb-0">dark mood</p>
                </div>
                <div className="form-check mb-0 form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        defaultChecked
                        style={{ transform: 'scale(1.4)', cursor: 'pointer' }}
                    />
                </div>
            </div>
            <hr className="text-black-50 my-4" />
            <div className="d-flex flex-column align-items-center mt-5">
                <p className="text-black-50">shop smart, live better</p>
                <div className="d-flex align-items-center justify-content-center gap-2">
                    <div className="social">
                        <FaFacebookF />
                    </div>
                    <div className="social">
                        <FaYoutube />
                    </div>
                    <div className="social">
                        <FaInstagram />
                    </div>
                    <div className="social">
                        <FaXTwitter  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
