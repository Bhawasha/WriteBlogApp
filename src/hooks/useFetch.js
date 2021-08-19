import { useEffect, useState } from "react";

const useFetch = (url) => {
    debugger;
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        fetch(url)
        .then(res => {
            debugger;
            if(!res.ok) {
                throw Error('Could not fetch data for this resource');
            }
           return res.json()})
        .then(data => {
         setData(data);
         setPending(false);
         setError(null);
        })
        .catch(error => {
            setPending(false);
            setError(error.message);
        })
    }, [url]);

    return { data, pending, error}
}

export default useFetch;