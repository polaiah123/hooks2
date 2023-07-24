import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Datafetching() {
const [posts, setPost]= useState({})
const [id,setcount] = useState(1)

useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>
            console.log(err))
   
}, [id])
    return (
        <div>
            <button onClick={()=>setcount(id+1)}>button</button> 
            <ul>
            {posts.title}
            {/* {
                posts.map(posts =>(
                    <li key={posts.id}>{posts.title}</li>
                    ) 
                 ) }*/}
            </ul>
        </div>
    )
}

export default Datafetching
