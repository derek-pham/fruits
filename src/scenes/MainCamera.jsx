/* eslint-disable react/no-unknown-property */
import { OrthographicCamera, OrbitControls, useHelper } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { CameraHelper } from "three"
import * as THREE from 'three'
import { useEffect, useRef, useState } from "react"
import { useCameraContext } from "./CameraControls/CameraContext"
import { useInterfaceContext } from "./Interface/InterfaceContext"


function MainCamera() {
    const cameraRef = useRef();
    const controlsRef = useRef();
    const [cameraHasInitialized, setCameraHasInitialized] = useState(true)
    const { size } = useThree()
    // console.log(size)

    const {
        zoom,
        smoothedZoom,
        cameraTarget,
        smoothedCameraTarget,
        cameraPosition,
        smoothedCameraPosition,
        cameraSpeed,
        objectOfFocus
    } = useCameraContext()

    const {
        setTriggerNoteFor,
        triggerNoteFor
    } = useInterfaceContext()


    // useHelper(cameraRef, CameraHelper);

    useEffect(() => {
        const handleResize = () => {
            const aspect = size.width / size.height
            if (cameraRef.current) {
                cameraRef.current.left = -aspect * 400
                cameraRef.current.right = aspect * 400
                cameraRef.current.top = 400
                cameraRef.current.bottom = -400
                cameraRef.current.updateProjectionMatrix()
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [size])



    function initiateCamera() {
        if (!cameraHasInitialized) {
            return
        } else {
            if (cameraRef.current) {
                cameraRef.current.position.set(8, 10, 8);
                cameraRef.current.lookAt(cameraTarget);
                cameraRef.current.updateProjectionMatrix()
                // console.log(cameraRef.current);
            }
            if (controlsRef.current) {
                controlsRef.current.target.set(-5, 2, -5);
                controlsRef.current.update(); // Ensure controls are updated with new target
            }
            setCameraHasInitialized(false)
        }
    }

    return (
        <>
            <OrbitControls ref={controlsRef} makeDefault/>
        </>
    )
}

export default MainCamera
