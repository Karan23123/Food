import React from 'react';
import "./Product.scss";
import ProductSearch from './ProductSearch/ProductSearch';
import ProductTable from './ProductTable/ProductTable';

function Product() {
    return (
        <>
            <div className="productOuter p-3">
                <ProductSearch />
                <ProductTable />
            </div>
        </>
    )
}

export default Product
