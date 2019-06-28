import React, { useState, useEffect } from 'react';

/*
 * useEffect is similar to the componentDidMount and componentWillUpdate 
 * lifecycle methods in React class components.
 */

const InfiniteScroll = () => {
    const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
    const [isFetching, setIsFetching] = useState(false);

    /*
     * Passing an empty array [] as the second parameter in useEffect
     * tells the function to act like componentDidMount and only run one time,
     * when the component first mounts
     */
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /*
     * Adding a function to the array in the second parameter
     * will make the useEffect function listens for changes to that function
     */
    useEffect(() => {
        if (!isFetching) return;
        fetchMoreListItems();
    }, [isFetching]);

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
    }

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