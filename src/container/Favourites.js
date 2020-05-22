import React from 'react';
import { useStore } from '../hooks-store/store';
import './Products.css';
import Favouriteitem from '../components/Favourites/Favouriteitem';

const Favourites = props => {
    const state = useStore()[0];
    const favouriteProducts = state.products.filter(p => p.isFavorite);
    let content = <p className="placeholder">No Favourites Yet</p>;
    if (favouriteProducts.length > 0) {
        content = (
            <ul className="product-item">
                {favouriteProducts.map(prod => (
                    <Favouriteitem
                        key={prod.id}
                        id={prod.id}
                        title={prod.title}
                        description={prod.description}
                        isFav={prod.isFavorite}
                    >
                    </Favouriteitem>
                ))}
            </ul>
        );
    }
    return content;
};

export default Favourites;