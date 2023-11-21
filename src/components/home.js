import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const Home = () => {
    const {data, isLoading, isError, refetch} =useQuery(
        {
            queryKey: ["cat"],
         queryFn:()=>axios.get('https://catfact.ninja/fact').then((res)=>res.data),
        }
    );
    if (isError) {
        return <h1>Sorry,caught an error</h1>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }
  return (
    <div>
        <p>{data?.fact}</p>
        <button onClick={refetch}>Update Facts</button>
    </div>
  )
}

export default Home