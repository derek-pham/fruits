/* eslint-disable react/no-unknown-property */
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { useCameraContext } from "./CameraControls/CameraContext"


function MainCamera() {
    const cameraRef = useRef();
    const controlsRef = useRef();
    const { size } = useThree()

    const {
        cameraTarget,
        smoothedCameraTarget,
        cameraPosition,
        smoothedCameraPosition,
        cameraSpeed
    } = useCameraContext()

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

    useFrame((state, delta) => {
        smoothedCameraTarget.lerp(cameraTarget, cameraSpeed.x)
        smoothedCameraPosition.lerp(cameraPosition, cameraSpeed.y)

        // Log every two seconds
        if (state.clock.elapsedTime % 3 >= 2.995) {
            // console.log(cameraRef.current.position.distanceTo(cameraPosition))
            // console.log(Math.floor(cameraRef.current.position.distanceTo(cameraPosition)))
        }

        // Moving the camera
        if (cameraRef.current) {
            cameraRef.current.position.copy(smoothedCameraPosition);
            cameraRef.current.lookAt(smoothedCameraTarget);
            cameraRef.current.updateProjectionMatrix();
        }
    })


    return (
        <>
            <OrbitControls ref={controlsRef} />
            <PerspectiveCamera makeDefault position={[0, 2, 6]} ref={cameraRef} />
        </>
    )
}

export default MainCamera
