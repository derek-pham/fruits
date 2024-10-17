/* eslint-disable react/no-unknown-property */
import MainCamera from "./MainCamera";
import { Grid } from "@react-three/drei";
import Apple from "./Fruits/Apple";
import AppleSplit from "./Fruits/AppleSplit";
import Banana from "./Fruits/Banana"
import Grape from "./Fruits/Grape"
import Strawberry from "./Fruits/Strawberry"
import { useInterfaceContext } from "./Interface/InterfaceContext";
import { useCameraContext } from "./CameraControls/CameraContext";
import { useEffect } from "react";

function MainScene() {
    const { listNumber, crossSectionView } = useInterfaceContext()
    const { moveCameraTo } = useCameraContext()

    useEffect(() => {
        if (crossSectionView) {
            const horizontalOffset = 1
            moveCameraTo(null, [horizontalOffset, listNumber * -2.5 + 2 + 0.25, 6], [horizontalOffset, listNumber * -2.5 - 0.25, 0])
        } else {
            moveCameraTo(null, [-10, listNumber * -2.5 + 2 + 0.25, 6], [-10, listNumber * -2.5 - 0.25, 0])
        }
    }, [listNumber])

    useEffect(() => {
        const horizontalOffset = 1
        if (crossSectionView) {
            moveCameraTo(null, [horizontalOffset, listNumber * -2.5 + 2 + 0.25, 6], [horizontalOffset, listNumber * -2.5 - 0.25, 0])
        } else {
            moveCameraTo(null, [-10, listNumber * -2.5 + 2 + 0.25, 6], [-10, listNumber * -2.5 - 0.25, 0])
        }
    }, [crossSectionView])

    return (
        <>
            <MainCamera />
            <color args={['#242424']} attach={'background'} />
            <Apple position={[-1.5 - 10, 0, 0]} />
            <AppleSplit position={[10 - 10, 0, 0]} />
            <Banana position={[-1.5 - 10, -2.5, 0]} />
            <Strawberry position={[-1.5 - 10, -5, 0]} />
            <Grape position={[-1.5 - 10, -7.5, 0]} />
            {/* <Grid args={[20, 5]} position={[0, -1, 0]} /> */}
        </>
    );
}

export default MainScene;
