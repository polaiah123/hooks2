import React,{useContext} from 'react'

import {user,user1} from '../App'

function ContextExample3() {
      const users = useContext(user)
      const channels = useContext(user1)

    return (
        <div>
             {users} - {channels}  
        </div>
    )
}

export default ContextExample3
