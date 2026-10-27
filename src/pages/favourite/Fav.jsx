import './fav.css';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke, FaRegTrashCan, FaCheck } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { IoEyeSharp } from "react-icons/io5";
import { LuHeartOff } from "react-icons/lu";
import { useContext } from 'react';
import { cartContext } from '../../components/cartProvider/CartProvider';
import { PagesMotion } from '../../components';
import { Link } from 'react-router-dom';
function Fav() {
    const { favItems, setFavItems, handelCart, cartItems , renderRating } = useContext(cartContext);

    const removeItem = (id) => {
        setFavItems(favItems.filter(pro => pro.id !== id));
    }

    const getAvailableStock = (item) => {
        const boughtProStock = cartItems.find(pro => pro.newpro.id == item.id);
        const quantityInCart = boughtProStock ? boughtProStock.count : 0;
        return item.stock - quantityInCart;
    }

    return (
        <PagesMotion>
            <div className='container'>
                <div className="fav-body">
                    <div className="heading d-flex align-items-center gap-2">
                        <FaRegHeart className='fs-2' />
                        <div className="heading-info d-flex align-items-center justify-content-between w-100">
                            <div>
                                <h4 className='mb-0 fw-bold'>my wishlist</h4>
                                <p className='mb-0 text-black-50'>your favourite products, all in one place. </p>
                            </div>
                            <p className='mb-0 text-black-50'>({favItems.length}) items</p>
                        </div>
                    </div>
                    <div className="fav-pro-section p-2">
                        <div className="pro-box p-1">
                            {favItems.length > 0 ?

                                favItems.map((item, i) => {
                                    return <div key={i} className="item mb-2">
                                        <div className="image-box">
                                            <img src={item.images.length > 1 ? item.images[1] : item.images[0]} alt="" />
                                        </div>
                                        <div className='info w-100 d-flex align-items-center justify-content-between gap-2'>

                                            <div className="item-info d-flex flex-column gap-1">
                                                <h6 className='mb-0 fw-bold'>{item.title}</h6>
                                                <div className='stars text-warning fs-6 d-flex align-items-center gap-1'>
                                                    {renderRating(item.reviews?.[0]?.rating)}
                                                    <p className='mb-0 text-black-50'>({getAvailableStock(item)})</p>
                                                </div>
                                                <p className='mb-0 text-success'>{getAvailableStock(item) > 0 ? item.availabilityStatus : <span className='text-danger'>out of stock</span>}</p>
                                                <p className='mb-0'>${item.price}</p>
                                            </div>
                                            <div className='controls d-flex flex-column gap-3'>
                                                <div className="icons d-flex align-items-center gap-3">
                                                    <FaHeart className='text-danger fs-5' />
                                                    <button onClick={() => removeItem(item.id)} className='delete-item'><FaRegTrashCan /></button>
                                                </div>
                                                <div className="btns">
                                                    {cartItems.some(pro => pro.newpro.id == item.id) ?
                                                        getAvailableStock(item) > 0 ? <button className='btn btn-success'><TiShoppingCart className='fs-4' />  in cart </button>
                                                            :
                                                            <button className='btn btn-danger'><TiShoppingCart className='fs-4' /> out of stock </button>
                                                        :
                                                        getAvailableStock(item) > 0 ? <button onClick={() => handelCart(item)} className='btn btn-primary'><TiShoppingCart className='fs-4' /> add to cart </button>
                                                            :
                                                            <button className='btn btn-danger'><TiShoppingCart className='fs-4' /> out of stock </button>

                                                    }

                                                    <Link to={`/product/${item.id}`} className='btn btn-outline-primary'><IoEyeSharp className='fs-4' /> view details</Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                })

                                :
                                <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center gap-1'>
                                    <LuHeartOff className='empty-fav text-primary' />
                                    <h4>your wishlist is empty</h4>
                                    <p className='text-primary'>add items to your wishlist and find them here anytime</p>
                                </div>
                            }

                        </div>
                        <div className='footer p-3 d-flex align-items-center justify-content-between w-100'>

                            <div className='d-flex align-items-center gap-2'>
                                <div className="icon">
                                    <FaHeart className='text-primary  fs-1' />
                                </div>
                                <div>
                                    <p className='fw-bold mb-0'>love something?</p>
                                    <p className='mb-0 text-black-50'>start adding products you love to your whishlist</p>
                                </div>
                            </div>

                            <Link to='/' className='btn btn-outline-primary'><MdOutlineShoppingCartCheckout className='fs-4' /> continue shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </PagesMotion>
    )
}

export default Fav
