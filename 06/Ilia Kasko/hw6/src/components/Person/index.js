import { useHistory, useParams } from 'react-router'

import { users } from '../Data'
import React from "react";
import Friends from "../Friends";

const Person = (props) => {

    const history = useHistory()
    const params = useParams()
    const {id, isContact} = props

    const handleClick = () => history.goBack()

    return(
        <div>
            {users.map((user, i) => (
                user.id === id|| user.id === params.id ? (
                    <div>
                        <div>
                            {isContact? <h2>{user.name}</h2> : <h2>{user.phone}</h2>}
                        </div>
                        <div>
                            <p>Друзья</p>
                            <Friends isContact = {isContact} friends={user.friends}/>
                        </div>
                    </div>
                ) : false
            ))}
            <button onClick={handleClick}>back</button>
        </div>
    )
}

export default Person;