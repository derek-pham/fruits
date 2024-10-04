/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from 'react'
import HiddenTextImg from './HiddenTextImg'
import './HiddenText.css'

function HiddenText({ text, isUnlocked, toggleLock, fruit }) {
    const hiddenTextDivRef = useRef(null)
    const hiddenTextInnerDivRef = useRef(null)
    const infoTextDivRef = useRef(null)
    const [transformCircle, setTransformCircle] = useState('')
    const [circleDivWidth, setCircleDivWidth] = useState('')
    const [circleDivHeight, setCircleDivHeight] = useState('')
    const [hiddenTextInnerDivWidth, setHiddenTextInnerDivWidth] = useState('')
    const [hiddenTextInnerDivHeight, setHiddenTextInnerDivHeight] = useState('')
    const [hiddenTextDivHeight, setHiddenTextDivHeight] = useState('')

    const updateCircleSize = () => {
        if (hiddenTextInnerDivRef.current && hiddenTextDivRef.current) {
            const newHiddenTextDivHeight = infoTextDivRef.current.getBoundingClientRect().height
            setHiddenTextDivHeight(`${newHiddenTextDivHeight + 40}px`)

            const newHiddenTextInnerDivWidth = hiddenTextDivRef.current.getBoundingClientRect().width
            const newHiddenTextInnerDivHeight = hiddenTextDivRef.current.getBoundingClientRect().height

            setHiddenTextInnerDivWidth(`${newHiddenTextInnerDivWidth - 12}px`)
            setHiddenTextInnerDivHeight(`${newHiddenTextInnerDivHeight - 12}px`)

            setCircleDivWidth(`${newHiddenTextInnerDivWidth - 12}px`)
            setCircleDivHeight(`${newHiddenTextInnerDivHeight - 12}px`)
        }
    }

    useEffect(() => {
        // Function to detect viewport width and height change
        const handleWindowResizeOrMaximize = () => {
            updateCircleSize()
        }

        // Add resize event listener
        window.addEventListener('resize', handleWindowResizeOrMaximize)

        // MatchMedia for screen size change or maximization
        const mql = window.matchMedia('(min-width: 1024px) and (min-height: 768px)')
        mql.addEventListener('change', handleWindowResizeOrMaximize)

        // Cleanup the event listeners on component unmount
        return () => {
            window.removeEventListener('resize', handleWindowResizeOrMaximize)
            mql.removeEventListener('change', handleWindowResizeOrMaximize)
        }
    }, [])

    useEffect(() => {
        // Initial size setting
        updateCircleSize()
    }, [hiddenTextDivHeight])

    return (
        <div className={`hidden-text ${fruit}`} ref={hiddenTextDivRef}
            style={{
                height: hiddenTextDivHeight,
            }}
        >
            <div className={`hidden-text-inner`}
                ref={hiddenTextInnerDivRef}
                style={{
                    width: hiddenTextInnerDivWidth,
                    height: hiddenTextInnerDivHeight,
                }}
            >
                <div className={`${isUnlocked ? 'transformed-circle' : 'circle ' + transformCircle}`}
                    style={{
                        width: circleDivWidth,
                        height: circleDivHeight,
                    }}
                >
                    <div className='info-text' ref={infoTextDivRef}>{text}</div>
                </div>
                <HiddenTextImg
                    setTransformCircle={setTransformCircle}
                    toggleLock={toggleLock}
                    isUnlocked={isUnlocked}
                />
            </div>
        </div>
    )
}

export default HiddenText
