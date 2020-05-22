import React from 'react';
import Card from '../UI/Card';
import { useStore } from '../../hooks-store/store';
import './Productitem.css';

const ProductItem = React.memo(props => {
    const dispatch = useStore(false)[1];

    const toggleFavHandler = () => {
        dispatch('TOGGLE_FAV', props.id);
    };

    return (
        <Card style={{ marginBottom: '1rem' }}>
            <div className="product-item">
                <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
                <p>{props.description}</p>
                <button onClick={toggleFavHandler} className={!props.isFav ? 'button-outline' : ''}>{props.isFav ? 'Un-Favourite' : 'Favourite'}</button>
            </div>
        </Card>
    )
});

export default ProductItem;