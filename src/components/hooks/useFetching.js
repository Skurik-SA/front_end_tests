// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react';

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e) {
            setError(e)
        }
        finally {
            setTimeout(10000)
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}