import './blog.css';
import { SlUser } from "react-icons/sl";
import { MdDateRange } from "react-icons/md";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { PagesMotion } from '../../components';
import mainImage from '../../img/main.jpeg';
import headphoneImage from '../../img/headphone.jpeg';
import shoseImage from '../../img/shose.jpeg';
import bagImage from '../../img/bag.jpeg';

function Blog() {
    return (
        <PagesMotion>

            <div className='blog_page container'>
                <div className="heading w-100 d-flex flex-column gap-2">
                    <h4 className='fw-bold mb-0'>our blog</h4>
                    <p className='mb-0 text-black-50 capitalize'>tips, trends, and inspiration for your everyday essentials.</p>
                </div>
                <div className="container my-3">
                    <div className='row main_div d-flex'>
                        <div className="col-12 col-md-4 col-lg-5">
                            <img src={mainImage} alt="" />
                        </div>
                        <div className="info col-12 col-md-8 col-lg-7 mt-3 mt-md-1 d-flex flex-column gap-3">
                            <span className='text-uppercase bg-primary text-light py-1 px-2 rounded-3'>featured</span>
                            <h4 className='fw-bold mb-0'>the tech essentials you need this year</h4>
                            <p className="mb-0 text-black-50 capitalize">from headphones to smartwatches, discover the must have tech accessories that will make your life easier and smarter.</p>
                            <div className='d-flex align-items-center gap-4'>
                                <div className='d-flex align-items-center gap-2 text-black-50'>
                                    <SlUser className='fs-4' />
                                    <p className="mb-0 capitalize">by ahmed abosalha</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 text-black-50'>
                                    <MdDateRange className='fs-4' />
                                    <p className="mb-0 capitalize">oct 20,2026</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 text-black-50'>
                                    <IoBookmarkOutline className='fs-4' />
                                    <p className="mb-0 capitalize">technology</p>
                                </div>
                            </div>
                            <button className='btn btn-primary'>read more <FaArrowRightLong /></button>
                        </div>
                    </div>
                </div>
                <h4 className='fw-bold my-3'>latest articals</h4>
                <div className="container mb-2">
                    <div className="articals gap-2 row">
                        <div className="arti col-12 col-md-3 flex-grow-1 d-flex flex-column gap-2">
                            <div className="image-box">
                                <img src={headphoneImage} alt="" />
                            </div>
                            <p className="text-primary mb-0 fw-bold capitalize">technology</p>
                            <h6 className='mb-0 fw-bold'>best headphones for music,work and travel</h6>
                            <span className='mb-0 fw-bold text-primary'>read artical <FaArrowRightLong /></span>
                        </div>
                        <div className="arti col-12 col-md-3 flex-grow-1 d-flex flex-column gap-2">
                            <div className="image-box">
                                <img src={shoseImage} alt="" />
                            </div>
                            <p className="text-primary mb-0 fw-bold capitalize">fashion</p>
                            <h6 className='mb-0 fw-bold'>top 5 sneakers for everyday style</h6>
                            <span className='mb-0 fw-bold text-primary'>read artical <FaArrowRightLong /></span>
                        </div>
                        <div className="arti col-12 col-md-3 flex-grow-1 d-flex flex-column gap-2">
                            <div className="image-box">
                                <img src={bagImage} alt="" />
                            </div>
                            <p className="text-primary mb-0 fw-bold capitalize">travel</p>
                            <h6 className='mb-0 fw-bold'>must have travel bags and accessories</h6>
                            <span className='mb-0 fw-bold text-primary'>read artical <FaArrowRightLong /></span>
                        </div>
                    </div>
                </div>
            </div>

        </PagesMotion>
    )
}

export default Blog