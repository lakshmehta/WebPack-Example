import React from 'react'

export default function Movie(props) {
    return (
        <div>
            <h3>{props.Name}<p>{props.price}</p></h3>
        </div>
    )
}
