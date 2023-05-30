import React from 'react';
import "./List.scss"
import ListItems from './ListItems/ListItems'

function List() {
    return (
        <div className='sidebar_pannel'>
            <ul className="sideBar__list list-unstyled m-0 h-100 d-flex flex-column">
                <div>
                <ListItems />
                </div>
            </ul>
        </div>
    )
}

export default List
