import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import purchase_book from './BookAction';

function BookContainer() {
    const noOfBooks = useSelector(state => state.NumberofBook); // Match the state key
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-xl text-white">No. of Books - {noOfBooks}</h2>
            <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition" onClick={() => dispatch(purchase_book())}>Buy a Book</button>
        </div>
    );
}

export default BookContainer;
