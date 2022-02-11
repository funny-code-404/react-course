import {data} from '../Form/consts'

const withCustomData=(Component)=>(props)=>{
   
    return <Component {...props} data={data}/>
}

export {withCustomData}