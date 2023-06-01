import React from 'react';
import "./Description.scss";

function Description() {
    return (
        <>
            <div className='addProduct__descriptionTab'>
                <form>
                    <div className="addProduct__descriptionFormm">
                        <div className="addProduct__description">
                            <label htmlFor="description" className='form-label inputForm__label'>Description :</label>
                            <textarea name="" id="description" cols="10" rows="5" className='form-control w-25' placeholder='This product is'></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Description