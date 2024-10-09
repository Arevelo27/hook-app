import { useEffect, useState } from "react"

const localCache = {}

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    })

    useEffect(() => {
        getFetch();

    }, [url]);

    const setLoadingState = () => {
        setState({
            ...state,
            isLoading: true
        })
    }

    const getFetch = async () => {

        if (localCache[url]) {
            setState({
                ...state,
                isLoading: false,
                data: localCache[url]
            });
            return
        }
        
        setLoadingState();

        const resp = await fetch( url )

        // sleep
        await new Promise(resolve => setTimeout(resolve, 1500))

        if (!resp.ok) {
            setState({
                ...state,
                isLoading: false,
                hasError: true,
                error: {
                    status: resp.status,
                    message: resp.statusText
                }
            });
            return
        }

        const data = await resp.json()

        setState({
            data,
            isLoading: false,
            hasError: false,
            error: null
        })

        // Manejando del catché

        localCache[url] = data

    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        error: state.error,
    }
}
