/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF, useAnimations, Grid } from "@react-three/drei";
import { useEffect } from "react";

function Apple({ position = [0, 0, 0] }) {
    const { scene, animations } = useGLTF('/models/apple.glb'); // load the model
    const { actions } = useAnimations(animations, scene);  // Set up the animation actions

    useEffect(() => {
        // Play the 'appleSpin' animation
        actions['appleMeshSpin'].play();

        return () => {
            actions['appleMeshSpin'].stop(); // Clean up on unmount
        };
    }, [actions]);

    return (
        <>
            <primitive object={scene} scale={1.5} position={position} />
        </>
    );
}

export default Apple;
