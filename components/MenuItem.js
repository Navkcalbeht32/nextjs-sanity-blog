import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuItem = ({title, icon}) => {
    return (
        <div className="menu-item">
            <FontAwesomeIcon icon={icon} className="nav-icon" />
            <h4 className="title">{title}</h4>
        </div>
    )
}

export default MenuItem