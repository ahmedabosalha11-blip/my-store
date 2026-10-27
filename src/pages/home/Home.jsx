import './home.css';
import { HeroSection , Slider , LoadingSlider , PagesMotion } from '../../components';
import axios from 'axios';
import { useState, useEffect } from 'react';

const allCategories = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches"
]
function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const request = allCategories.map(category => {
          return axios.get(`https://dummyjson.com/products/category/${category}`)
        })
        const response = await Promise.all(request);
        const categoriesData = response.map(res => res.data);
        setProducts(categoriesData);
      } catch (err) {
        console.log(err);

      } finally {
        setLoading(false)
      }
    }
    getProducts();
  }, [])
  // console.log(products);

  return (
    <PagesMotion>
      <div className='d-flex flex-column gap-5'>
        <HeroSection />
        {loading ? allCategories.map(i => {
          return <LoadingSlider key={i} />
        }) :
          allCategories.map((category, i) => {
            return <Slider id={category.replace('-', ' ')} key={i} name={category.replace('-', ' ')} data={products[i].products} />
          })
        }
      </div>
    </PagesMotion>
  )
}

export default Home
