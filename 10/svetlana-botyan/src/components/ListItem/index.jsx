import React from "react"
import {Link} from "react-router-dom"

const ListItem =({content, state, pathname})=> {           
        return (
            <li >                        
              <Link to ={{
                pathname:pathname,
                state
                }                            
              }>{content}                         
              </Link>
            </li>
        )     
}

export default React.memo(ListItem)