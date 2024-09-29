import { useEffect, useState } from 'react'
import './Interface.css'
import { useInterfaceContext } from './InterfaceContext'

function Interface() {
    const { loadingStatus } = useInterfaceContext()

    return (
        <>
            <div className='overlay-window'>
                <h1>TEST</h1>
            </div>
        </>
    )
}

export default Interface
