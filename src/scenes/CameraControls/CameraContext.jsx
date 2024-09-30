/* eslint-disable react/prop-types */
import React, { createContext, useContext, useRef, useState } from 'react';
import * as THREE from 'three';

const CameraContext = createContext();

export const useCameraContext = () => useContext(CameraContext);

export const CameraProvider = ({ children }) => {
    const cameraRef = useRef();
    const controlsRef = useRef();
    const lerpValue = (start, end, t) => start + (end - start) * t;

    const [cameraTarget, setCameraTarget] = useState(() => new THREE.Vector3(0, 0, 0))
    const [smoothedCameraTarget] = useState(() => new THREE.Vector3(0, 0, 0));

    const [cameraPosition, setCameraPosition] = useState(() => new THREE.Vector3(0, 2, 6))
    const [smoothedCameraPosition] = useState(() => new THREE.Vector3(0, 2, 6));

    const [cameraSpeed, setCameraSpeed] = useState(() => new THREE.Vector3(0.03, 0.03, 0.03))

    const moveCameraTo = (event, position, target) => {
        if (event) {
            event.stopPropagation()
        }
        setCameraTarget(prevPosition => prevPosition.set(
            target[0],
            target[1],
            target[2]
        ));
        setCameraPosition(prevPosition => prevPosition.set(
            position[0],
            position[1],
            position[2]
        ));
    }

    return (
        <CameraContext.Provider value={{
            cameraRef,
            controlsRef,
            lerpValue,
            cameraTarget,
            setCameraTarget,
            smoothedCameraTarget,
            cameraPosition,
            setCameraPosition,
            smoothedCameraPosition,
            cameraSpeed,
            setCameraSpeed,
            moveCameraTo,
        }}
        >
            {children}
        </CameraContext.Provider>
    );
};
