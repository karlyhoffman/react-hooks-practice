import React, { useState } from 'react';
import useInfiniteScroll from "./useInfiniteScroll";

const InfiniteScroll = () => {
    const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

    function fetchMoreListItems() {
        setTimeout(() => {
        setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
        setIsFetching(false);
        }, 500);
    }

    return (
        <ul className="infinite-list">
            {listItems.map((listItem, i) => 
                <li key={i} className="list-group-item">List Item {listItem}</li>
            )}
            {isFetching && 'Fetching more list items...'}
        </ul>
    );
};

export default InfiniteScroll;