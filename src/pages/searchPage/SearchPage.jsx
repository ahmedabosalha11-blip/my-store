import { useLocation } from 'react-router-dom';
import './searchPage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CardProduct, LoadingSlider, PagesMotion } from '../../components';

function SearchPage() {
    const query = new URLSearchParams(useLocation().search).get("query");
    const [SearchedProducts, setSearchedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getSearchedProducts = async () => {
            try {
                const res = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
                setSearchedProducts(res.data.products);
            } catch (err) {
                console.log(err);

            } finally {
                setLoading(false);
            }

        }
        if (query) getSearchedProducts();
    }, [query])

    return (
        <PagesMotion>
            <div className='container search_page mb-4'>
                {loading ? <LoadingSlider />
                    :
                    <div className="products">
                        {SearchedProducts.length > 0 ?
                            <>
                                <div className="heading w-100">
                                    <h3 className="text-primary fw-bold">results for : {query}</h3>
                                    <p className="text-black-50">add best selling products to weekly line up</p>
                                </div>
                                <div className="parent">
                                    <div className="child"></div>
                                </div>
                            </>
                            :
                            <h3 className="text-primary fw-bold">no results found</h3>
                        }
                        <div className="pros d-flex flex-wrap gap-2 justify-content-center mt-5">
                            {SearchedProducts.map((item, index) => {
                                return <CardProduct key={index} item={item} />
                            })}
                        </div>
                    </div>
                }
            </div>
        </PagesMotion>

    )
}

export default SearchPage
