import { useCallback, useState } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request = useCallback( async (url, method = 'GET', body = null, headers = {'Content-Type': 'aplication/json'})=> {

        setLoading(true);
        setError(false);

        try {
            const response = await fetch(url,{method, body, headers});
            if (!response.ok) {
                throw new Error(url, response.status);
            }
            const data = await response.json();
            setLoading(false);
            return data;
        }
        catch(e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }

    },[])
    return {
        loading, error, request
    }
}