/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

function Grape({ position = [0, 0, 0] }) {
    const { scene, animations } = useGLTF('/models/grape.glb'); // load the model
    const { actions } = useAnimations(animations, scene);  // Set up the animation actions

    useEffect(() => {
        // Play the 'fruitMeshSpin' animation
        actions['fruitMeshSpin'].play();

        return () => {
            actions['fruitMeshSpin'].stop(); // Clean up on unmount
        };
    }, [actions]);

    return (
        <>
            <primitive object={scene} scale={1.5} position={position} />
        </>
    );
}

export default Grape;
