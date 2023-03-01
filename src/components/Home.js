import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncCart } from '../feauters/cartSlice';
import { addToCart } from '../feauters/cartSlice';
const Home = () => {
    const dispatch = useDispatch();

    const photos = useSelector(state => state.gallery.photos.products);

    useEffect(() => {
        dispatch(fetchAsyncCart())
    }, [dispatch])

    const handleAddToCart = (photo) => {
        dispatch(addToCart(photo));
    }
    return (
        <div className='home-container'>
            <h2>New Arrivals</h2>
            <div className='products'>
                {photos?.length ?
                    photos.map(photo =>
                        <div className='product' key={photo.id}>
                            <h3>{photo.title}</h3>
                            <img src={photo.images[0]} alt={photo.title} />
                            <div className='details'>
                                <span className='description'>{photo.description}</span>
                                <span className='price'>${photo.price}</span>
                            </div>
                            <button onClick={() => handleAddToCart(photo)}>Add to Cart</button>
                        </div>
                    )
                    : <p> There is no photos</p>
                }
            </div>
        </div>
    );
}

export default Home;