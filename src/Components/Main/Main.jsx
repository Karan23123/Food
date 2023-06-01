import React from 'react';
import "./Main.scss"

import { Route, Routes } from 'react-router-dom';

import Heading from './Heading/Heading';
import Basic from './ProductComponent/AddProduct/Basic/Basic';
import Categories from './ProductComponent/AddProduct/Categories/Categories';
import Description from './ProductComponent/AddProduct/Description/Description';
import Variants from './ProductComponent/AddProduct/Variants/Variants';
import AddProduct from './ProductComponent/AddProduct/AddProduct';
import Product from './ProductComponent/Product/Product';

function Main() {
    return (
        <div className='mainSection'>
            <Heading />
            <div className="mainInner m-3">
                <div className="mainIneerSection m-3">
                    <Routes>
                        <Route path='add-product' element={<AddProduct />}>
                            <Route index element={<Basic />} />
                            <Route path='basic' element={<Basic />} />
                            <Route path='categories' element={<Categories />} />
                            <Route path='description' element={<Description />} />
                            <Route path='variants' element={<Variants />} />
                        </Route>
                        <Route path='product' element={<Product />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Main
