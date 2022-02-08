/* eslint-disable react/prop-types */
import React from "react"
import {Link} from "react-router-dom"

const ListItem =(props)=> {       
    
        const { content, state, pathname} = props

        return (
            <li >                        
              <Link to ={{
                pathname:pathname,
                state:state
                }                            
              }>{content}                         
              </Link>
            </li>
        )     
}

export default React.memo(ListItem)