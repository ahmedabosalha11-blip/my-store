import './header.css';
import { IoBagHandle, IoSearchSharp } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../cartProvider/CartProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
function TopHeader() {
    const [suggestions, setSuggestions] = useState([]);
    const [searchProducts, setSearchProducts] = useState('');
    const [loading, setLoading] = useState(true);
    const [isSelecting, setIsSelecting] = useState(false);
    const navigation = useNavigate();
    const { cartItems, favItems, setSidebarMood } = useContext(cartContext);
    const location = useLocation();
    const [choosenPro,setChoosenPro] = useState(null);



    const stopRfresh = (e) => {
        e.preventDefault();
        // if (isSelecting) {
        //     return;
        // }
        if(choosenPro == searchProducts ){
            return
        }
        if (searchProducts.trim() !== '') {
            navigation(`/search?query=${encodeURIComponent(searchProducts.trim())}`)
            setSuggestions([]);
        }

    }
    const inputRef = useRef(null);
    const getInputFocused = () => {
        inputRef.current.focus();
        setSearchProducts(searchProducts);
        setSuggestions([]);
    }

    useEffect(() => {
        if (isSelecting) {
            return;
        }
        const getSuggestions = async () => {
            try {
                const res = await axios.get(`https://dummyjson.com/products/search?q=${searchProducts}`);
                if (searchProducts.trim() !== '') {
                    setSuggestions(res.data.products.slice(0, 8));
                } else {
                    setSuggestions([]);
                }
            } catch (err) {
                console.log(err);

            } finally {
                setLoading(false);
            }
        }
        const debounce = setTimeout(getSuggestions, 300);
        return () => clearTimeout(debounce);
    }, [searchProducts])

    useEffect(() => {
        setSuggestions([]);
        checkLocation();
        setSidebarMood(false)
    }, [location])

    const putNameOfProIntoSearcInp = (item) => {
        setSearchProducts(item.title);
        setIsSelecting(true);
        setSuggestions([]);
        setChoosenPro(item.title)

    }
    
    const checkLocation = () => {
        if (location.pathname !== '/search' && !location.pathname.startsWith('/product')) {
            setSearchProducts('')
        }
    }



    return (
        <div className="top container-fluid">

            <div className="container top-header py-3 d-flex align-items-center justify-content-between">
                <div className="logo d-flex align-items-center gap-2">
                    <IoBagHandle className=' text-primary' />
                    <div>
                        <h1 className='fw-bold mb-0'>A.A.S</h1>
                        <h5 className='mb-0'> <span className='text-primary'>online</span> store</h5>
                    </div>
                </div>
                <div className="seacrh-section d-flex justify-content-center flex-grow-1 ">
                    <div className="search-box  w-50 d-flex flex-column">
                        <form onSubmit={stopRfresh} className='w-100 d-flex align-items-center'>
                            <input onChange={(e) => {setSearchProducts(e.target.value); setIsSelecting(false);}} value={searchProducts} className='inp w-100' type="search" placeholder='search for products' ref={inputRef} />
                            <button className='btn btn-primary' onClick={getInputFocused}><IoSearchSharp className='fs-4' /></button>
                        </form>
                        {suggestions.length > 0 &&
                            <div className="w-100 suggestions bg-light">
                                {

                                    suggestions.map((item, index) => {
                                        return <Link onClick={() => putNameOfProIntoSearcInp(item)} key={index} className='w-100' to={`/product/${item.id}`}><img src={item.images.length > 1 ? item.images[1] : item.images[0]} alt="" /> {item.title}</Link>
                                    })

                                }
                            </div>
                        }
                    </div>
                </div>
                <div className="icons-section d-flex align-items-center gap-3">

                    <div className="fav-icon d-none d-md-block">
                        <Link className='text-black' to='/fav'><FaRegHeart className='fs-3' /></Link>
                        <div className="fav-counter">{favItems.length}</div>
                    </div>
                    <div className="cart-icon d-none d-md-block">
                        <Link className='text-black' to='/cart'><TiShoppingCart className='fs-2' /></Link>
                        <div className="cart-counter">{cartItems.length}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TopHeader
