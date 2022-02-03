import React from "react";
import ListItem from "../ListItem";
import Image from "../Image";
import { nanoid } from 'nanoid'
import './style.scss'

const url ='https://dog.ceo/api/breeds/list/all'

function parseData(obj) {   
    return Object.keys(obj).slice(0, 9)   
}

async function getInfo(url){
    const responce = await fetch(url)
    const data = await responce.json()

    return data
}


class List extends React.Component{
    state={
        data:null,
        src:''
    }
    
    async componentDidMount(){
        const data = await getInfo(url)      
        const dataParse = parseData(data.message)

        const way = dataParse[Math.floor(Math.random()*dataParse.length)];        
        const src = await getInfo(`https://dog.ceo/api/breed/${way}/images/random`)
                       
        this.setState((prevState)=>({
            ...prevState,
            data:dataParse,
            src:src.message
        }
        ))        
    }

    handleClickListItem = async ({target})=>{
        const way = target.textContent
        const src = await getInfo(`https://dog.ceo/api/breed/${way}/images/random`)
        
        this.setState((prevState)=>({
            ...prevState,          
            src:src.message
        }
        )) 
    }

    shouldComponentUpdate(){
        console.log('Изображение загружено')
        return true
    }
    
    render(){
        const {data, src} = this.state
        
        return(
            <div>
                <ul>
                    {data && data.map((item) => (
                     <ListItem key = {nanoid()} onClick = {this.handleClickListItem} content={item}/>
                     ))}
                </ul>
                {src && <Image src={src}/>}
            </div>
        )
    }
}

export default List