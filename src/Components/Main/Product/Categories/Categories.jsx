import React, { useState } from 'react'

function Categories() {

    const [showSubParentCategory, setshowSubParentCategory] = useState(false);

    const handleparentCategory = (event) => {
        if (event.target.value == 1) {
            setshowSubParentCategory(true);
        } else {
            setshowSubParentCategory(false);
        }
    }
    return (
        <>
            <div className="addProduct__basicTab">
                <form>
                    <div className="addProduct__basicForm d-flex">
                        <div className="addProduct__selectParentCategory">
                            <label htmlFor="parentCategory" className="form-label inputForm__label" >
                                Select Parent Category:
                                <span className="formRequired">*</span>
                            </label>
                            <select className="form-select inputForm__inputField" id="parentCategory" onChange={handleparentCategory}>
                                <option defaultValue>Select Class</option>
                                <option value="1">Pizza</option>
                                <option value="2">Burger</option>
                                <option value="3">Wrap</option>
                                <option value="4">Sandwich</option>
                                <option value="5">Side Order</option>
                                <option value="6">Beverages</option>
                                <option value="7">Chinese</option>
                                <option value="8">Dessert</option>
                            </select>
                        </div>
                    </div>
                    {showSubParentCategory && (<div className="subcatgeory">Subcategory</div>)}
                </form>
            </div>
        </>
    )
}

export default Categories