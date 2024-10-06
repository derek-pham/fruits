/* eslint-disable react/prop-types */
import { useState } from "react"
import uiUnlockSFX from '/sfx/ui-unlock.wav'

function HiddenTextImg({ setTransformCircle, toggleLock, isUnlocked, setBounceText }) {
    const [unlockAnim, setUnlockAnim] = useState('')
    const [lockIconUrl, setLockIconUrl] = useState('/icons/lock.png')
    const [renderIcon, setRenderIcon] = useState(!isUnlocked)

    const audio = new Audio(uiUnlockSFX)
    audio.volume = 0.4;

    const handleUnlockAnim = () => {
        audio.play()
        setUnlockAnim('unlock-anim')
        setLockIconUrl('/icons/unlock.png')
        setTransformCircle('transform-circle')
        toggleLock()
        setTimeout(() => {
            setBounceText('bounce-in')
        }, 1550)
    }

    const handleUnlockAnimEnd = () => {
        setRenderIcon(false)
    }

    return (
        <>
            {renderIcon && <img className={`lock-icon ${unlockAnim}`} src={lockIconUrl} onClick={handleUnlockAnim} onAnimationEnd={handleUnlockAnimEnd} />}
        </>
    )
}

export default HiddenTextImg
