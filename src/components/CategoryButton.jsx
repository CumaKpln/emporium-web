import React, { useState } from "react";
import './style.css'

function CategoryButton({ categories, links }) {
    let [_categories, setCategories] = useState([]);
    return (
        <div className="CategoryButton" onMouseEnter={() => { setCategories(categories) }} onMouseLeave={() => { setCategories([]) }}>
            Kategoriler
            {_categories.map((category, idx) => (
                <a href={links[idx]}>{category}</a>
            ))
            }
        </div >
    );
}

export default CategoryButton;
