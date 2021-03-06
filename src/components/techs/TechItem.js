import React from 'react'
import PropTypes from 'prop-types'


const TechItem = ({tech})=> {
    return (
        <div className="collection-item">
            <div>
                {tech.firstName}{tech.lastName}
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </div>
    )
}



export default TechItem