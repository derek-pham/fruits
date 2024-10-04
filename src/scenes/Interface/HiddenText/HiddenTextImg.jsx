/* eslint-disable react/prop-types */
import { useState } from "react"

function HiddenTextImg({ setTransformCircle, toggleLock, isUnlocked }) {
    const [unlockAnim, setUnlockAnim] = useState('')
    const [lockIconUrl, setLockIconUrl] = useState('/icons/lock.png')
    const [renderIcon, setRenderIcon] = useState(!isUnlocked)

    const handleUnlockAnim = () => {
        setUnlockAnim('unlock-anim')
        setLockIconUrl('/icons/unlock.png')
        setTransformCircle('transform-circle')
        toggleLock()
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
