/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF, useAnimations } from "@react-three/drei";
import { useInterfaceContext } from "../Interface/InterfaceContext";
import { useEffect, useState } from "react";

function Apple({ position = [0, 0, 0] }) {
    const { listNumber } = useInterfaceContext()
    const [itemScale, setItemScale] = useState(2)
    const { scene, animations } = useGLTF('/models/banana.glb'); // load the model
    const { actions } = useAnimations(animations, scene);  // Set up the animation actions

    useEffect(() => {
        // Play the 'fruitMeshSpin' animation
        actions['fruitMeshSpin'].play();

        return () => {
            actions['fruitMeshSpin'].stop(); // Clean up on unmount
        };
    }, [actions]);

    useEffect(() => {
        if (listNumber == 1) {
            setItemScale(2);
        } else {
            setItemScale(1.5);
        }
    }, [listNumber]);

    return (
        <>
            <primitive object={scene} scale={itemScale} position={position} />
        </>
    );
}

export default Apple;
