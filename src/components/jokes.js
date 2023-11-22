import React from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const Jokes = () => {
const {data, isLoading,isError,refetch}=useQuery(
    {
        queryKey:["jokes"],
        queryFn:()=>axios.get('https://official-joke-api.appspot.com/random_joke').then((res)=>res.data)
    }
)
if (isLoading) {
    return <h1>Loading...</h1>
}
if (isError) {
    return <h1>Caught an error</h1>
}


  return (
    <div>
        <p>Get jokes:
            <p>{data?.setup}</p>
            <p>{data?.punchline}</p>

        </p>
        <button onClick={refetch}>Update Fact</button>
    </div>
  )
}

export default Jokes