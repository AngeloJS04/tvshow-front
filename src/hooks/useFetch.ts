import { useState, useEffect } from 'react';
import { ApiResponse } from '../interface/tvshow.interface';


const useFetch = (url: string): ApiResponse => {
    const [response, setResponse] = useState<ApiResponse>({
        data: null,
        error: null,
        loading: true,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setResponse({ data, error: null, loading: false });
            } catch (error) {
                setResponse({ data: null, error: 'Error', loading: false });
            }
        };

        fetchData();
    }, [url]);

    return response;
};

export default useFetch;
