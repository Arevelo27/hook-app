import PropTypes from "prop-types"
import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({ autor, quote }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect()
        setBoxSize({ height, width })
    }, [quote])

    return (
        <>
            <blockquote
                className="blockquote text-end"
                style={{ display: 'flex', justifyContent: 'end' }}
            >
                <p ref={pRef} className="mb-1">{quote}</p>
                <footer className="blockquote-footer">{autor}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize, null, 3)}</code>
            
        </>
    )
}

Quote.propTypes = {
    autor: PropTypes.string,
    quote: PropTypes.string
}