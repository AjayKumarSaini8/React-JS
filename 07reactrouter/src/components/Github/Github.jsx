import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/AjayKumarSaini8')
    //         .then((res) => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])


    return (
        <div className='bg-orange-500 text-black text-3xl
        text-center py-5'>Github followers: {data.followers}
            <img src={data.avatar_url} width={300} alt='img' />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/AjayKumarSaini8')
    return res.json()
}