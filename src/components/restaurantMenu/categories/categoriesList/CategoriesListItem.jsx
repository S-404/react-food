import React from 'react';
import {useSelector} from "react-redux";

const CategoriesListItem = ({item}) => {
    const refs = useSelector(state => state.restaurant.refs)
    const clickHandler = () => {
        const ref = refs[item]
        ref?.scrollIntoView({behavior: 'smooth',block:'start'});
    }
    return (
        <div
            className='categoriesList__item'
            onClick={clickHandler}
        >
            {item}
        </div>
    );
};
export default CategoriesListItem;