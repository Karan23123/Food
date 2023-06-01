import React from 'react';
import "./Buttons.scss";

function Buttons() {
    return (
        <>
            <div className="addproduct__submitButtons d-flex pt-5 pb-2">
                <button type="submit" className="saveButton">
                    Save
                </button>
                <button className="cancelButton">Cancel</button>
            </div>
        </>
    )
}

export default Buttons
