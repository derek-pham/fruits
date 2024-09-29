/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { objectCoords } from './contextData';

const CameraContext = createContext();

export const useCameraContext = () => useContext(CameraContext);

export const CameraProvider = ({ children }) => {
    const cameraRef = useRef();
    const controlsRef = useRef();
    const lerpValue = (start, end, t) => start + (end - start) * t;

    const [zoom, setZoom] = useState(() => new THREE.Vector3(50, 0, 0));
    const [smoothedZoom] = useState(() => new THREE.Vector3(50, 0, 0));

    const [cameraTarget, setCameraTarget] = useState(() => new THREE.Vector3(-5, 2, -5))
    const [smoothedCameraTarget] = useState(() => new THREE.Vector3());

    const [cameraPosition, setCameraPosition] = useState(() => new THREE.Vector3(8, 10, 8))
    const [smoothedCameraPosition] = useState(() => new THREE.Vector3(8, 10, 8));

    const [cameraSpeed, setCameraSpeed] = useState(() => new THREE.Vector3(0.008, 0.008, 0.008))

    const [chairPosition, setChairPosition] = useState(() => new THREE.Vector3(0, 0, 0))
    const [smoothedChairPosition] = useState(() => new THREE.Vector3(0, 0, 0));

    const [cameraMovedToDiffPainting, setCameraMovedToDiffPainting] = useState(false)
    const [objectOfFocus, setObjectOfFocus] = useState('null')


    const additionalActions = (object) => {
        if (object === 'laptop001') {
            setChairPosition(prevPosition => prevPosition.set(
                0, -3, 0
            ));
        }

        // RESTORE PAINTING HIGHLIGHT FUNCTIONALITY IF CAMERA MOVED TO A DIFFERENT ITEM OTHER THAN A PAINTING
        if (object !== 'painting1image' && object !== 'painting2image' && object !== 'painting3image') {
            setCameraMovedToDiffPainting(true)
        }

        // RESET
        if (object === 'reset' || object === 'resetWMenu') {
            setChairPosition(prevPosition => prevPosition.set(
                0, 0, 0
            ));
        }
    }

    const moveCameraTo = (event, object, triggerSoftReset = false) => {
        if (event) {
            event.stopPropagation()
        }
        if (triggerSoftReset) {
            const resetInfo = objectCoords.getObjectCoords('softReset')
            setCameraTarget(prevPosition => prevPosition.set(
                resetInfo.cameraTarget.x,
                resetInfo.cameraTarget.y,
                resetInfo.cameraTarget.z
            ));
            setCameraPosition(prevPosition => prevPosition.set(
                resetInfo.cameraPosition.x,
                resetInfo.cameraPosition.y,
                resetInfo.cameraPosition.z
            ));
            setZoom(prevPosition => prevPosition.set(
                resetInfo.cameraZoom.x,
                resetInfo.cameraZoom.y,
                resetInfo.cameraZoom.z
            ));
            setCameraSpeed(prevPosition => prevPosition.set(
                resetInfo.cameraSpeed.x,
                resetInfo.cameraSpeed.y,
                resetInfo.cameraSpeed.z
            ));
            setTimeout(() => {
                const objectInfo = objectCoords.getObjectCoords(object)
                additionalActions(object)
                setCameraTarget(prevPosition => prevPosition.set(
                    objectInfo.cameraTarget.x,
                    objectInfo.cameraTarget.y,
                    objectInfo.cameraTarget.z
                ));
                setCameraPosition(prevPosition => prevPosition.set(
                    objectInfo.cameraPosition.x,
                    objectInfo.cameraPosition.y,
                    objectInfo.cameraPosition.z
                ));
                setZoom(prevPosition => prevPosition.set(
                    objectInfo.cameraZoom.x,
                    objectInfo.cameraZoom.y,
                    objectInfo.cameraZoom.z
                ));
                setCameraSpeed(prevPosition => prevPosition.set(
                    objectInfo.cameraSpeed.x,
                    objectInfo.cameraSpeed.y,
                    objectInfo.cameraSpeed.z
                ));
            }, 1500)
        } else {
            const objectInfo = objectCoords.getObjectCoords(object)
            additionalActions(object)
            setCameraTarget(prevPosition => prevPosition.set(
                objectInfo.cameraTarget.x,
                objectInfo.cameraTarget.y,
                objectInfo.cameraTarget.z
            ));
            setCameraPosition(prevPosition => prevPosition.set(
                objectInfo.cameraPosition.x,
                objectInfo.cameraPosition.y,
                objectInfo.cameraPosition.z
            ));
            setZoom(prevPosition => prevPosition.set(
                objectInfo.cameraZoom.x,
                objectInfo.cameraZoom.y,
                objectInfo.cameraZoom.z
            ));
            setCameraSpeed(prevPosition => prevPosition.set(
                objectInfo.cameraSpeed.x,
                objectInfo.cameraSpeed.y,
                objectInfo.cameraSpeed.z
            ));
            console.log('Camera action: ' + object)
        }

    }

    useEffect(() => {
        const timer = setTimeout(() => {
            moveCameraTo(null, 'resetWMenu');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <CameraContext.Provider value={{
            cameraRef,
            controlsRef,
            lerpValue,
            zoom,
            smoothedZoom,
            setZoom,
            cameraTarget,
            setCameraTarget,
            smoothedCameraTarget,
            cameraPosition,
            setCameraPosition,
            smoothedCameraPosition,
            cameraSpeed,
            setCameraSpeed,
            moveCameraTo,
            chairPosition,
            setChairPosition,
            smoothedChairPosition,
            cameraMovedToDiffPainting,
            setCameraMovedToDiffPainting,
            objectOfFocus,
            setObjectOfFocus
        }}
        >
            {children}
        </CameraContext.Provider>
    );
};
