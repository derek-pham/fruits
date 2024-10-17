/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF, useAnimations } from "@react-three/drei";
import { useInterfaceContext } from "../Interface/InterfaceContext";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three';

function Strawberry() {
    const { listNumber } = useInterfaceContext()
    const [itemScale, setItemScale] = useState(2)
    const { scene, animations } = useGLTF('/models/strawberry.glb'); // load the model
    const { actions } = useAnimations(animations, scene);  // Set up the animation actions
    const fruitRef = useRef()
    const [position, setPosition] = useState(() => new THREE.Vector3(-10 - 1.5, 0, 0))
    const [smoothedPosition] = useState(() => new THREE.Vector3(-10 - 1.5, 0, 0));

    useEffect(() => {
        // Play the 'fruitMeshSpin' animation
        actions['fruitMeshSpin'].play();

        return () => {
            actions['fruitMeshSpin'].stop(); // Clean up on unmount
        };
    }, [actions]);

    useEffect(() => {
        setPosition(prevPosition => prevPosition.set(-10 - 1.5, listNumber * 2.5 - 5, 0));
        if (listNumber == 2) {
            setItemScale(2);
        } else {
            setItemScale(1.5);
        }
    }, [listNumber]);

    useFrame((state, delta) => {
        smoothedPosition.lerp(position, 0.03)
        fruitRef.current.position.copy(smoothedPosition)
    })

    return (
        <>
            <primitive ref={fruitRef} object={scene} scale={itemScale} position={[-10 - 1.5, listNumber - 5, 0]} />
        </>
    );
}

export default Strawberry;
