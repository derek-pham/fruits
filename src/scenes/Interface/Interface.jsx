import { useEffect, useRef, useState } from 'react'
import './Interface.css'
import { useInterfaceContext } from './InterfaceContext'
import fruitInfoText from './fruitInfoText'
import uiClickSFX from '/sfx/ui-click.mp3'
import HiddenText from './HiddenText/HiddenText'

function Interface() {
    const listOfFruit = ['Apple', 'Banana', 'Strawberry', 'Grape']
    const { listNumber, setListNumber } = useInterfaceContext()
    const [infoTitle, setInfoTitle] = useState(listOfFruit[0])
    const [unlockedText, setUnlockedText] = useState({
        apple: [false, false],
        banana: [false, false],
        strawberry: [false, false],
        grape: [false, false],
    });

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

    const toggleLock = (fruit, index) => {
        setUnlockedText(prevState => ({
            ...prevState,
            [fruit]: prevState[fruit].map((isUnlocked, i) =>
                i === index ? !isUnlocked : isUnlocked
            )
        }));
    };

    useEffect(() => {
        setInfoTitle(listOfFruit[listNumber])
    }, [listNumber])

    const renderContent = () => {
        switch (infoTitle) {
            case 'Apple':
                return <>
                    <HiddenText
                        key="apple1"
                        text={fruitInfoText['apple'][0]}
                        isUnlocked={unlockedText.apple[0]}
                        toggleLock={() => toggleLock('apple', 0)}
                    />
                    <HiddenText
                        key="apple2"
                        text={fruitInfoText['apple'][1]}
                        isUnlocked={unlockedText.apple[1]}
                        toggleLock={() => toggleLock('apple', 1)}
                    />
                </>;
            case 'Banana':
                return <>
                    <HiddenText
                        key="banana1"
                        text={fruitInfoText['banana'][0]}
                        isUnlocked={unlockedText.banana[0]}
                        toggleLock={() => toggleLock('banana', 0)}
                    />
                    <HiddenText
                        key="banana2"
                        text={fruitInfoText['banana'][1]}
                        isUnlocked={unlockedText.banana[1]}
                        toggleLock={() => toggleLock('banana', 1)}
                    />
                </>;
            case 'Strawberry':
                return <>
                    <HiddenText
                        key="strawberry1"
                        text={fruitInfoText['strawberry'][0]}
                        isUnlocked={unlockedText.strawberry[0]}
                        toggleLock={() => toggleLock('strawberry', 0)}
                    />
                    <HiddenText
                        key="strawberry2"
                        text={fruitInfoText['strawberry'][1]}
                        isUnlocked={unlockedText.strawberry[1]}
                        toggleLock={() => toggleLock('strawberry', 1)}
                    />
                </>;
            case 'Grape':
                return <>
                    <HiddenText
                        key="grape1"
                        text={fruitInfoText['grape'][0]}
                        isUnlocked={unlockedText.grape[0]}
                        toggleLock={() => toggleLock('grape', 0)}
                    />
                    <HiddenText
                        key="grape2"
                        text={fruitInfoText['grape'][1]}
                        isUnlocked={unlockedText.grape[1]}
                        toggleLock={() => toggleLock('grape', 1)}
                    />
                </>;
            default:
                return <div>404 - Page Not Found</div>;
        }
    };

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
                    {renderContent()}
                </div>
            </div>
        </>
    )
}

export default Interface
