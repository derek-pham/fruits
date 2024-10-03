import { useEffect, useState } from 'react'
import './Interface.css'
import { useInterfaceContext } from './InterfaceContext'
import fruitInfoText from './fruitInfoText'
import uiClickSFX from '/sfx/ui-click.mp3'
import HiddenText from './HiddenText/HiddenText'

function Interface() {
    const listOfFruit = ['Apple','Banana','Strawberry','Grape']

    const { listNumber, setListNumber } = useInterfaceContext()
    const [infoText, setInfoText] = useState(fruitInfoText[0])
    const [infoTitle, setInfoTitle] = useState(listOfFruit[0])
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
        setInfoTitle(listOfFruit[listNumber])
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
                    <h2>{infoTitle}</h2>
                    <HiddenText/>
                    <p className='info-text'>
                        {infoText}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Interface
