import './cart.css'
import { BsCartPlus } from "react-icons/bs";
import { FaRegTrashCan, FaArrowLeftLong, FaTruckFast } from "react-icons/fa6";
import { IoLockClosed } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { TbShoppingCartOff } from "react-icons/tb";
import { FaCircleXmark } from "react-icons/fa6";

import { cartContext } from '../../components/cartProvider/CartProvider';
import { useContext, useState, useRef } from 'react';
import { PagesMotion } from '../../components';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
function Cart() {
    const { addProduct, cartItems, setCartItems } = useContext(cartContext);
    const count = cartItems.length > 0 ? cartItems.map(item => { return item.count }) : [];
    const counter = count.reduce((prev, curr) => prev + curr, 0);
    const price = cartItems.length > 0 ? cartItems.map(item => { return item.count * item.newpro.price }) : [];
    const totalPrice = price.reduce((prev, curr) => prev + curr, 0);

    const removeItem = (id) => {
        setCartItems(cartItems.filter(it => it.newpro.id !== id));
    }

    const clearData = () => {
        setCartItems([]);
    }

    const addOne = (item) => {
        setCartItems(cartItems.map(it => it.newpro.id == item.newpro.id ? { ...it, count: it.count + 1 } : it));
    }
    const minusOne = (item) => {
        setCartItems(cartItems.map(it => it.newpro.id == item.newpro.id ? { ...it, count: it.count - 1 } : it));
        if (item.count <= 1) {
            setCartItems(cartItems.filter(it => it.newpro.id !== item.newpro.id));
        }
    }
    const ToConfirmOdrers = () => {
        return toast.success(
            <div>
                <h5>there is no products to confirm</h5>
            </div>
            , {
                duration: 3500,
                position: 'top-center',
                icon: <FaCircleXmark className='text-danger fs-2' />

            }
        )
    }
    return (
        <PagesMotion>
            <div className='cart-page container'>
                <div className="heading mb-4 d-flex align-items-center gap-2">
                    <BsCartPlus className='fs-1 text-primary' />
                    <div>
                        <h4 className='fw-bold mb-0'>your cart</h4>
                        <p className='mb-0 text-black-50'>
                            review your items proceed to checkout
                        </p>
                    </div>
                </div>
                <main className='d-lg-flex gap-3 w-100'>
                    <div className="cart-body">
                        <h6 className='fw-bold m-3'>item details</h6>
                        <hr className='text-black-50' />
                        <div className="pro-box px-3">
                            {cartItems.length > 0 ?
                                cartItems.map((item) => {
                                    return <div key={item.newpro.id} className="item mb-2">
                                        <div className="image-box">
                                            <img src={item.newpro.images.length > 1 ? item.newpro.images[1] : item.newpro.images[0]} alt="" />
                                        </div>
                                        <div className='item-details w-100 d-flex align-items-center justify-content-between'>

                                            <div className="info">
                                                <h5 className=' mb-0'>{item.newpro.title}</h5>
                                                <p className='my-1'>return: <span className='fw-bold text-primary'>{item.newpro.returnPolicy} </span></p>
                                                <p className='my-1'>unit price: <span className='fw-bold text-primary'>${item.newpro.price} </span></p>
                                                <p className='my-1'>total price: <span className='fw-bold text-primary'>${(item.newpro.price * item.count).toFixed(2)}</span></p>
                                                {(item.newpro.stock - item.count) > 0 ? <p className=' my-1'>stock: ({item.newpro.stock - item.count})</p> : <p className='text-danger my-1'>out of stock</p>}
                                            </div>
                                            <div className='quantity-delete d-flex flex-column gap-3'>
                                                <button onClick={() => removeItem(item.newpro.id)}><FaRegTrashCan /></button>
                                                <div className='math d-flex align-items-center'>
                                                    <span onClick={() => minusOne(item)} className='muins'>-</span>
                                                    <p className='mb-0'>{item.count}</p>
                                                    {(item.newpro.stock - item.count) <= 0 ? <span className='plus bg-danger text-light'>+</span>
                                                        :
                                                        <span onClick={() => addOne(item)} className='plus'>+</span>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                }) :
                                <div className='empty'>
                                    <TbShoppingCartOff className='empty-icon text-primary' />
                                    <h4>your cart is empty</h4>
                                    <p className='text-primary'>start shopping and find something you love</p>
                                </div>
                            }
                        </div>
                        <hr className='text-black-50' />
                        <div className='px-3 d-flex align-items-center justify-content-between'>
                            <button onClick={clearData} className='btn btn-outline-primary me-2'><FaRegTrashCan /> clear cart</button>
                            <Link to='/' className='btn btn-outline-secondary'><FaArrowLeftLong /> continue shopping</Link>
                        </div>
                    </div>
                    <div className="order-summary mb-5 mb-lg-0 mt-3 mt-lg-0 flex-grow-1">
                        <h4 className='fw-bold'>order summary</h4>
                        <div className='d-flex align-items-center justify-content-between mt-3'>
                            <p className='text-black-50 '>subtotal ({counter} items)</p>
                            <p className='fs-4 text-primary fw-bold'>${totalPrice.toFixed(2)}</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between '>
                            <p className='text-black-50 '>shipping</p>
                            <p className='text-success fw-bold fs-5'>free</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between '>
                            <p className='text-black-50 '>discount (10%) if order over $100</p>
                            <p className='fs-4 text-primary fw-bold'>{totalPrice > 100 ? <>${(totalPrice * 10 / 100).toFixed(2)}</> : <>$0</>}</p>
                        </div>
                        <hr className='text-black-50' />
                        <div className='d-flex align-items-center justify-content-between '>
                            <h5 className='fw-bold'>total</h5>
                            <h6 className='text-success fs-3 fw-bold'>{totalPrice > 100 ? <>${(totalPrice - (totalPrice * 10 / 100)).toFixed(2)}</> : <>${totalPrice.toFixed(2)}</>}</h6>
                        </div>
                        {cartItems.length > 0 ? <Link to='/confirm' className='btn btn-primary w-100 my-3'><IoLockClosed className='fs-4' /> procceed to checkout</Link>
                            :
                            <button onClick={ToConfirmOdrers} className='btn btn-primary w-100 my-3'><IoLockClosed className='fs-4' /> procceed to checkout</button>
                        }
                        <div className='d-flex align-items-center gap-2 p-3 bg-light rounded'>
                            <FaTruckFast className='fs-1 text-primary' />
                            <div>
                                <p className="mb-0 text-black-50 fw-bold">free shipping on orders over $100</p>
                                <p className="mb-0 text-black-50">fast & reliable delivery</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-2 p-3 bg-light rounded mt-3'>
                            <AiOutlineSafety className='fs-1 text-primary' />
                            <div>
                                <p className="mb-0 text-black-50 fw-bold">secure checkout</p>
                                <p className="mb-0 text-black-50">your information is safe with us</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </PagesMotion>
    )
}

export default Cart
