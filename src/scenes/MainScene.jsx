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
        moveCameraTo(null, [listNumber * 2, 2, 6], [listNumber * 2, 0, 0])
    }, [listNumber])

    useEffect(() => {
        const verticalOffset = 5
        if (crossSectionView) {
            moveCameraTo(null, [listNumber * 2, 2 + verticalOffset, 6], [listNumber * 2, 0 + verticalOffset, 0])
        } else {
            moveCameraTo(null, [listNumber * 2, 2, 6], [listNumber * 2, 0, 0])
        }
    }, [crossSectionView])

    return (
        <>
            <MainCamera />
            <color args={['#242424']} attach={'background'} />
            <Apple position={[0, 0, 0]} />
            <AppleSplit position={[0, 5, 0]} />
            <Banana position={[2, 0, 0]} />
            <Strawberry position={[4, 0, 0]} />
            <Grape position={[6, 0, 0]} />
            {/* <Grid args={[10, 10]} position={[0, -1, 0]} /> */}
        </>
    );
}

export default MainScene;
