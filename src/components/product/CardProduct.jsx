import './product.css';
import { Link } from 'react-router-dom';
import { FaStar, FaCheck, FaHeart } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import { cartContext } from '../cartProvider/CartProvider';
function CardProduct({ item }) {
    const { cartItems, addFavItem, favItems , handelCart , renderRating } = useContext(cartContext);
    const boughtPro = cartItems.some(pro => pro.newpro.id == item.id);
    const boughtProStock = cartItems.find(pro => pro.newpro.id == item.id);
    const quantityInCart = boughtProStock ? boughtProStock.count : 0;
    const availableQuntity = item.stock - quantityInCart;
    const favPro = favItems.some(pro => pro.id === item.id);
    return (
        <div className='product '>
            <Link to={`/product/${item.id}`} className='d-flex flex-column jus p-2 gap-1'>
                <div className="image-box mb-2">
                    {boughtPro ? <p className='in-cart'><FaCheck className='check' /> in cart</p> : ''}
                    <img className={`${boughtPro && 'my-3'}`} src={item.images.length > 1 ? item.images[1] : item.images[0]} alt="" />
                </div>
                <div className="info text-start w-100 p-1">
                    <h6 className='title fw-bold'>{item.title}</h6>
                    <div className="fs-5 d-flex justify-content-between align-items-center gap-1 my-3">
                        <div className='stars text-warning fs-5 d-flex'>
                            {renderRating(item.reviews?.[0]?.rating)}
                        </div>
                        <h6 className='stock mb-0'> ({availableQuntity})</h6>
                    </div>
                    <h5 className='price fw-bold text-primary'>${item.price}</h5>
                </div>
            </Link>
            <div className="icons">
                {availableQuntity <= 0 ?
                    <div className="cart bg-danger text-light">
                        <MdOutlineRemoveShoppingCart className="ms-1 fs-5" />
                    </div>
                    :
                    <>
                        {boughtPro ?
                            <div className="cart bg-success text-light">
                                <FaCartArrowDown />
                            </div>
                            :
                            <div onClick={()=>handelCart(item)} className="cart">
                                <FaCartArrowDown />
                            </div>
                        }
                    </>
                }
                {favPro ?
                    <div onClick={() => addFavItem(item)} className="chosen-item">
                        <FaHeart className='text-danger' />
                    </div>

                    :
                    <div onClick={() => addFavItem(item)} className="fav">
                        <FaRegHeart />
                    </div>
                }
                <div className="share">
                    <FaShare />
                </div>
            </div>
        </div>
    )
}

export default CardProduct
