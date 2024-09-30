/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF, useAnimations } from "@react-three/drei";
import { useInterfaceContext } from "../Interface/InterfaceContext";
import { useEffect, useState } from "react";

function Apple({ position = [0, 0, 0] }) {
    const { listNumber } = useInterfaceContext()
    const [itemScale, setItemScale] = useState(2)
    const { scene, animations } = useGLTF('/models/apple.glb'); // load the model
    const { actions } = useAnimations(animations, scene);  // Set up the animation actions

    useEffect(() => {
        // Play the 'appleSpin' animation
        actions['appleMeshSpin'].play();

        return () => {
            actions['appleMeshSpin'].stop(); // Clean up on unmount
        };
    }, [actions]);

    useEffect(() => {
        if (listNumber == 0) {
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
