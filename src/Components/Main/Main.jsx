import React from 'react';
import AddProduct from './Product/AddProduct';
import "./Main.scss"
import Heading from './Heading/Heading';
import { Route, Routes } from 'react-router-dom';
import Basic from './Product/Basic/Basic';
import Categories from './Product/Categories/Categories';
import Description from './Product/Description/Description';
import Variants from './Product/Variants/Variants';

function Main() {
    return (
        <div className='mainSection'>
            <Heading />
            <div className="mainInner m-3">
                <div className="mainIneerSection m-3">
                    <Routes>
                        <Route path='add-product' element={<AddProduct />}>
                            <Route index element={<Basic/>}/>
                            <Route path='basic' element={<Basic />} />
                            <Route path='categories' element={<Categories />} />
                            <Route path='description' element={<Description />} />
                            <Route path='variants' element={<Variants />} />
                        </Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Main
