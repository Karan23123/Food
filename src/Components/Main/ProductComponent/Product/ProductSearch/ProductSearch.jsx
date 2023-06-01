import React from 'react';
import "./ProductSearch.scss";
import { faSearch, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ProductSearch() {
    return (
        <div className='product_searchField d-flex justify-content-between'>
            <div className="product__innerSearchInput">
                <input type="search" />
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="product__innerAddnewButtons">
                <button>
                    <FontAwesomeIcon icon={faSquarePlus} />
                    <span>Add New</span>
                </button>
            </div>
        </div >
    )
}

export default ProductSearch
