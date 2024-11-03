import { useState, useEffect } from 'react';
import { getProductsBySearch } from '../services/productService';

const useProductSearch = (query) => {
    const [results, setResults] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const fetchData = async () => {
            // setLoading(true);
            try {
                const response = await getProductsBySearch(query);
                setResults(response);
            } catch (error) {
                console.error('Error fetching product search results:', error);
            } finally {
                // setLoading(false);
            }
        };

        const debounceTimeout = setTimeout(() => {
            fetchData();
        }, 400);

        return () => clearTimeout(debounceTimeout);
    }, [query]);

    return { results };
};

export default useProductSearch;
