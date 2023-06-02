import React from 'react';
import "./ProductTable.scss";
import images from "../../../../../assets/images"

function ProductTable() {
    return (
        <div className='productSection__table mt-3'>
            <table className='table m-0'>
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">is Active?</th>
                        <th scope="col">Food Type</th>
                        <th scope="col">Category</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">Achari Mix</td>
                        <td>Yes</td>
                        <td>Non Veg</td>
                        <td>@Pizza- Season Special</td>
                        <td>
                            <div className="productAction__buttons d-flex">
                                <span><img src={images.editIcon} alt="Edit Icon" /></span>
                                <span><img src={images.deleteIcon} alt="Delete Icon" /></span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">Achari Mix</td>
                        <td>Yes</td>
                        <td>Non Veg</td>
                        <td>@Pizza- Season Special</td>
                        <td>
                            <div className="productAction__buttons d-flex">
                                <span><img src={images.editIcon} alt="Edit Icon" /></span>
                                <span><img src={images.deleteIcon} alt="Delete Icon" /></span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">Achari Mix</td>
                        <td>Yes</td>
                        <td>Non Veg</td>
                        <td>@Pizza- Season Special</td>
                        <td>
                            <div className="productAction__buttons d-flex">
                                <span><img src={images.editIcon} alt="Edit Icon" /></span>
                                <span><img src={images.deleteIcon} alt="Delete Icon" /></span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default ProductTable
