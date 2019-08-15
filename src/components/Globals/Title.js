import React from 'react'

export default function Title({ title }) {
    return (
        <div className="row">
            <div className="col text-ceneter mb-3">
                <h1 className="display-4 text-capitalize font-weight-bold text-center">{title}</h1>
            </div>
        </div>
    )
}
