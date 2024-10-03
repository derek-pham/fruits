import { useRef, useState, useEffect } from 'react'
import HiddenTextImg from './HiddenTextImg'
import './HiddenText.css'

function HiddenText() {
    const hiddenTextInnerDivRef = useRef(null)
    const [transformCircle, setTransformCircle] = useState('')
    const [circleDivWidth, setCircleDivWidth] = useState('')
    const [circleDivHeight, setCircleDivHeight] = useState('')

    const updateCircleSize = () => {
        if (hiddenTextInnerDivRef.current) {
            const newWidth = hiddenTextInnerDivRef.current.getBoundingClientRect().width
            const newHeight = hiddenTextInnerDivRef.current.getBoundingClientRect().height
            setCircleDivWidth(`${newWidth}px`)
            setCircleDivHeight(`${newHeight}px`)
        }
    }

    useEffect(() => {
        // Initial size setting
        updateCircleSize()

        // Add resize event listener
        window.addEventListener('resize', updateCircleSize)

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateCircleSize)
        }
    }, [])

    const handleTransformCircleAnimEnd = () => {
        // setTransformCircle('')
    }

    return (
        <div className='hidden-text'>
            <div className={`hidden-text-inner`} ref={hiddenTextInnerDivRef}>
                <div className={`circle ${transformCircle}`}
                    style={{
                        width: circleDivWidth,
                        height: circleDivHeight,
                    }}
                    onAnimationEnd={handleTransformCircleAnimEnd}
                ></div>
                <HiddenTextImg
                    setTransformCircle={setTransformCircle}
                />
            </div>
        </div>
    )
}

export default HiddenText
