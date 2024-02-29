import React from 'react'

export default function Section(props) {
    return (
        <div className="sm:w-full lg:w-3/4 sm:px-3 lg:m-auto">
            {props.children}
        </div>
    )
}
