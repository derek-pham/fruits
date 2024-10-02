import { useEffect, useState } from 'react'
import './Interface.css'
import { useInterfaceContext } from './InterfaceContext'
import fruitInfoText from './fruitInfoText'
import uiClickSFX from '/sfx/ui-click.mp3'

function Interface() {
    const { listNumber, setListNumber } = useInterfaceContext()
    const [infoText, setInfoText] = useState(fruitInfoText[0])
    const audio = new Audio(uiClickSFX)
    audio.volume = 0.3;

    function incrementForward() {
        if (listNumber === 3) {
            return;
        }
        setListNumber(prev => prev + 1)
        audio.play()
    }

    function incrementBackward() {
        if (listNumber === 0) {
            return;
        }
        setListNumber(prev => prev - 1);
        audio.play()
    }

    useEffect(() => {
        setInfoText(fruitInfoText[listNumber])
    }, [listNumber])

    return (
        <>
            <div className='overlay-window'>
                <h4>CURRENT NUMBER: {listNumber}</h4>
                <div className='left-right-buttons'>
                    <button className='button-go-left' onClick={incrementBackward}><img src="/icons/left.png" /></button>
                    <button className='button-go-right' onClick={incrementForward}><img src="/icons/left.png" /></button>
                </div>
                <div className='info-window'>
                    <h2>FRUIT</h2>
                    <p className='info-text'>
                        {infoText}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Interface
