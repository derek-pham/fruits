/* eslint-disable react/prop-types */
import { useState } from "react"

function HiddenTextImg({ setTransformCircle }) {
    const [unlockAnim, setUnlockAnim] = useState('')
    const [lockIconUrl, setLockIconUrl] = useState('/icons/lock.png')
    const [renderIcon, setRenderIcon] = useState(true)

    const handleUnlockAnim = () => {
        setUnlockAnim('unlock-anim')
        setLockIconUrl('/icons/unlock.png')
        setTransformCircle('transform-circle')
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
