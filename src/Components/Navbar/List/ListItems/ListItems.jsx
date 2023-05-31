import React from 'react';
import "./ListItems.scss"
import images from '../../../../assets/images';

function ListItems() {
    return (
        <>
            <li className="sidebar_listItems">
                <a href="">
                    <div className="sidebar_listItemsInner d-flex align-items-center">
                        <img src={images.orders} alt="Orders" loading='lazy' className='img-fluid' />
                        <p>Orders</p>
                    </div>
                </a>
            </li>
            <li className="sidebar_listItems">
                <a href="">
                    <div className="sidebar_listItemsInner d-flex align-items-center">
                        <img src={images.productManagment} alt="Product Management" loading='lazy' className='img-fluid' />
                        <p>Product Management</p>
                    </div>
                </a>
            </li>
            <li className="sidebar_listItems">
                <a href="">
                    <div className="sidebar_listItemsInner d-flex align-items-center">
                        <img src={images.promotionManagment} alt="Promotion Management" loading='lazy' className='img-fluid' />
                        <p>Promotion Management</p>
                    </div>
                </a>
            </li>
            <li className="sidebar_listItems">
                <a href="">
                    <div className="sidebar_listItemsInner d-flex align-items-center">
                        <img src={images.kitchen} alt="Kitchen Screen" loading='lazy' className='img-fluid' />
                        <p>Kitchen Screen</p>
                    </div>
                </a>
            </li>
            <li className="sidebar_listItems">
                <a href="">
                    <div className="sidebar_listItemsInner d-flex align-items-center">
                        <img src={images.locality} alt="Locality" loading='lazy' className='img-fluid' />
                        <p>Locality</p>
                    </div>
                </a>
            </li>
            <li className="sidebar_listItems">
                <a href="">
                    <div className="sidebar_listItemsInner d-flex align-items-center">
                        <img src={images.productManagment} alt="Stock Management" loading='lazy' className='img-fluid' />
                        <p>Stock Management</p>
                    </div>
                </a>
            </li>
            <li className="sidebar_listItems">
                <a href="">
                    <div className="sidebar_listItemsInner d-flex align-items-center">
                        <img src={images.user} alt="User" loading='lazy' className='img-fluid' />
                        <p>Users</p>
                    </div>
                </a>
            </li>
            <li className="sidebar_listItems">
                <a href="">
                    <div className="sidebar_listItemsInner d-flex align-items-center">
                        <img src={images.report} alt="Report" loading='lazy' className='img-fluid' />
                        <p>Reports</p>
                    </div>
                </a>
            </li>
        </>
    )
}

export default ListItems
