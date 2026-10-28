import './confirm.css';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong, FaCircleXmark, FaCreditCard } from "react-icons/fa6";
import { RiCashLine } from "react-icons/ri";
import { FaHandHoldingUsd } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";
import { TbShoppingCartOff } from "react-icons/tb";
import { CiLock } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

import { useContext, useState } from 'react';
import { cartContext } from '../../components/cartProvider/CartProvider';
import { PagesMotion } from '../../components';
import toast from 'react-hot-toast';
import visaImage from '../../img/visa-removebg-preview.png';
import meezaImage from '../../img/meeza-removebg-preview.png';
import payImage from '../../img/pay-removebg-preview.png';
import paypalImage from '../../img/paypal-removebg-preview.png';

function ConfirmPros() {
    const { cartItems, setCartItems } = useContext(cartContext);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [code, setCode] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const TotalPrice = () => {
        const price = cartItems.length > 0 ? cartItems.map(item => { return item.count * item.newpro.price }) : [];
        return price.reduce((prev, curr) => prev + curr, 0);
    }
    const ConfirmOrder = () => {
            if (isChecked) {
                setName('');
                setPhone('');
                setEmail('');
                setAddress('');
                setCity('');
                setState('');
                setCode('');
                setCartItems([]);
                setIsChecked(false);
            }

            toast.success(
                <div className='w-100'>
                    <h5 className='w-100'>Order Confirmed Successfully</h5>
                </div>
                , {
                    duration: 3500,
                    position: 'top-center',
                }
            )
    }

    const CheckFileds = ()=>{
        console.log("CheckFields is running!");
        if (name === '' || phone === '' || email === '' || address === '' || city === '' || state === '' || code === '') {
        toast.error( 
            <div>
                <h5>please fill in all these fields</h5>
            </div>,
            {
                duration: 3500,
                position: 'top-center',
                icon: <FaCircleXmark className='text-danger fs-2' />
            }
        );
        return;
    }

    if (!isChecked) {
        toast.error(
            <div>
                <h5>please agree to the terms and conditions</h5>
            </div>,
            {
                duration: 3500,
                position: 'top-center',
                icon: <FaCircleXmark className='text-danger fs-2' />
            }
        );
        return;
    }
        

    }


    return (
        <PagesMotion>
            <div className='container d-flex'>
                <div className="confirm w-100">
                    <div className="heading mx-3 d-flex align-items-center justify-content-between mb-3">
                        <div>
                            <h4 className='fw-bold mb-0 mt-1'>checkout</h4>
                            <p className='text-black-50 mb-0'>complete your order in one place</p>
                        </div>
                        <Link className='mb-0' to='/cart'><FaArrowLeftLong className='text-primary' /> back to cart</Link>

                    </div>
                    <div className="row ms-1 w-100 my-3">
                        <div className="col-12 col-lg-7">
                            <div className="customer-info w-100">
                                <div className="custm-heading d-flex align-items-center gap-2">
                                    <div className="one bg-primary text-light">
                                        1
                                    </div>
                                    <h6 className='mb-0 fw-bold'>customer information</h6>
                                </div>
                                <form className='w-100 my-3' action="">
                                    <div className='name-phone w-100 d-flex gap-3'>
                                        <div className='full-name w-50'>
                                            <label htmlFor="name">full name <span className='text-danger fw-bold'>*</span></label>
                                            <input onInput={(e) => setName(e.target.value)} value={name} id='name' className='w-100 mt-1 form-control' type="text" placeholder='enter your full name' />
                                        </div>
                                        <div className='phone-number w-50'>
                                            <label htmlFor="phone">phone number <span className='text-danger fw-bold'>*</span></label>
                                            <input onInput={(e) => setPhone(e.target.value)} value={phone} id='phone' className='w-100 mt-1 form-control' type="text" placeholder='enter your phone' />
                                        </div>


                                    </div>
                                    <label className='mt-2' htmlFor="email">email address <span className='text-danger fw-bold'>*</span></label>
                                    <input onInput={(e) => setEmail(e.target.value)} value={email} id='email' className='w-50 mt-1 form-control' type="text" placeholder='enter your email' />
                                </form>
                            </div>
                            <div className="shipinng-address my-3">
                                <div className="shipinng-heading d-flex align-items-center gap-2">
                                    <div className="one bg-primary text-light">
                                        2
                                    </div>
                                    <h6 className='mb-0 fw-bold'>shipinng address</h6>
                                </div>
                                <form className='w-100 my-3' action="">
                                    <div className='w-100 d-flex gap-3'>
                                        <div className='w-100'>
                                            <label htmlFor="address">address <span className='text-danger fw-bold'>*</span></label>
                                            <input onInput={(e) => setAddress(e.target.value)} value={address} id='address' className='w-100 mt-1 form-control' type="text" placeholder='street, building, apartment...' />
                                        </div>
                                    </div>
                                    <div className='shipping w-100 d-flex align-items-center gap-2'>
                                        <div className='flex-grow-1'>
                                            <label className='mt-2' htmlFor="city">city <span className='text-danger fw-bold'>*</span></label>
                                            <input onInput={(e) => setCity(e.target.value)} value={city} id='city' className='w-100 mt-1 form-control' type="text" placeholder='enter your city' />
                                        </div>
                                        <div className='flex-grow-1'>
                                            <label className='mt-2' htmlFor="state">state / region <span className='text-danger fw-bold'>*</span></label>
                                            <input onInput={(e) => setState(e.target.value)} value={state} id='state' className='w-100 mt-1 form-control' type="text" placeholder='enter your email' />
                                        </div>
                                        <div className='flex-grow-1'>
                                            <label className='mt-2' htmlFor="code">postal code <span className='text-danger fw-bold'>*</span></label>
                                            <input onInput={(e) => setCode(e.target.value)} value={code} id='code' className='w-100 mt-1 form-control' type="text" placeholder='12345' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="review-confirm mb-3 d-none d-lg-block">
                                <div className="review-heading">
                                    <h6 className='mb-0 fw-bold'>review & confirm</h6>
                                    <div className='d-flex align-items-center justify-content-between mt-2 gap-1'>
                                        <div className='d-flex align-items-center gap-2 w-75'>
                                            <input onChange={(e) => setIsChecked(e.target.checked)} checked={isChecked} type="checkbox" />
                                            <label> i agree to the <span className='text-primary'>terms and conditions</span> and <span className='text-primary'>privacy policy</span></label>
                                        </div>
                                        {isChecked && name !== '' && phone !== '' && email !== '' && address !== '' && city !== '' && state !== '' && code !== '' ? <Link to='/cart' onClick={ConfirmOrder} className='btn btn-primary'><CiLock className='fs-4' /> place order</Link>
                                            :
                                            <button onClick={CheckFileds} className='btn btn-primary'><CiLock className='fs-4' /> place order</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5  mt-lg-0">
                            <div className="payment-method">
                                <div className="payment-heading d-flex align-items-center gap-2">
                                    <div className="one bg-primary text-light">
                                        3
                                    </div>
                                    <h6 className='mb-0 fw-bold'>payment method</h6>
                                </div>
                                <form className='w-100' action="">
                                    <label className='d-flex justify-content-between align-items-center px-3 py-2' htmlFor="visa">
                                        <div className='d-flex align-items-center gap-2'>
                                            <input className='mb-0' id='visa' type="radio" name='payment' defaultChecked />
                                            <div className='d-flex align-items-center gap-2 mb-0'>
                                                <FaCreditCard className='mb-0 fs-3' />
                                                <div>
                                                    <p className='mb-0 capitalize'>credit / debit card</p>
                                                    <p className='mb-0 text-black-50 capitalize'>pay securely with your card</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='payment-images d-flex align-items-center'>
                                            <img src={visaImage} alt="" />
                                            <img src={meezaImage} alt="" />
                                            <img src={payImage} alt="" />
                                        </div>
                                    </label>
                                    <label className='d-flex justify-content-between align-items-center px-3 py-2' htmlFor="cash">
                                        <div className='d-flex align-items-center gap-2'>
                                            <input className='mb-0' id='cash' type="radio" name='payment' />
                                            <div className='d-flex align-items-center gap-2 mb-0'>
                                                <RiCashLine className='mb-0 fs-2' />
                                                <div>
                                                    <p className='mb-0 capitalize'>cash on delivery</p>
                                                    <p className='mb-0 text-black-50 capitalize'>pay when you receive your order</p>
                                                </div>

                                            </div>
                                        </div>
                                        <FaHandHoldingUsd className='mb-0 fs-1' />
                                    </label>
                                    <label className='d-flex justify-content-between align-items-center px-3 py-2' htmlFor="paypal">
                                        <div className='d-flex align-items-center gap-2'>
                                            <input className='mb-0' id='paypal' type="radio" name='payment' />
                                            <div className='d-flex align-items-center gap-2 mb-0'>
                                                <LuWallet className='mb-0 fs-3' />
                                                <div>
                                                    <p className='mb-0 capitalize'>online payment (e-wallet)</p>
                                                    <p className='mb-0 text-black-50 capitalize'>pay with your digital wallet </p>
                                                </div>

                                            </div>
                                        </div>
                                        <img className='paypal' src={paypalImage} alt="" />
                                    </label>
                                </form>
                            </div>
                            <div className="summary mt-3">
                                <div className="summary-heading d-flex align-items-center justify-content-between">
                                    <h6 className='fw-bold mb-0'>order summary</h6>
                                    <p className='mb-0 text-black-50 capitalize'>({cartItems.length}) items</p>
                                </div>
                                <div className="pro-section mt-1">
                                    {cartItems.length > 0 ?
                                        cartItems.map(pro => {
                                            return <div key={pro.newpro.id} className="pro mb-1 d-flex align-items-center justify-content-between">
                                                <div className='d-flex align-items-center gap-1'>
                                                    <div className="image-pro">
                                                        <img src={pro.newpro.images.length > 1 ? pro.newpro.images[1] : pro.newpro.images[0]} alt="" />
                                                    </div>
                                                    <div className="pro-info">
                                                        <p className='mb-0 fw-bold capitalize'>{pro.newpro.title}</p>
                                                        <p className='mb-0 text-black-50 capitalize'>count ({pro.count})</p>
                                                    </div>
                                                </div>
                                                <p className='mb-0 fw-bold'>${pro.newpro.price}</p>
                                            </div>
                                        })
                                        :
                                        <div className='empty'>
                                            <TbShoppingCartOff className='empty-icon text-primary' />
                                            <h4 className='capitalize'>your cart is empty</h4>
                                            <p className='text-primary capitalize'>start shopping and find something you love</p>
                                        </div>
                                    }

                                </div>
                                <hr className='text-black-50 my-1' />
                                <div className='d-flex align-items-center justify-content-between mt-1'>
                                    <p className='text-black-50 mb-0 capitalize'>subtotal</p>
                                    <p className='mb-0 fw-bold'>${TotalPrice().toFixed(2)}</p>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mt-1 mb-2'>
                                    <p className='text-black-50 mt-1 mb-0 capitalize'>discount (10%) if order over $100</p>
                                    <p className='mb-0 fw-bold'>${TotalPrice() >= 100 ? (TotalPrice() * 10 / 100).toFixed(2) : <span>0</span>}</p>
                                </div>
                                <hr className='text-black-50 my-1' />
                                <div className='d-flex align-items-center justify-content-between mt-1'>
                                    <p className='text-black-50 mt-1 mb-0 fw-bold capitalize'>total</p>
                                    <p className='mb-0 fw-bold text-primary fs-4 '>${TotalPrice() >= 100 ? (TotalPrice() - (TotalPrice() * 10 / 100)).toFixed(2) : <span>{TotalPrice().toFixed(2)}</span>}</p>
                                </div>
                            </div>
                            <div className="review-confirm mb-3 d-lg-none mt-3">
                                <div className="review-heading">
                                    <h6 className='mb-0 fw-bold'>review & confirm</h6>
                                    <div className='d-flex align-items-center justify-content-between mt-2 gap-1'>
                                        <div className='d-flex align-items-center gap-2 w-75'>
                                            <input onChange={(e) => setIsChecked(e.target.checked)} checked={isChecked} type="checkbox" />
                                            <label> i agree to the <span className='text-primary'>terms and conditions</span> and <span className='text-primary'>privacy policy</span></label>
                                        </div>
                                        {isChecked && name !== '' && phone !== '' && email !== '' && address !== '' && city !== '' && state !== '' && code !== '' ? <Link to='/cart' onClick={ConfirmOrder} className='btn btn-primary'><CiLock className='fs-4' /> place order</Link>
                                            :
                                            <button onClick={CheckFileds} className='btn btn-primary'><CiLock className='fs-4' /> place order</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PagesMotion>
    )
}

export default ConfirmPros