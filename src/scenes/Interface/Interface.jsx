import { useEffect, useState } from 'react'
import './Interface.css'
import { useInterfaceContext } from './InterfaceContext'

function Interface() {
    const { listNumber, setListNumber } = useInterfaceContext()

    function incrementForward() {
        if (listNumber === 3) {
            return;
        }
        setListNumber(prev => prev + 1)
    }

    function incrementBackward() {
        if (listNumber === 0) {
            return;
        }
        setListNumber(prev => prev - 1);
    }

    return (
        <>
            <div className='overlay-window'>
                <h4>CURRENT NUMBER: {listNumber}</h4>
                <div>
                    <button onClick={incrementBackward}>Left</button>
                    <button onClick={incrementForward}>Right</button>
                </div>
            </div>
        </>
    )
}

export default Interface
