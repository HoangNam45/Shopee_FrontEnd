import { useState, useEffect } from 'react';
import axios from 'axios';

const useProductSearch = (query) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/api/products/search`, { params: { query } });
                setResults(response.data);
            } catch (error) {
                console.error('Error fetching product search results:', error);
            } finally {
                setLoading(false);
            }
        };

        const debounceTimeout = setTimeout(() => {
            fetchData();
        }, 500);

        return () => clearTimeout(debounceTimeout);
    }, [query]);

    return { results, loading };
};

export default useProductSearch;
