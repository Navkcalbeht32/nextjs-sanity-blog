import React from 'react'
import MenuItem from 'components/MenuItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'


const StickyMenu = () => {
    return (
        <>
        <div className="sticky-menu">
            <div className="menu-wrapper">
                <div className="menu-item">
                    <FontAwesomeIcon icon={faHome} className="nav-icon" />
                    <h6>Home</h6>
                </div>
                <div className="menu-item">
                    <FontAwesomeIcon icon={faCode} className="nav-icon" />
                    <h6>Portfolio</h6>
                </div>
                <div className="menu-item">
                    <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
                    <h6>Links</h6>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default StickyMenu;