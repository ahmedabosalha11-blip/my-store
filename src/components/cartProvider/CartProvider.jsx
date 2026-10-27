import { useState , useEffect } from 'react'
import { createContext } from 'react'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
export const cartContext = createContext(null); 
// localStorage.removeItem('itemsFav')
function CartProvider({children}) {
  const [sidebarMood,setSidebarMood] = useState(false);
  const [cartItems,setCartItems] = useState(()=>{
    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : []
    
  })
  const [favItems,setFavItems] = useState(()=>{
    const savedItems = localStorage.getItem('itemsFav');
    return savedItems ? JSON.parse(savedItems) : []
  });
  const addProduct = (item)=>{
    const checkItem = cartItems.some(pro => pro.newpro.id === item.id);
    
    if(!checkItem){
      setCartItems([
        ...cartItems,
        {newpro:item,
          count:1,
        }
      ])
    }

    
    else{
      const updateData = cartItems.map(pro => pro.newpro.id === item.id ? {...pro , count: pro.count + 1} : pro);
      setCartItems(updateData)
    }
              
  }
  const handelCart = (item)=>{
        addProduct(item)

        toast.success(
            <div className='toast-body'>
                <div className="toast-image">
                    <img src={item.images.length > 1 ? item.images[1] : item.images[0]} alt="" />
                </div>
                <div className="toast-content d-flex flex-column flex-grow-1 gap-2">
                    <h6 className='title mb-0 fw-bold'>{item.title}</h6>
                    <p className='mb-0'>added to cart</p>
                    <Link to='/cart' className='btn btn-primary'>view cart</Link>
                </div>
            </div>
            , {duration : 5000}
        ) 
    }
  useEffect(()=>{
    localStorage.setItem('items',JSON.stringify(cartItems));
  },[cartItems]);

  const addFavItem = (item)=>{
    const checkItem = favItems.some(pro => pro.id == item.id);

    if(!checkItem){
      setFavItems([
        ...favItems ,
        item
      ])
    }
    else{
      setFavItems(favItems.filter(pro => pro.id !== item.id))
    }
  }
  useEffect(()=>{
    localStorage.setItem('itemsFav',JSON.stringify(favItems));
  },[favItems]);

  const renderRating = (stars) => {
          const ratingCount = Math.round(stars || 0);
          
          return Array.from({ length: ratingCount }, (_, index) => (
              <FaStar className='me-1' key={index} />
          ));
      };
  return (
    <cartContext.Provider value={{addProduct , cartItems , setCartItems , addFavItem , handelCart , favItems , setFavItems , sidebarMood , setSidebarMood , renderRating }}>
        {children}
    </cartContext.Provider>
  )
}

export default CartProvider
