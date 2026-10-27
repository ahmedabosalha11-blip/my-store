import styles from './proDetails.module.css';
import ProDetailsLoading from './ProDetailsLoading';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FaStar, FaCheck, FaHeart } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart, FaShare } from "react-icons/fa";
import { Slider, LoadingSlider, PagesMotion } from '../../components';
import { cartContext } from '../../components/cartProvider/CartProvider';
function ProDetails() {
    const { id } = useParams(null);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [productCat, setProductCat] = useState([]);
    const [loadingCat, setLoadingCat] = useState(true);
    const { cartItems, addFavItem, favItems, handelCart, renderRating } = useContext(cartContext);
    const boughtPro = cartItems.some(pro => pro.newpro.id == id);
    const boughtProStock = cartItems.find(pro => pro.newpro.id == id);
    const quantityInCart = boughtProStock ? boughtProStock.count : 0;
    const availableQuntity = product && product.stock - quantityInCart;
    const favPro = favItems.some(pro => pro.id == id);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`https://dummyjson.com/products/${id}`)
                setProduct(res.data)
            } catch (err) {
                console.log(err);

            } finally {
                setLoading(false)
            }
        }
        getProduct();
    }, [id])


    useEffect(() => {
        const getGategory = async () => {
            if (!product) return;
            setLoadingCat(true);
            try {
                const res = await axios.get(`https://dummyjson.com/products/category/${product.category}`);
                setProductCat(res.data.products)
            } catch (err) {
                console.log(err);

            } finally {
                setLoadingCat(false)
            }
        }
        getGategory()
    }, [product])
    if (loading) return <ProDetailsLoading />
    return (
        <PagesMotion key={id}>
            <div className='container my-5'>
                <div className={`${styles['pro-details']} d-flex w-100`}>
                    <div className={styles.images}>
                        <div className={styles['image-box-lg']}>
                            <img id='lg-image' className='' src={product.images[0]} alt="" />
                        </div>
                        <div className={`${styles['sm-images']} d-flex align-items-center justify-content-evenly`}>
                            {product.images.length > 1 ?
                                <>
                                    {product.images.map((image, i) => {
                                        return <img className='mt-2' onClick={() => {
                                            document.getElementById('lg-image').src = image
                                        }} key={i} src={image} />
                                    })}
                                </> : ''
                            }
                        </div>
                    </div>
                    <div className={`${styles.details} d-flex flex-column gap-3 mt-lg-5`}>
                        <h4 className='text-primary fw-bold'>{product.title}</h4>
                        <div className='stars text-warning fs-5 d-flex gap-1'>
                            {renderRating(product.reviews?.[0]?.rating)}
                        </div>
                        <h6>price : <span className='text-primary'>${product.price}</span></h6>

                        {availableQuntity > 0 ? <h6>availability : <span className='text-success'>{product.availabilityStatus}</span></h6> : <h6>availability : <span className='mb-0 text-danger'>out of stock</span></h6>}
                        {product.brand != null && <h6>brand : <span className='text-primary'>{product.brand}</span></h6>}
                        <p className='text-black-50'>{product.description}</p>
                        {availableQuntity > 0 && <h6 className='text-primary'>hurry up! only {availableQuntity} products left in stock</h6>}
                        {boughtPro ?
                            <div>
                                {availableQuntity > 0 ? <button className={`${styles.add} btn btn-success`}> in cart <TiShoppingCart className='fs-4' /> </button>
                                    :
                                    <button className={`${styles.add} btn btn-danger`}> out of stock <TiShoppingCart className='fs-4' /> </button>
                                }
                            </div>
                            :
                            availableQuntity > 0 ? <button onClick={() => handelCart(product)} className={`${styles.add} btn btn-primary`}>add to cart <TiShoppingCart className='fs-4' /> </button>
                                :
                                <button className={`${styles.add} btn btn-danger`}>out of stock <TiShoppingCart className='fs-4' /> </button>
                        }
                        <div className={styles.icons}>
                            {favPro ?
                                <div onClick={() => addFavItem(product)} className={styles['chosen-item']}>
                                    <FaHeart className='text-danger' />
                                </div>

                                :
                                <div onClick={() => addFavItem(product)} className={styles.fav}>
                                    <FaRegHeart />
                                </div>
                            }
                            <div className={styles.share}>
                                <FaShare />
                            </div>
                        </div>
                    </div>
                </div>
                {loadingCat ? <div className={styles['loading-slider']}><LoadingSlider /></div> : <Slider name={product.category.replace('-', ' ')} data={productCat} />}
            </div>
        </PagesMotion>
    )
}

export default ProDetails
