import React from 'react';
import "./AddProduct.scss"
import { NavLink, Outlet } from 'react-router-dom';
import Buttons from './Buttons/Buttons';

function AddTopping() {
    return (
        <>
            <div className='addProduct__navtab d-flex'>
                <NavLink to="basic">Basic</NavLink>
                <NavLink to="description">Description</NavLink>
                <NavLink to="categories">Categories</NavLink>
                <NavLink to="variants">Variants</NavLink>
            </div>
            <div className='navTabs__content p-3'>
                <Outlet />
                <Buttons />
            </div>
        </>
    )
}

export default AddTopping
