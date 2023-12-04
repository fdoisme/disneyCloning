import { useState } from "react";

export default function useFetch(param) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    async function getData() {
        try {
            setLoading(true)
            const jsonserver = await fetch(
                "http://localhost:3000/"+param,
                {
                    method: "GET"
                }
            )
            const data = await jsonserver.json()
            // console.log(data);
            setData(data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return {
        data, loading
    }
}