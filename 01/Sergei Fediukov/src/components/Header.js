import React from 'react'

function Header() {
    return (
        <section className="header">
            <div className='nav'>
                <div className='nav_brand'>Brand name</div>
                <div className='nav_items'>
                    <a href='#' className="nav_item">Home</a>
                    <a href='#' className="nav_item">About</a>
                    <a href='#' className="nav_item">Contacts</a>
                </div>
            </div>
        </section>
    )
}
export default Header