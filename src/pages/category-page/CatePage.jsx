import './catePage.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { LoadingSlider, CardProduct, PagesMotion } from '../../components';
function CatePage() {
    const { category } = useParams();
    const [categ, setCateg] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const GetCategory = async () => {
            try {
                const res = await axios.get(`https://dummyjson.com/products/category/${category}`);
                setCateg(res.data.products);
            } catch (err) {
                console.log(err);

            } finally {
                setLoading(false)
            }
        }
        GetCategory();
    }, [category]);
    console.log(categ);

    return (
        <PagesMotion>
            
            <div className='cate-page mb-4 container justify-content-center '>
                {loading ? <LoadingSlider />
                    :
                    <>
                        <div className="heading w-100">
                            <h3 className="text-primary fw-bold">{category.replace('-', ' ')} : {categ.length}</h3>
                            <p className="text-black-50">add best selling products to weekly line up</p>
                        </div>
                        <div className="parent mb-4">
                            <div className="child"></div>
                        </div>
                        {categ.map((item , index) => {
                            return <div key={index} className="row">
                                <div className="col-md-6 col-lg-3">
                                    <CardProduct item={item} />
                                </div>
                            </div>
                        })}
                    </>
                }
            </div>
        </PagesMotion>
    )
}

export default CatePage
