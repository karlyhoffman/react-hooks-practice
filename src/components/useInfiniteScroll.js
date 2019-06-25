import { useState, useEffect } from 'react';

/*
 * useEffect is similar to the componentDidMount and componentWillUpdate 
 * lifecycle methods in React class components.
 */

const useInfiniteScroll = (callback) => {
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
        callback();
    }, [isFetching]);

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
        setIsFetching(true);
    }

    return [isFetching, setIsFetching];
};

export default useInfiniteScroll;