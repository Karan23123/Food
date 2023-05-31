import React from "react";
import "./Basic.scss"

function Basic() {
    return (
        <>
            <div className="addProduct__basicTab">
                <form>
                    <div className="addProduct__basicForm d-flex">
                        <div className="addProduct__productName">
                            <label htmlFor="product-name" className="form-label">
                                Product Name:
                                <span className="formRequired">*</span>
                            </label>
                            <input type="text" id="product-name" className="form-control inputForm__inputField" required />
                        </div>
                        <div className="addProduct__isActive form-check form-switch">
                            <label htmlFor="isActive" className="form-label">
                                is Active
                                <span className="formRequired ">*</span>
                            </label>
                            <input type="checkbox" className="form-check-input" />
                        </div>
                        <div className="addProduct__isTaxable">
                            <label htmlFor="isTaxable" className="form-label"></label>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Basic;
