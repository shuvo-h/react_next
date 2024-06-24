'use client';

import { useEffect } from "react";

const Error = ({error,reset}:any) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
      }, [error])
    return (
        <div>
            Error Page

            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    );
};

export default Error;