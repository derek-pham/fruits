/* eslint-disable react/no-unknown-property */
import MainCamera from "./MainCamera";
import { Grid } from "@react-three/drei";
import Apple from "./Fruits/Apple";
import Banana from "./Fruits/Banana"
import Grape from "./Fruits/Grape"
import Strawberry from "./Fruits/Strawberry"
import { useInterfaceContext } from "./Interface/InterfaceContext";
import { useCameraContext } from "./CameraControls/CameraContext";
import { useEffect } from "react";

function MainScene() {
    const { listNumber } = useInterfaceContext()
    const { moveCameraTo } = useCameraContext()

    useEffect(() => {
        moveCameraTo(null, [listNumber * 1.75, 2, 6], [listNumber * 1.75, 0, 0])
    }, [listNumber])

    return (
        <>
            <MainCamera />
            <color args={['#242424']} attach={'background'} />
            <Apple position={[0, 0, 0]} />
            <Banana position={[1.75, 0, 0]} />
            <Strawberry position={[3.25, 0, 0]} />
            <Grape position={[4.75, 0, 0]} />
            <Grid args={[10, 10]} position={[0, -1, 0]} />
        </>
    );
}

export default MainScene;
