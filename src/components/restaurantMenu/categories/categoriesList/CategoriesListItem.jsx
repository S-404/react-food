import React from 'react';
import {useSelector} from "react-redux";

const CategoriesListItem = ({item}) => {
    const refs = useSelector(state => state.restaurant.refs)
    const clickHandler = () => {
        //getElementById instead useRef current because
        //useRef current - non-serializable value
        const ref = document.getElementById(refs[item]);
        ref?.scrollIntoView({behavior: 'smooth'});
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