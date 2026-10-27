import './contact.css';
import { FaLocationDot, FaSquareWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { TbMessageFilled } from "react-icons/tb";
import { BsShareFill, BsHeadset } from 'react-icons/bs';
import { MdOutlineSupport } from "react-icons/md";
import { FaExclamationCircle } from 'react-icons/fa';
import { MdPhoneMissed } from "react-icons/md";
import { PagesMotion } from '../../components';

function Contact() {
    const handelForm = (e) => {
        e.preventDefault();
    }
    return (
        <PagesMotion>
            <div className='contact container mb-3'>
                <div className="heading w-100 d-flex flex-column  gap-2">
                    <h4 className='fw-bold mb-0'>get in touch</h4>
                    <p className='mb-0 text-black-50'>we are here to help, reach out with any questions, comments, or support requests</p>
                </div>
                <div className="row align-items-center my-5">
                    <div className="col-12 col-md-4">
                        <h3 className='fw-bold mb-0'>contact information.</h3>
                        <div className='d-flex align-items-center gap-2 my-3'>
                            <FaLocationDot className='text-primary fs-1' />
                            <p className='mb-0 text-black-50'>
                                123 tech avenue, cityville, egypt
                            </p>
                        </div>
                        <div className='d-flex align-items-center gap-2 my-3'>
                            <FaPhoneAlt className='text-primary fs-1' />
                            <p className='mb-0 text-black-50'>
                                +20 123 456 789
                            </p>
                        </div>
                        <div className='d-flex align-items-center gap-2 my-3'>
                            <FaSquareWhatsapp className='text-primary fs-1' />
                            <p className='mb-0 text-black-50'>
                                +20 1060 833 136 (whatsApp support)
                            </p>
                        </div>
                        <div className='d-flex align-items-center gap-2 my-3'>
                            <TbMessageFilled className='text-primary fs-1' />
                            <p className='mb-0 text-black-50'>
                                support@aas.com
                            </p>
                        </div>
                        <div className='d-flex align-items-center gap-2 my-3'>
                            <BsShareFill className='text-primary fs-1' />
                            <p className='mb-0 text-black-50'>
                                social : @A.A.S store
                            </p>
                        </div>
                        <p className='fw-bold mb-0'>business hours</p>
                        <p className='text-black-50 mb-0'>mon-fri : 9AM-8PM</p>
                    </div>
                    <div className="col-12 col-md-8 mt-4 mt-md-0">
                        <form className='w-100 d-flex flex-column gap-3' onSubmit={handelForm}>
                            <input className='form-control' type="text" placeholder='full name' />
                            <input className='form-control' type="email" placeholder='email address' />
                            <input className='form-control' type="text" placeholder='subject' />
                            <textarea className='form-control'></textarea>
                            <button className='btn btn-primary'>submit</button>
                        </form>
                    </div>
                </div>
                <div className="footer mt-5">
                    <p className='mb-0 fw-bold'>Need Help? Our team is always ready to assist you with any questions.</p>
                    <div className="row mt-3">
                        <div className="col-6 col-md-3 d-flex align-items-center gap-2 ">
                            <BsHeadset className='fs-1' />
                            <p className='mb-0 fw-bold'>customer services</p>
                        </div>
                        <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                            <MdOutlineSupport className='fs-1' />
                            <p className='mb-0 fw-bold'>orders support</p>
                        </div>
                        <div className="col-6 col-md-3 d-flex align-items-center mt-3 mt-md-0 gap-2 ">
                            <FaExclamationCircle className='fs-1' />
                            <p className='mb-0 fw-bold'>customer guides</p>
                        </div>
                        <div className="col-6 col-md-3 d-flex align-items-center mt-3 mt-md-0  gap-2">
                            <MdPhoneMissed className='fs-1' />
                            <p className='mb-0 fw-bold'>customer services</p>
                        </div>
                    </div>
                </div>
            </div>
        </PagesMotion>
    )
}

export default Contact
