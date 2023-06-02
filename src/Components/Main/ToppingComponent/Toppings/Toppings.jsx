import React from 'react';
import "./Toppings.scss";
import ToppingSearch from './ToppingSearch/ToppingSearch';
import ToppingTable from './ToppingTable/ToppingTable';

function Toppings() {
    return (
        <>
            <div className="productOuter p-3">
                <ToppingSearch />
                <ToppingTable />
            </div>
        </>
    )
}

export default Toppings
