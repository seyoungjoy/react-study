import {useEffect, useState} from "react";
import axios from "axios";

export default function useFetch(url: string){
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(res => setData(res.data))
    }, [url]);

    return data;
}
