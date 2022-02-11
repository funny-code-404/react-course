import React from "react";

export const withUser1 = (Component) => props => {
    return (
        <Component {...props} user = {{name: 'user1', password: 'gt77tsr3ff28d', mail: 'user1@protonmail.com'}}/> 
    )
}