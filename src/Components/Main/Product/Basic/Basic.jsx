import React, { useState } from "react";
import "./Basic.scss";

function Basic() {
    const [isTaxable, setIsTaxable] = useState(false);
    const handleisTaxable = (event) => {
        if (event.target.checked) {
            setIsTaxable(true);
        } else {
            setIsTaxable(false);
        }
    };

    return (
        <>
            <div className="addProduct__basicTab">
                <form>
                    <div className="addProduct__basicForm d-flex">
                        <div className="addProduct__productName">
                            <label htmlFor="product-name" className="form-label inputForm__label">
                                Product Name:
                                <span className="formRequired">*</span>
                            </label>
                            <input
                                type="text"
                                id="product-name"
                                className="form-control"
                                placeholder="Cheeze Burst"
                                required
                            />
                        </div>
                        <div className="addProduct__isActive form-check form-switch">
                            <label htmlFor="isActive" className="form-label inputForm__label">
                                is Active
                                <span className="formRequired ">*</span>
                            </label>
                            <input
                                type="checkbox"
                                id="isActive"
                                className="form-check-input"
                            />
                        </div>

                        <div className="addProduct__isTaxable form-check form-switch">

                            <label htmlFor="isTaxable" className="form-label inputForm__label" >
                                is Taxable:
                                <span className="formRequired ">*</span>
                            </label>

                            <input
                                type="checkbox"
                                id="isTaxable"
                                className="form-check-input"
                                onClick={handleisTaxable}
                            />
                        </div>

                        {isTaxable && (
                            <div className="addProduct__taxClass">
                                <label htmlFor="taxClass" className="form-label inputForm__label" >
                                    Tax Class:
                                    <span className="formRequired">*</span>
                                </label>
                                <select className="form-select inputForm__inputField" id="taxClass" >
                                    <option defaultValue>Select Class</option>
                                    <option value="1">GST 0%</option>
                                    <option value="2">GST 5%</option>
                                    <option value="3">GST 18%</option>
                                </select>
                            </div>
                        )}
                        <div className="addProduct__foodtype">
                            <label htmlFor="foodtype" className="form-label inputForm__label">
                                Food Type:
                            </label>
                            <select className="form-select inputForm__inputField" id="foodtype" >
                                <option defaultValue>Select</option>
                                <option value="1">Veg</option>
                                <option value="2">Non-Veg</option>
                            </select>
                        </div>
                        <div className="addProduct__kitchenScreen form-check form-switch">
                            <label htmlFor="kitchenScreen" className="form-label inputForm__label" >
                                Kitchen Screen:
                                <span className="formRequired ">*</span>
                            </label>
                            <input
                                type="checkbox"
                                id="kitchenScreen"
                                className="form-check-input"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Basic;
