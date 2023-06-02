import React from 'react';
import "./ToppingTable.scss";
import images from '../../../../../assets/images';

function ToppingTable() {
    return (
        <>
            <div className='productSection__table mt-3'>
                <table className='table m-0'>
                    <thead>
                        <tr>
                            <th scope="col">Topping Name</th>
                            <th scope="col">Short Code</th>
                            <th scope="col">Is Active</th>
                            <th scope="col">Topping Allowed</th>
                            <th scope="col">Food Type</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">Allo Tikki</td>
                            <td>AT</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td>Non Veg</td>
                            <td>
                                <div className="productAction__buttons d-flex">
                                    <span><img src={images.editIcon} alt="Edit Icon" /></span>
                                    <span><img src={images.deleteIcon} alt="Delete Icon" /></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">BBQ Chikken</td>
                            <td>BQC</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td>Veg</td>
                            <td>
                                <div className="productAction__buttons d-flex">
                                    <span><img src={images.editIcon} alt="Edit Icon" /></span>
                                    <span><img src={images.deleteIcon} alt="Delete Icon" /></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">Black Olive</td>
                            <td>BO</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td>Veg</td>
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
        </>
    )
}

export default ToppingTable
