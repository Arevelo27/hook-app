import { useCounter, useFetch } from "../hooks/"
import { LoadingMessage } from "./../03-examples/LoadingMessage";
import { Quote } from "./Quote";


export const Layout = () => {

    const { counter, increment } = useCounter(1)
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { autor, quote } = !!data && data[0]

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                    ? <LoadingMessage />
                    : <Quote autor={autor} quote={quote} />
            }

            <button
                className="btn btn-primary mt-2"
                disabled={ isLoading }
                onClick={() => increment()}
            >
                Next quote
            </button>

        </div>
    )
}
