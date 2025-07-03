//useCallback(fn, dependencies) 
//Call useCallback at the top level of your component to cache a function definition between re-renders:

import { useCallback } from 'react';


export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
}