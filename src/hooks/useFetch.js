import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, {signal: abortCont.signal})
        .then(res => {
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
            if(error.name === "AbortError") {
                console.log("Fetch Aborted");
            }
            else {
                setPending(false);
                setError(error.message);
            }
        })

        return () => abortCont.abort();
    }, [url]);

    return { data, pending, error}
}

export default useFetch;