import React from 'react';
import "./ListItems.scss"
import images from '../../../../assets/images';

function ListItems() {
    return (
        <>
            <li className="sidebar_listItems text-center">
                <div className="login__detailsSec">
                    <div className="innerLogin__detailsSec">
                        <div className="user__img">
                            <img src={images.users} alt="users" loading='lazy' className='img-fluid' />
                        </div>
                        <div className="user__name">
                            <p>Sanjeev Kumar</p>
                        </div>
                        <div className="user__logout">
                            <a href="">
                                Logout
                                <img src={images.logout} alt="logout" loading='lazy' className='img-fluid' />
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li className="sidebar_listItems">
                <a href="">
                    <div className="sidebar_listItemsInner d-flex">
                        <img src={images.orders} alt="Orders" loading='lazy' className='img-fluid' />
                        <p>Orders</p>
                    </div>
                </a>
            </li>
            <li className="sidebar_listItems">
                <a href="">
                    <div className="sidebar_listItemsInner d-flex">
                        <img src={images.productManagment} alt="Product Management" loading='lazy' className='img-fluid' />
                        <p>Product Management</p>
                    </div>
                </a>
            </li>
            <li className="sidebar_listItems">
                <a href="">
                    <div className="sidebar_listItemsInner d-flex">
                        <img src={images.promotionManagment} alt="Promotion Management" loading='lazy' className='img-fluid' />
                        <p>Promotion Management</p>
                    </div>
                </a>
            </li>
            <li className="sidebar_listItems">
                <a href="">
                    <div className="sidebar_listItemsInner d-flex">
                        <img src={images.kitchen} alt="Kitchen Screen" loading='lazy' className='img-fluid' />
                        <p>Kitchen Screen</p>
                    </div>
                </a>
            </li>
            <li className="sidebar_listItems">
                <a href="">
                    <div className="sidebar_listItemsInner d-flex">
                        <img src={images.locality} alt="Locality" loading='lazy' className='img-fluid' />
                        <p>Locality</p>
                    </div>
                </a>
            </li>
            <li className="sidebar_listItems">
                <a href="">
                    <div className="sidebar_listItemsInner d-flex">
                        <img src={images.productManagment} alt="Stock Management" loading='lazy' className='img-fluid' />
                        <p>Stock Management</p>
                    </div>
                </a>
            </li>
            <li className="sidebar_listItems">
                <a href="">
                    <div className="sidebar_listItemsInner d-flex">
                        <img src={images.user} alt="User" loading='lazy' className='img-fluid' />
                        <p>Users</p>
                    </div>
                </a>
            </li>
            <li className="sidebar_listItems">
                <a href="">
                    <div className="sidebar_listItemsInner d-flex">
                        <img src={images.report} alt="Report" loading='lazy' className='img-fluid' />
                        <p>Reports</p>
                    </div>
                </a>
            </li>
        </>
    )
}

export default ListItems
