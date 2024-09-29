import { useEffect, useState } from 'react'
import './Interface.css'
import { useInterfaceContext } from './InterfaceContext'

function Interface() {
    const { loadingStatus } = useInterfaceContext()
    const [renderOverlay, setRenderOverlay] = useState(true)
    const [anim, setAnim] = useState('')
    const [loadingCircleAnim, setLoadingCircleAnim] = useState('')

    useEffect(() => {
        if (loadingStatus >= 100) {
            // Setting a timeout prevents major visual lag in animations 

            setTimeout(() => {
                setLoadingCircleAnim('shrinkCircle')
            }, 100)
        }
    }, [loadingStatus])

    useEffect(() => {
        if (loadingCircleAnim == 'expandCircle') {
            setTimeout(() => {
                setAnim('fadeOutAnim')
            }, 1600)
        }
    }, [loadingCircleAnim])

    return (
        <>
            {renderOverlay &&
                <div className={`intro-overlay ${anim}`} onAnimationEnd={(e) => {
                    e.stopPropagation()
                    setRenderOverlay(false);
                }}>
                    <div className={`loading-circle ${loadingCircleAnim}`}
                        onAnimationEnd={(e) => {
                            e.stopPropagation()
                            setLoadingCircleAnim('expandCircle')
                        }}>
                    </div>
                </div>

            }
        </>
    )
}

export default Interface
