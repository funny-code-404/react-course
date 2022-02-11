/* eslint-disable no-unused-vars */
import {useState} from 'react'
import { withCustomData } from "../hocs/withCustomData"
import Input from "../Input"
import {NAMES, data} from './consts'

function Form ({data,render}){
const [name, setName]=useState(data?.name || '')
const [email, setEmail]=useState(data?.email || '')
const [password, setPassword]=useState(data?.password || '')


const handleChange = ({target})=>{
    const {name, value} = target

    name === NAMES.name && setName(value) 
    name === NAMES.email && setEmail(value) 
    name === NAMES.password && setPassword(value)     
}

    return <form>
        <Input name={NAMES.name}
                placeholder={NAMES.name}
                value={name}
                onChange={handleChange}/>

        <Input name={NAMES.email}
                placeholder={NAMES.email}
                value={email}
                onChange={handleChange}/>

        <Input name={NAMES.password}
                placeholder={NAMES.password}
                value={password}
                onChange={handleChange}/>

        {render({
            lastName:data.lastName,
            year:data.year,
            phone:data.phone
        })}
    </form>
}

export default withCustomData(Form);