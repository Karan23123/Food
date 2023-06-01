import React from 'react';
import "./Product.scss";
import ProductSearch from './ProductSearch/ProductSearch';

function Product() {
    return (
        <>
            <div className="productOuter p-3">
                <ProductSearch />
            </div>
        </>
    )
}

export default Product
