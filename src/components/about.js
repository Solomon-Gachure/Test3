import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'


const About = () => {
const {data, isError,isLoading,refetch}= useQuery(
    {
        queryKey: ["cat"],
        queryFn:()=>axios.get('https://www.boredapi.com/api/activity').then((res)=> res.data)
    }
)
if (isError) {
    return <h1>Sorry error</h1>
}
if (isLoading) {
    return <h1>Loading...</h1>
}



  return (
    <div>
        <p>Activity facts: <p>{data?.activity}</p>
        <p>{data?.type}</p>
        <p>{data?.participants}</p>
        </p>
        <button onClick={refetch}>Update Fact</button>
    </div>
  )
}

export default About